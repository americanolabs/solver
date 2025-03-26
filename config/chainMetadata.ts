import { z } from "zod";

import { chainMetadata as defaultChainMetadata, arbitrumsepolia } from "@hyperlane-xyz/registry";

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
    ...arbitrumsepolia,
    mailbox: "0x598facE78a4302f11E3de0bee1894Da0b2Cb71F8",
    chainId: 421614,
    domainId: 421614,
    name: 'arbitrumsepolia',
    rpcUrls: [{
      http: `https://arbitrum-sepolia-rpc.publicnode.com`,
      pagination: {
        maxBlockRange: 3000,
      }
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
      http: 'https://rollup-v1.optifi-agent.xyz',
      pagination: {
        maxBlockRange: 3000,
      }
    }],
    "blockExplorers": [
      {
        "apiUrl": "https://api-sepolia.arbiscan.io/api",
        "family": "etherscan",
        "name": "Arbiscan",
        "url": "https://sepolia.arbiscan.io"
      },
      {
        "apiUrl": "https://api-sepolia.arbiscan.io/api",
        "family": "etherscan",
        "name": "Arbiscan",
        "url": "https://sepolia.arbiscan.io"
      }
    ],
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
    "technicalStack": "arbitrumnitro",
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
