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
      http: `https://arb-sepolia.g.alchemy.com/v2/EB6qgZ7mRkqjUt7xoI_d3V_AjZuUkFpg`
    }]
  },
  basesepolia: {
    rpcUrls: [{
      http: `https://base-sepolia.g.alchemy.com/v2/EB6qgZ7mRkqjUt7xoI_d3V_AjZuUkFpg`
    }]
  },
  decaftestnet: {
    protocol: ProtocolType.Ethereum,
    chainId: 12177,
    domainId: 12177,
    nativeToken: { name: 'Ether', symbol: 'ETH', decimals: 18 },
    name: 'decaftestnet',
    displayName: 'Decaf Testnet',
    mailbox: "0xD95d2F7C38bfA2f9d7A618474Bc619470f01001F",
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
