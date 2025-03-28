import { AddressZero } from "@ethersproject/constants";

import {
  type Hyperlane7683Metadata,
  Hyperlane7683MetadataSchema,
} from "../types.js";

const metadata: Hyperlane7683Metadata = {
  protocolName: "Hyperlane7683",
  intentSources: [
    {
      address: "0xAb68849dA49Ae79e9aDD0F28ABBA73DF16A7af79",
      chainName: "arbitrumsepolia"
    },
    {
      address: "0xAb68849dA49Ae79e9aDD0F28ABBA73DF16A7af79",
      chainName: "basesepolia"
    },
    {
      address: "0xAb68849dA49Ae79e9aDD0F28ABBA73DF16A7af79",
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
