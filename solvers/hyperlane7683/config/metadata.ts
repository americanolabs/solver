import { AddressZero } from "@ethersproject/constants";

import {
  type Hyperlane7683Metadata,
  Hyperlane7683MetadataSchema,
} from "../types.js";

const metadata: Hyperlane7683Metadata = {
  protocolName: "Hyperlane7683",
  intentSources: [
    {
      address: "0x878B4e79D5B2654C030f272632Df16747D0d9332",
      chainName: "arbitrumsepolia"
    },
    {
      address: "0xf614c6bF94b022E16BEF7dBecF7614FFD2b201d3",
      chainName: "basesepolia"
    },
    {
      address: "0xd07A45dD047c67662F9877acd60902A4EE0aB847",
      chainName: "decaftestnet"
    }
  ],
  customRules: {
    rules: [
      {
        name: "filterByTokenAndAmount",
        args: {
          "421614": {
            [AddressZero]: BigInt(5e15),
          },
          "12177": {
            [AddressZero]: BigInt(5e15),
          },
          "84532": {
            [AddressZero]: BigInt(5e15),
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
