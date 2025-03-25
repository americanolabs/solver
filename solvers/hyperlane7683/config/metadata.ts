import { AddressZero } from "@ethersproject/constants";

import {
  type Hyperlane7683Metadata,
  Hyperlane7683MetadataSchema,
} from "../types.js";

const metadata: Hyperlane7683Metadata = {
  protocolName: "Hyperlane7683",
  intentSources: [
    {
      address: "0x05a8D0b7aBF2fa7deD41BaDAbEa785C5fB044aaB",
      chainName: "arbitrumsepolia",
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
