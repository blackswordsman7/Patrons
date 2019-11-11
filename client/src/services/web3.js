import { ethers } from "ethers";
// import rDAIContract from "./contracts/rDAI.abi.json";

class Web3Service {
  rDAIAddress = "0xeA718E4602125407fAfcb721b7D760aD9652dfe7";

  getContract = () => {
    let contract = null;
    if (
      typeof window.ethereum !== "undefined" ||
      typeof window.web3 !== "undefined"
    ) {
      console.log(window.web3.version);
      // Web3 browser user detected. You can now use the provider.
      let provider = window["ethereum"] || window.web3.currentProvider;
      //NOTE: must wrap window.etherm to get provider, not window.web3
      provider = new ethers.providers.Web3Provider(window.ethereum);
      //   contract = new ethers.Contract(this.rDAIAddress, rDAIContract, provider);
    }
    return contract;
  };

  getAccount = async () => {
    let account = null;
    try {
      if (
        typeof window.ethereum !== "undefined" ||
        typeof window.web3 !== "undefined"
      ) {
        // console.log("No selected address, requesting log in");
        account = await window.ethereum.enable();
        // console.log("Selected Address is: " + account[0]);
      }
    } catch (error) {
      console.log(error);
    }
    return account;
  };

  getBalanceOf = async (contract, selectedAddress) => {
    let principal = null;
    if (contract !== undefined) {
      principal = await contract.balanceOf(selectedAddress);
    }
    return principal;
  };

  getInterest = async (contract, selectedAddress) => {
    let interest = null;
    if (contract !== undefined) {
      interest = await contract.interestPayableOf(selectedAddress);
    }
    return interest;
  };

  getAllocatedTribute = async (contract, selectedAddress) => {
    let hats = await contract.getHatByAddress(selectedAddress);

    let allocated = 0;

    if (hats !== undefined) {
      allocated = hats.proportions[0];
    }
    return { hats, allocated };
  };

  mintRDai = async (amount, contract) => {
    let rDaiAmount = await contract.mint(amount);
    return rDaiAmount;
  };

  redeemDai = async (amount, contract) => {
    let daiAmount = await contract.redeem(amount);
    return daiAmount;
  };
}

export default new Web3Service();
