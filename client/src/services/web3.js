import {
  ethers
} from "ethers";
// import rDAIContract from "./contracts/rDAI.abi.json";

class Web3Service {
  rDAIAddress = "0xeA718E4602125407fAfcb721b7D760aD9652dfe7";

  getContract = (rDAIContract) => {
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
      contract = new ethers.Contract(this.rDAIAddress, rDAIContract, provider);
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

  getInterestPayable = async (contract, selectedAddress) => {
    let interest = null;
    if (contract !== undefined) {
      interest = await contract.interestPayableOf(selectedAddress);
    }
    return interest;
  };

  payInterest = async (contract, selectedAddress) => {
    let interestPaid = null;
    if (contract !== undefined) {
      interestPaid = await contract.payInterest(selectedAddress);
    }
    return interestPaid;
  };

  getAllocatedPatron = async (contract, selectedAddress) => {
    let hats = await contract.getHatByAddress(selectedAddress);

    let allocated = 0;

    if (hats !== undefined) {
      allocated = hats.proportions[0];
    }
    return {
      hats,
      allocated
    };
  };

  mintRDai = async (amount, contract) => {
    let rDaiAmount = await contract.mint(amount);
    return rDaiAmount;
  };

  redeemDai = async (amount, contract) => {
    let daiAmount = await contract.redeem(amount);
    return daiAmount;
  };

  createPatron = async (title, description, link, iconlink, githublink, recipients, proportions, contract) => {
    let hatId = await contract.createHat(title, description, link, iconlink, githublink, [recipients], [proportions]);
    return hatId;
  }

  changePatron = async (hatId, contract) => {
    let changed = await contract.changeHat(hatId);
    return changed;
  }

  getPatronByAddress = async (selectedAddress) => {
    let hatId = await contract.getHatByAddress(selectedAddress);
    let {
      owner,
      title,
      description,
      link,
      iconlink,
      githublink,
      recipients,
      proportions
    } = await contract.getHatByID(hatId);

    return {
      owner,
      title,
      description,
      link,
      iconlink,
      githublink,
      recipients,
      proportions
    };
  }
}

export default new Web3Service();