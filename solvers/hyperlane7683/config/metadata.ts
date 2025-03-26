import { AddressZero } from "@ethersproject/constants";

import {
  type Hyperlane7683Metadata,
  Hyperlane7683MetadataSchema,
} from "../types.js";

const metadata: Hyperlane7683Metadata = {
  protocolName: "Hyperlane7683",
  intentSources: [
    {
      address: "0xC1d0d7C961daF74BECa71416359a92c59c8A8012",
      chainName: "arbitrumsepolia"
    },
    {
      address: "0xC1d0d7C961daF74BECa71416359a92c59c8A8012",
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
