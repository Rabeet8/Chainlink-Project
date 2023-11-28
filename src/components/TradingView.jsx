import React, { useState, useEffect } from "react";
import TraderBox from "./TraderBox";
import "./TraderBox.css";
import TopTradersTable from "./TopTraders";
const TradingView = () => {
  const [walletAddress, setWalletAddress] = useState(null);
  useEffect(() => {
    const address = sessionStorage.getItem("accountAddress");
    if (address) {
      setWalletAddress(address);
    }
  }, []);

  const connectMetaMaskFunc = async (SelectedChain) => {
    console.log("SelectedChain", SelectedChain);
    if (window.ethereum) {
      try {
        // Switching chain and connecting to MetaMask
        await window.ethereum.request({
          method: "wallet_switchEthereumChain",
          params: [
            { chainId: SelectedChain === "Polygon" ? "0x13881" : "0x5" },
          ],
        });
        const accounts = await window.ethereum.request({
          method: "eth_requestAccounts",
        });

        // Handling the connected account
        handleConnectedAccount(accounts);

        // Adding an event listener to handle account changes
        window.ethereum.on("accountsChanged", handleConnectedAccount);
      } catch (error) {
        console.error("Error:", error);
      }
    } else {
      console.error("MetaMask not found.");
    }
  };

  const handleConnectedAccount = (accounts) => {
    if (accounts.length > 0) {
      const currentAccount = accounts[0];
      console.log("Connected Account Address:", currentAccount);

      // Store the connected account address in session storage
      sessionStorage.setItem("accountAddress", currentAccount);
      sessionStorage.setItem("walletType", "metaMask");

      // Update the walletAddress state
      setWalletAddress(currentAccount);

      // You can perform further actions with the connected account here.
    } else {
      console.log("No connected accounts.");
    }
  };
  return (
    <div>
      <div className="navbar-container">
        <button onClick={connectMetaMaskFunc} className="connect-button">
          {walletAddress
            ? `${walletAddress.substring(0, 6)}...${walletAddress.substring(
                walletAddress.length - 4
              )}`
            : "Connect Wallet"}
        </button>
      </div>
      <div className="traders-container">
        <TraderBox
          name="Trader Name"
          amountManaged="N/A Amount managed"
          apy="N/A APY"
        />
        <TraderBox
          name="Trader Name"
          amountManaged="N/A Amount managed"
          apy="N/A APY"
        />
        <TraderBox
          name="Trader Name"
          amountManaged="N/A Amount managed"
          apy="N/A APY"
        />
        <TraderBox
          name="Trader Name"
          amountManaged="N/A Amount managed"
          apy="N/A APY"
        />
      </div>
      <br />
      <br />
    
      <TopTradersTable/>
    </div>
  );
};

export default TradingView;
