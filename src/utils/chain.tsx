import { Chain, ChainList, ChainIdMapping } from "./types";

export const supportedChains: ChainList = {
  "0x1": {
    name: "Ethereum Mainnet",
    short_name: "eth",
    chain: "ETH",
    network: "mainnet",
    network_id: 1,
    chain_id: "0x1",
    providers: ["walletconnect"],
    // , 'portis', 'fortmatic'
    rpc_url: `https://mainnet.infura.io/v3/${process.env.RPC_KEY}`,
    block_explorer: "https://etherscan.io",
  },
  "0x2a": {
    name: "Ethereum Kovan",
    short_name: "kov",
    chain: "ETH",
    network: "kovan",
    network_id: 42,
    chain_id: "0x2a",
    providers: ["walletconnect"],
    // , 'portis', 'fortmatic'
    rpc_url: `https://kovan.infura.io/v3/${process.env.RPC_KEY}`,
    block_explorer: "https://kovan.etherscan.io",
  },
};

export const chainByID = (chainID: string): Chain => supportedChains[chainID];
export const chainByNetworkId = (networkId: number): Chain => {
  const idMapping: ChainIdMapping = {
    1: supportedChains["0x1"],
    42: supportedChains["0x2a"],
  };

  return idMapping[networkId];
};
