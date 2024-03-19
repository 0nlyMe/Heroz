import { useState, useEffect, createContext } from "react";
import { ethers } from "ethers";
import Web3Modal from "web3modal";

// import contract and abi
import { CoinBlogAddress, CoinBlogABI } from "./constance";

// fetch coinblog contract function
const fetchCoinBlogContract = (signerOrProvider) => {
  return new ethers.Contract(CoinBlogAddress, CoinBlogABI, signerOrProvider);
};
const connectWithCoinBlogContract = async () => {
  try {
    const web3Modal = new Web3Modal();
    const connection = await web3Modal.connect();
    const provider = new ethers.providers.Web3Provider(connection);
    const signer = provider.getSigner();
    const contract = fetchCoinBlogContract(signer);
    console.log("Contract fetched successfully..", contract);
    return contract;
  } catch (error) {
    console.error(
      "Something wrong while connecting to the smart contract",
      error
    );
  }
};

const CoinBlogContext = createContext();

const CoinBlogProvider = ({ children }) => {
  const [walletAddress, setWalletAddress] = useState("");
  const [CoinBlogContract, setCoinBlogContract] = useState(null);

  // ------- check if wallet is connected ------
  const checkIfWalletIsConnected = async () => {
    try {
      if (!window.ethereum) return console.log("Please install Metamask");

      const accounts = await window.ethereum.request({
        method: "eth_accounts",
      });
      if (accounts.length) {
        setWalletAddress(accounts[0]);
      } else {
        console.log("No accounts found");
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
      const accounts = await window.ethereum.request({
        method: "eth_requestAccounts",
      });
      setWalletAddress(accounts[0]);
    } catch (error) {
      console.error("Error while connecting to the wallet", error);
    }
  };

  useEffect(() => {
    checkIfWalletIsConnected();
    connectWithCoinBlogContract().then((contract) => {
      // console.log("coinBlog Contract Connected...", contract);
      setCoinBlogContract(contract);
    });
  }, []);

  // ------- Donate Fuction -------
  const donateToAuthor = async (authorAddress, donationAmount) => {
    try {
      if (!CoinBlogContract) {
        console.error("coing blog contract is not initialized");
        return;
      }

      console.log("Donating to author");

      // call the donate function of the contract
      const donation = await CoinBlogContract.donate(
        authorAddress,
        donationAmount,
        {
          value: donationAmount,
          gasLimit: 300000,
        }
      );

      // Wait for the transaction to be mined
      const transaction = await donation.wait();

      console.log("Donation successfull", transaction);
    } catch (error) {
      console.error("Error while donating", error);
    }
  };

  return (
    <CoinBlogContext.Provider
      value={{ walletAddress, connectWallet, donateToAuthor }}
    >
      {children}
    </CoinBlogContext.Provider>
  );
};

export { CoinBlogContext, CoinBlogProvider };
