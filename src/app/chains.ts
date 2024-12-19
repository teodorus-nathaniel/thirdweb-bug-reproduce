import { defineChain } from "thirdweb";

export const sepolia = defineChain({
  id: 11155111,
  rpc: "https://rpc.ankr.com/eth_sepolia",
  nativeCurrency: {
    name: "Ether",
    symbol: "ETH",
    decimals: 18,
  },
});

export const ethMainnet = defineChain({
  id: 1,
  rpc: "https://eth-mainnet.public.blastapi.io",
  nativeCurrency: {
    name: "Ether",
    symbol: "ETH",
    decimals: 18,
  },
});

export const ozean = defineChain({
  id: 7849306,
  rpc: "https://ozean-testnet.rpc.caldera.xyz/http",
  nativeCurrency: {
    name: "Ozean Poseidon",
    symbol: "USDX",
    decimals: 18,
  },
});

export const optimism = defineChain({
  id: 10,
  rpc: "https://optimism.llamarpc.com",
  nativeCurrency: {
    name: "Ether",
    symbol: "ETH",
    decimals: 18,
  },
});
