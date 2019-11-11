pragma solidity >=0.5.10 <0.6.0;

interface AErc20Interface{
    function approve(address spender, uint256 _amount) external;
    function transferFrom(address spender, address recipient, uint256 _amount) external;
    function increaseAllowance(address spender, uint256 _addedValue) external;
    function decreaseAllowance(address spender, uint256 _subtractedValue) external;
    function transfer(address recipient, uint256 _amount) external;
    function redeem(uint256 _amount) external;
    function mintOnDeposit(address _account, uint256 _underlyingAmount) external;
    function burnOnLiquidation(address account, uint256 value) external;
    function transferOnLiquidation(address from, address to, uint256 value) external;
    function name() external view returns (string memory);
    function totalSupply() external view returns (uint256);
    function decimals() external view returns (uint8);
    function initialExchangeRate() external view returns (uint256);
    function balance(address) external view returns (uint256);
    function underlyingAssetAddress() external view returns (address);
    function underlyingAssetDecimals() external view returns (uint256);
    function getExchangeRate() external view returns (uint256);
    function balanceOfUnderlying(address _user) external view returns (uint256);
    function aTokenAmountToUnderlyingAmount(uint256 _amount) external view returns (uint256);
    function isTransferAllowed(address _from, uint256 _amount) external view returns (bool);
    function underlyingAmountToATokenAmount(uint256 _amount) external view returns (uint256);
}