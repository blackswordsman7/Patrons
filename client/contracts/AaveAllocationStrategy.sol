pragma solidity >=0.5.10 <0.6.0;

import {IAllocationStrategy} from "./IAllocationStrategy.sol";
import {Ownable} from "./installed-contracts/openzeppelin-solidity/contracts/ownership/Ownable.sol";
import {IERC20} from "./installed-contracts/openzeppelin-solidity/contracts/token/ERC20/IERC20.sol";
import {AErc20Interface} from "./aave/AErc20Interface.sol";

contract CompoundAllocationStrategy is IAllocationStrategy, Ownable {

    AErc20Interface private aToken;
    IERC20 private token;

    constructor(AErc20Interface aToken_) public {
        aToken = aToken_;
        token = IERC20(aToken.underlyingAssetAddress());
    }

    /// @dev ISavingStrategy.underlying implementation
    function underlying() external view returns (address) {
        return aToken.underlyingAssetAddress();
    }

    /// @dev ISavingStrategy.exchangeRateStored implementation
    function exchangeRateStored() external view returns (uint256) {
        return aToken.getExchangeRate();
    }

    /// @dev ISavingStrategy.accrueInterest implementation
    function accrueInterest() external returns (bool) {
        return true;
    }

    /// @dev ISavingStrategy.investUnderlying implementation
    function investUnderlying(uint256 investAmount) external onlyOwner returns (uint256) {
        token.transferFrom(msg.sender, address(this), investAmount);
        token.approve(address(aToken), investAmount);
        uint256 aTotalBefore = aToken.totalSupply();
        // TODO should we handle mint failure?
        aToken.mintOnDeposit(msg.sender, investAmount);
        uint256 aTotalAfter = aToken.totalSupply();
        uint256 aCreatedAmount;
        require (aTotalAfter >= aTotalBefore, "Compound minted negative amount!?");
        aCreatedAmount = aTotalAfter - aTotalBefore;
        return aCreatedAmount;
    }

    /// @dev ISavingStrategy.redeemUnderlying implementation
    function redeemUnderlying(uint256 redeemAmount) external onlyOwner returns (uint256) {
        uint256 aTotalBefore = aToken.totalSupply();
        // TODO should we handle redeem failure?
        aToken.redeem(redeemAmount);
        uint256 aTotalAfter = aToken.totalSupply();
        uint256 aBurnedAmount;
        require(aTotalAfter <= aTotalBefore, "Compound redeemed negative amount!?");
        aBurnedAmount = aTotalBefore - aTotalAfter;
        token.transfer(msg.sender, redeemAmount);
        return aBurnedAmount;
    }

}
