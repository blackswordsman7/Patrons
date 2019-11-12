import React, { useState, useEffect } from "react";
import { BrowserRouter as Router, Route, Redirect } from "react-router-dom";
import App from "../App";
import InterestPage from "../pages/interestpage";
import CreateGrantPage from "../pages/creategrantpage";
import GrantPage from "../pages/grantspage";
import WalletPage from "../pages/walletpage";
import DepositGrantPage from "../pages/depositgrantpage";
import Web3Service from "../services/web3";

function AppRouter() {
  const [selectedAddress, setSelectedAddress] = useState();
  const [contract, setContract] = useState();
  const [interest, setInterest] = useState();
  const [allocated, setAllocated] = useState();
  const [balance, setBalance] = useState();
  const [hats, setHats] = useState();
  // Detect when account changes
  window.ethereum.on("accountsChanged", function(accounts) {
    if (selectedAddress !== undefined) {
      setSelectedAddress(accounts[0]);
    }
  });

  useEffect(() => {
    const fetchAccount = async () => {
      const address = await Web3Service.getAccount();

      console.log(address[0]);
      setSelectedAddress(address[0]);

      const contract = await Web3Service.getContract();
      console.log(contract);

      setContract(contract);
    };

    fetchAccount();
  }, []);

  return (
    <Router>
      <App address={selectedAddress}>
        <Route path="/wallet" render={() => <WalletPage />} />
        <Route path="/interest" render={() => <InterestPage />} />
        <Route
          path="/create-grant"
          render={() => <CreateGrantPage contract={contract} />}
        />
        <Route path="/grants" render={() => <GrantPage />} />
        <Route path="/deposit" render={() => <DepositGrantPage />} />
        <Route exact path="/" render={() => <Redirect to="/grants" />} />
      </App>
    </Router>
  );
}
export default AppRouter;
