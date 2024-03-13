import { useState, useEffect, createContext } from "react";
import { ethers } from "ethers";
import Web3Modal from "web3modal";

// import contract and abi
import { CoinBlogAddress, CoinBlogABI } from "./constance";

// fetch coinblog contract function
const fetchCoinBlogContract = (signerOrProvider) => {
  new ethers.Contract(CoinBlogAddress, CoinBlogABI, signerOrProvider);

  const connectWithCoinBlogContract = async () => {
    try {
      const web3Modal = new Web3Modal();
      const connection = web3Modal.connect();
      const provider = new ethers.providers.Web3Provider(connection);
      const signer = provider.getSigner();
      const contract = fetchCoinBlogContract(signer);
      return contract;
    } catch (error) {
      console.error(
        "Something wrong while connecting to the smart contract",
        error
      );
    }
  };
};

const CoinBlogContext = createContext();

const CoinBlogProvider = ({ children }) => {
  const [walletAddress, setWalletAddress] = useState("");
  const [provider, setProvider] = useState(null);

  useEffect(() => {
    checkIfWalletIsConnected();
  }, []);

  const checkIfWalletIsConnected = async () => {
    try {
      if (!window.ethereum) return console.log("Please install Metamask");
      const web3Modal = new Web3Modal();
      const connection = await web3Modal.connect();
      const ethProvider = new ethers.providers.Web3Provider(connection);

      setProvider(ethProvider);

      const accounts = await ethProvider.listAccounts();
      if (accounts.length > 0) {
        setWalletAddress(accounts[0]);
      }
    } catch (error) {
      console.error(
        "Something wrong while checking to connect the wallet",
        error
      );
    }
  };

  const connectWallet = async () => {
    try {
      if (!window.ethereum) return console.log("Please install Metamask");
      const web3Modal = new Web3Modal();
      const connection = await web3Modal.connect();
      const ethProvider = new ethers.providers.Web3Provider(connection);

      setProvider(ethProvider);

      const accounts = await ethProvider.listAccounts();
      if (accounts.length > 0) {
        setWalletAddress(accounts[0]);
      }
    } catch (error) {
      console.error("Something wrong while connecting to the wallet", error);
    }
  };

  return (
    <CoinBlogContext.Provider value={{ walletAddress, connectWallet }}>
      {children}
    </CoinBlogContext.Provider>
  );
};

export { CoinBlogContext, CoinBlogProvider };
