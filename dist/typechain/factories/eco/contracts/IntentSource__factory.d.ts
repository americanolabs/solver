import { Signer } from "ethers";
import type { Provider } from "@ethersproject/providers";
import type { IntentSource, IntentSourceInterface } from "../../../eco/contracts/IntentSource.js";
export declare class IntentSource__factory {
    static readonly abi: readonly [{
        readonly inputs: readonly [{
            readonly internalType: "uint256";
            readonly name: "_minimumDuration";
            readonly type: "uint256";
        }, {
            readonly internalType: "uint256";
            readonly name: "_counterStart";
            readonly type: "uint256";
        }];
        readonly stateMutability: "nonpayable";
        readonly type: "constructor";
    }, {
        readonly inputs: readonly [];
        readonly name: "CalldataMismatch";
        readonly type: "error";
    }, {
        readonly inputs: readonly [];
        readonly name: "ExpiryTooSoon";
        readonly type: "error";
    }, {
        readonly inputs: readonly [{
            readonly internalType: "bytes32";
            readonly name: "_hash";
            readonly type: "bytes32";
        }];
        readonly name: "NothingToWithdraw";
        readonly type: "error";
    }, {
        readonly inputs: readonly [];
        readonly name: "RewardsMismatch";
        readonly type: "error";
    }, {
        readonly inputs: readonly [{
            readonly internalType: "bytes32";
            readonly name: "_hash";
            readonly type: "bytes32";
        }];
        readonly name: "UnauthorizedWithdrawal";
        readonly type: "error";
    }, {
        readonly anonymous: false;
        readonly inputs: readonly [{
            readonly indexed: true;
            readonly internalType: "bytes32";
            readonly name: "_hash";
            readonly type: "bytes32";
        }, {
            readonly indexed: false;
            readonly internalType: "address";
            readonly name: "_creator";
            readonly type: "address";
        }, {
            readonly indexed: true;
            readonly internalType: "uint256";
            readonly name: "_destinationChain";
            readonly type: "uint256";
        }, {
            readonly indexed: false;
            readonly internalType: "address[]";
            readonly name: "_targets";
            readonly type: "address[]";
        }, {
            readonly indexed: false;
            readonly internalType: "bytes[]";
            readonly name: "_data";
            readonly type: "bytes[]";
        }, {
            readonly indexed: false;
            readonly internalType: "address[]";
            readonly name: "_rewardTokens";
            readonly type: "address[]";
        }, {
            readonly indexed: false;
            readonly internalType: "uint256[]";
            readonly name: "_rewardAmounts";
            readonly type: "uint256[]";
        }, {
            readonly indexed: false;
            readonly internalType: "uint256";
            readonly name: "_expiryTime";
            readonly type: "uint256";
        }, {
            readonly indexed: false;
            readonly internalType: "bytes32";
            readonly name: "nonce";
            readonly type: "bytes32";
        }, {
            readonly indexed: true;
            readonly internalType: "address";
            readonly name: "_prover";
            readonly type: "address";
        }];
        readonly name: "IntentCreated";
        readonly type: "event";
    }, {
        readonly anonymous: false;
        readonly inputs: readonly [{
            readonly indexed: false;
            readonly internalType: "bytes32";
            readonly name: "_hash";
            readonly type: "bytes32";
        }, {
            readonly indexed: true;
            readonly internalType: "address";
            readonly name: "_recipient";
            readonly type: "address";
        }];
        readonly name: "Withdrawal";
        readonly type: "event";
    }, {
        readonly inputs: readonly [];
        readonly name: "CHAIN_ID";
        readonly outputs: readonly [{
            readonly internalType: "uint256";
            readonly name: "";
            readonly type: "uint256";
        }];
        readonly stateMutability: "view";
        readonly type: "function";
    }, {
        readonly inputs: readonly [];
        readonly name: "MINIMUM_DURATION";
        readonly outputs: readonly [{
            readonly internalType: "uint256";
            readonly name: "";
            readonly type: "uint256";
        }];
        readonly stateMutability: "view";
        readonly type: "function";
    }, {
        readonly inputs: readonly [];
        readonly name: "counter";
        readonly outputs: readonly [{
            readonly internalType: "uint256";
            readonly name: "";
            readonly type: "uint256";
        }];
        readonly stateMutability: "view";
        readonly type: "function";
    }, {
        readonly inputs: readonly [{
            readonly internalType: "uint256";
            readonly name: "_destinationChainID";
            readonly type: "uint256";
        }, {
            readonly internalType: "address";
            readonly name: "_inbox";
            readonly type: "address";
        }, {
            readonly internalType: "address[]";
            readonly name: "_targets";
            readonly type: "address[]";
        }, {
            readonly internalType: "bytes[]";
            readonly name: "_data";
            readonly type: "bytes[]";
        }, {
            readonly internalType: "address[]";
            readonly name: "_rewardTokens";
            readonly type: "address[]";
        }, {
            readonly internalType: "uint256[]";
            readonly name: "_rewardAmounts";
            readonly type: "uint256[]";
        }, {
            readonly internalType: "uint256";
            readonly name: "_expiryTime";
            readonly type: "uint256";
        }, {
            readonly internalType: "address";
            readonly name: "_prover";
            readonly type: "address";
        }];
        readonly name: "createIntent";
        readonly outputs: readonly [];
        readonly stateMutability: "nonpayable";
        readonly type: "function";
    }, {
        readonly inputs: readonly [{
            readonly internalType: "bytes32";
            readonly name: "identifier";
            readonly type: "bytes32";
        }];
        readonly name: "getIntent";
        readonly outputs: readonly [{
            readonly components: readonly [{
                readonly internalType: "address";
                readonly name: "creator";
                readonly type: "address";
            }, {
                readonly internalType: "uint256";
                readonly name: "destinationChainID";
                readonly type: "uint256";
            }, {
                readonly internalType: "address[]";
                readonly name: "targets";
                readonly type: "address[]";
            }, {
                readonly internalType: "bytes[]";
                readonly name: "data";
                readonly type: "bytes[]";
            }, {
                readonly internalType: "address[]";
                readonly name: "rewardTokens";
                readonly type: "address[]";
            }, {
                readonly internalType: "uint256[]";
                readonly name: "rewardAmounts";
                readonly type: "uint256[]";
            }, {
                readonly internalType: "uint256";
                readonly name: "expiryTime";
                readonly type: "uint256";
            }, {
                readonly internalType: "bool";
                readonly name: "hasBeenWithdrawn";
                readonly type: "bool";
            }, {
                readonly internalType: "bytes32";
                readonly name: "nonce";
                readonly type: "bytes32";
            }, {
                readonly internalType: "address";
                readonly name: "prover";
                readonly type: "address";
            }];
            readonly internalType: "struct Intent";
            readonly name: "";
            readonly type: "tuple";
        }];
        readonly stateMutability: "view";
        readonly type: "function";
    }, {
        readonly inputs: readonly [{
            readonly internalType: "bytes32";
            readonly name: "intenthash";
            readonly type: "bytes32";
        }];
        readonly name: "intents";
        readonly outputs: readonly [{
            readonly internalType: "address";
            readonly name: "creator";
            readonly type: "address";
        }, {
            readonly internalType: "uint256";
            readonly name: "destinationChainID";
            readonly type: "uint256";
        }, {
            readonly internalType: "uint256";
            readonly name: "expiryTime";
            readonly type: "uint256";
        }, {
            readonly internalType: "bool";
            readonly name: "hasBeenWithdrawn";
            readonly type: "bool";
        }, {
            readonly internalType: "bytes32";
            readonly name: "nonce";
            readonly type: "bytes32";
        }, {
            readonly internalType: "address";
            readonly name: "prover";
            readonly type: "address";
        }];
        readonly stateMutability: "view";
        readonly type: "function";
    }, {
        readonly inputs: readonly [{
            readonly internalType: "bytes32";
            readonly name: "_hash";
            readonly type: "bytes32";
        }];
        readonly name: "withdrawRewards";
        readonly outputs: readonly [];
        readonly stateMutability: "nonpayable";
        readonly type: "function";
    }];
    static createInterface(): IntentSourceInterface;
    static connect(address: string, signerOrProvider: Signer | Provider): IntentSource;
}
//# sourceMappingURL=IntentSource__factory.d.ts.map