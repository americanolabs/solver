import { AddressZero } from "@ethersproject/constants";

import {
  type Hyperlane7683Metadata,
  Hyperlane7683MetadataSchema,
} from "../types.js";

const metadata: Hyperlane7683Metadata = {
  protocolName: "Hyperlane7683",
  intentSources: [
    {
      address: "0xD22A20bD7A2E2f174E69ac053e546a48aC98d2Bd",
      chainName: "arbitrumsepolia"
    },
    {
      address: "0xD22A20bD7A2E2f174E69ac053e546a48aC98d2Bd",
      chainName: "basesepolia"
    },
    {
      address: "0xD22A20bD7A2E2f174E69ac053e546a48aC98d2Bd",
      chainName: "decaftestnet"
    }
  ],
  customRules: {
    rules: [
      {
        name: "filterByTokenAndAmount",
        args: {
          "421614": {
            [AddressZero]: BigInt(5e15)
          },
          "84532": {
            [AddressZero]: BigInt(5e15)
          },
          "12177": {
            [AddressZero]: BigInt(5e15)
          }
        },
      },
      {
        name: "intentNotFilled",
      },
    ],
  },
};

Hyperlane7683MetadataSchema.parse(metadata);

export default metadata;
