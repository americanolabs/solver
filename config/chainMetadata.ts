import { z } from "zod";

import { chainMetadata as defaultChainMetadata } from "@hyperlane-xyz/registry";

import type { ChainMap, ChainMetadata } from "@hyperlane-xyz/sdk";
import { ChainMetadataSchema } from "@hyperlane-xyz/sdk";

import { ProtocolType, objMerge } from '@hyperlane-xyz/utils';

const customChainMetadata = {
  // Example custom configuration
  // basesepolia: {
  //   rpcUrls: [
  //     {
  //       http: "https://base-sepolia-rpc.publicnode.com",
  //       pagination: {
  //         maxBlockRange: 3000,
  //       },
  //     },
  //   ],
  // },
  arbitrumsepolia: {
    rpcUrls: [{
      http: 'https://sepolia-rollup.arbitrum.io/rpc'
    }]
  },
  basesepolia: {
    rpcUrls: [{
      http: 'https://sepolia.base.org'
    }]
  },
  decaftestnet: {
    protocol: ProtocolType.Ethereum,
    chainId: 12177,
    domainId: 12177,
    nativeToken: { name: 'Ether', symbol: 'ETH', decimals: 18 },
    name: 'decaftestnet',
    displayName: 'Decaf Testnet',
    mailbox: "0xCdBD0aC35aae8f46ebC1D119350E407dE2699d55",
    rpcUrls: [{
      http: 'https://americano-rollup-v1.comingdotsoon.xyz'
    }],
    "blockExplorers": [],
    "blocks": {
      "confirmations": 1,
      "estimateBlockTime": 3,
      "reorgPeriod": 0
    },
    "deployer": {
      "name": "AmericanoLabs"
    },
    "gasCurrencyCoinGeckoId": "ethereum",
    "index": {
      "from": 0
    },
    "isTestnet": true,
    "technicalStack": "arbitrumnitro"
  }
};

const chainMetadata = objMerge<ChainMap<ChainMetadata>>(
  defaultChainMetadata,
  customChainMetadata,
  10,
  true,
);

z.record(z.string(), ChainMetadataSchema).parse(chainMetadata);

export { chainMetadata };
