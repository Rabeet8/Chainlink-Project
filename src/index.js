import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import { BrowserRouter } from "react-router-dom";
import "@rainbow-me/rainbowkit/styles.css";
import { mainnet, polygon, optimism, arbitrum, base, zora } from "wagmi/chains";
import { alchemyProvider } from "wagmi/providers/alchemy";
import { configureChains, createConfig, WagmiConfig } from "wagmi";
import { getDefaultWallets, RainbowKitProvider,darkTheme } from "@rainbow-me/rainbowkit";
import { publicProvider } from "wagmi/providers/public";
// import dotenv from 'dotenv';
// dotenv.config();


// const alchemyApiKey = process.env.ALCHEMY_API_KEY;

const { chains, publicClient } = configureChains(
  [mainnet, polygon, optimism, arbitrum, base, zora],
  [
    alchemyProvider({ apiKey: ""}),
    publicProvider(),
  ]
);

// const projectId = process.env.PROJECT_ID;

const { connectors } = getDefaultWallets({
  appName: "DeFi App",
  projectId: "",
  chains,
});

const wagmiConfig = createConfig({
  autoConnect: true,
  connectors,
  publicClient,
});

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <WagmiConfig config={wagmiConfig}>
    <RainbowKitProvider coolMode={true}chains={chains}theme={darkTheme({
      accentColor: '#15B296',
      accentColorForeground: 'white',
      borderRadius: 'large',
      fontStack: 'system',
      overlayBlur: 'small',
    })} >
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </RainbowKitProvider>
  </WagmiConfig>
);
