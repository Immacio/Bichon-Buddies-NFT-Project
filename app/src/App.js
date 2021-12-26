import React, { useEffect, useState } from 'react';
import './App.css';
import './CandyMachine/CandyMachine.css';
import twitterLogo from './assets/twitter-logo.svg';
import CandyMachine from './CandyMachine';
import doggo1 from './assets/doggo1.png';
import doggo2 from './assets/doggo2.png';
import doggo3 from './assets/doggo3.png';
import doggo4 from './assets/doggo4.png';
import doggo5 from './assets/doggo5.png';
import doggo6 from './assets/doggo6.png';
import doggo7 from './assets/doggo7.png';
import doggo8 from './assets/doggo8.png';
import doggo9 from './assets/doggo9.gif';
import doggo10 from './assets/doggo10.png';
import doggo11 from './assets/doggo11.png';
import doggo12 from './assets/doggo12.png';
import doggo13 from './assets/doggo13.png';
import doggo14 from './assets/doggo14.png';
import doggo15 from './assets/doggo15.png';
import doggo16 from './assets/doggo16.png';
import doggo17 from './assets/doggo17.png';
import doggo18 from './assets/doggo18.png';
import doggo19 from './assets/doggo19.gif';
import doggo20 from './assets/doggo20.png';

// Constants
const TWITTER_LINK = `https://twitter.com/toothbrush21`;

const App = () => {
  // State
  const [walletAddress, setWalletAddress] = useState(null);


  // Actions
  const checkIfWalletIsConnected = async () => {
    try {
      const { solana } = window;

      if (solana) {
        if (solana.isPhantom) {
          console.log('Phantom wallet found!');
          const response = await solana.connect({ onlyIfTrusted: true });
        console.log(
          'Connected with Public Key:',
          response.publicKey.toString()
        );
         /*
         * Set the user's publicKey in state to be used later
         */    
        setWalletAddress(response.publicKey.toString());
        }
      } else {
        alert('Solana object not found! Get a Phantom Wallet 👻');
      }
    } catch (error) {
      console.error(error);
    }
  };

  const connectWallet = async () => {
    const { solana } = window;

    if (solana) {
      const response = await solana.connect();
      console.log('Connected with Public Key:', response.publicKey.toString());
      setWalletAddress(response.publicKey.toString());
    }
  };

/*
   * We want to render this UI when the user hasn't connected
   * their wallet to our app yet.
   */
  const renderNotConnectedContainer = () => (
    <div>
    <button
      className="cta-button connect-wallet-button"
      onClick={connectWallet}
    >
      Connect to Wallet
    </button>
    </div>
  );

  useEffect(() => {
    const onLoad = async () => {
      await checkIfWalletIsConnected();
    };
    window.addEventListener('load', onLoad);
    return () => window.removeEventListener('load', onLoad);
  }, []);
  
  return (
    <div className="App">
      <div className="container-hero">
        <div className="footer-container">
            <img alt="Twitter Logo" className="twitter-logo" src={twitterLogo} />
            <a
              className="footer-text"
              href={TWITTER_LINK}
              target="_blank"
              rel="noreferrer"
            >{`built by Maurice Willis`}</a>
        </div>
            <p className="header">🐶 Bichon & Buddies NFT Collection</p>
            <p className="sub-text">An NFT Collection inspired by Bichons -  powered by Solana</p>
            {!walletAddress && renderNotConnectedContainer()}
        {walletAddress && <CandyMachine walletAddress={window.solana} />}
      </div>
      <div className = "container">
        <div className="gif-container">
          <p className="header">The Collection</p>
          <p className="sub-text">20 unique NFTs available for minting - now available on <a href="https://solsea.io/collection/61bf063ebe82aad29715c1df">SolSea</a></p>
          <div className="gif-grid">
            <div className="gif-item">
              <img src={doggo1} alt="doggy"/>
            </div>
            <div className="gif-item">
              <img src={doggo2} alt="doggy"/>
            </div>
            <div className="gif-item">
              <img src={doggo3} alt="doggy"/>
            </div>
            <div className="gif-item">
              <img src={doggo4} alt="doggy"/>
            </div>
            <div className="gif-item">
              <img src={doggo5} alt="doggy"/>
            </div>
            <div className="gif-item">
              <img src={doggo6} alt="doggy"/>
            </div>
            <div className="gif-item">
              <img src={doggo7} alt="doggy"/>
            </div>
            <div className="gif-item">
              <img src={doggo8} alt="doggy"/>
            </div>
            <div className="gif-item">
              <img src={doggo9} alt="doggy"/>
            </div>
            <div className="gif-item">
              <img src={doggo10} alt="doggy"/>
            </div>
            <div className="gif-item">
              <img src={doggo11} alt="doggy"/>
            </div>
            <div className="gif-item">
              <img src={doggo12} alt="doggy"/>
            </div>
            <div className="gif-item">
              <img src={doggo13} alt="doggy"/>
            </div>
            <div className="gif-item">
              <img src={doggo14} alt="doggy"/>
            </div>
            <div className="gif-item">
              <img src={doggo15} alt="doggy"/>
            </div>
            <div className="gif-item">
              <img src={doggo16} alt="doggy"/>
            </div>
            <div className="gif-item">
              <img src={doggo17} alt="doggy"/>
            </div>
            <div className="gif-item">
              <img src={doggo18} alt="doggy"/>
            </div>
            <div className="gif-item">
              <img src={doggo19} alt="doggy"/>
            </div>
            <div className="gif-item">
              <img src={doggo20} alt="doggy"/>
            </div>
          </div>
        </div>
      </div>
      <div className ="divider"></div>
      <div className="container">
            <p className="header">📙 FAQ</p>
            <p className="sub-text">Which wallets are supported?</p>
            <p className="sub-sub-text">You will need to download the <a href="https://phantom.app/">Phantom wallet</a> browser extension, and switch to the Solana Devnet to interact with the site. </p>
            <p className="sub-text">How much does it cost to mint a Bichon & Buddies NFT?</p>
            <p className="sub-sub-text">Each NFT costs 0.33 SOL + network fees to mint on the Solana Devnet. You will need to use install the solana package on Node.JS and airdrop yourself solana using CLI. </p>
            <p className="sub-text">How many different NFTs are there in the collection?</p>
            <p className="sub-sub-text">There are 16 unique NFTs in the Bichon & Buddies collection - a variety of dog breeds are available ranging from bichons and dachschunds with special traits attached to each image.</p>
      </div>
      <div className = "divider"></div>
    </div>
  );
};

export default App;
