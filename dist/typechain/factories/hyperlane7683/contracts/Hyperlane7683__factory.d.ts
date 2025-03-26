import { Signer } from "ethers";
import type { Provider } from "@ethersproject/providers";
import type { Hyperlane7683, Hyperlane7683Interface } from "../../../hyperlane7683/contracts/Hyperlane7683.js";
export declare class Hyperlane7683__factory {
    static readonly abi: readonly [{
        readonly inputs: readonly [{
            readonly internalType: "address";
            readonly name: "_mailbox";
            readonly type: "address";
        }, {
            readonly internalType: "address";
            readonly name: "_permit2";
            readonly type: "address";
        }];
        readonly stateMutability: "nonpayable";
        readonly type: "constructor";
    }, {
        readonly inputs: readonly [];
        readonly name: "InvalidDomain";
        readonly type: "error";
    }, {
        readonly inputs: readonly [];
        readonly name: "InvalidGaslessOrderOrigin";
        readonly type: "error";
    }, {
        readonly inputs: readonly [];
        readonly name: "InvalidGaslessOrderSettler";
        readonly type: "error";
    }, {
        readonly inputs: readonly [];
        readonly name: "InvalidNativeAmount";
        readonly type: "error";
    }, {
        readonly inputs: readonly [];
        readonly name: "InvalidNonce";
        readonly type: "error";
    }, {
        readonly inputs: readonly [];
        readonly name: "InvalidOrderDomain";
        readonly type: "error";
    }, {
        readonly inputs: readonly [];
        readonly name: "InvalidOrderId";
        readonly type: "error";
    }, {
        readonly inputs: readonly [];
        readonly name: "InvalidOrderOrigin";
        readonly type: "error";
    }, {
        readonly inputs: readonly [];
        readonly name: "InvalidOrderStatus";
        readonly type: "error";
    }, {
        readonly inputs: readonly [{
            readonly internalType: "bytes32";
            readonly name: "orderType";
            readonly type: "bytes32";
        }];
        readonly name: "InvalidOrderType";
        readonly type: "error";
    }, {
        readonly inputs: readonly [{
            readonly internalType: "uint32";
            readonly name: "originDomain";
            readonly type: "uint32";
        }];
        readonly name: "InvalidOriginDomain";
        readonly type: "error";
    }, {
        readonly inputs: readonly [];
        readonly name: "InvalidSender";
        readonly type: "error";
    }, {
        readonly inputs: readonly [];
        readonly name: "OrderFillExpired";
        readonly type: "error";
    }, {
        readonly inputs: readonly [];
        readonly name: "OrderFillNotExpired";
        readonly type: "error";
    }, {
        readonly inputs: readonly [];
        readonly name: "OrderOpenExpired";
        readonly type: "error";
    }, {
        readonly anonymous: false;
        readonly inputs: readonly [{
            readonly indexed: false;
            readonly internalType: "bytes32";
            readonly name: "orderId";
            readonly type: "bytes32";
        }, {
            readonly indexed: false;
            readonly internalType: "bytes";
            readonly name: "originData";
            readonly type: "bytes";
        }, {
            readonly indexed: false;
            readonly internalType: "bytes";
            readonly name: "fillerData";
            readonly type: "bytes";
        }];
        readonly name: "Filled";
        readonly type: "event";
    }, {
        readonly anonymous: false;
        readonly inputs: readonly [{
            readonly indexed: false;
            readonly internalType: "uint32";
            readonly name: "domain";
            readonly type: "uint32";
        }, {
            readonly indexed: false;
            readonly internalType: "uint256";
            readonly name: "gas";
            readonly type: "uint256";
        }];
        readonly name: "GasSet";
        readonly type: "event";
    }, {
        readonly anonymous: false;
        readonly inputs: readonly [{
            readonly indexed: false;
            readonly internalType: "address";
            readonly name: "_hook";
            readonly type: "address";
        }];
        readonly name: "HookSet";
        readonly type: "event";
    }, {
        readonly anonymous: false;
        readonly inputs: readonly [{
            readonly indexed: false;
            readonly internalType: "uint8";
            readonly name: "version";
            readonly type: "uint8";
        }];
        readonly name: "Initialized";
        readonly type: "event";
    }, {
        readonly anonymous: false;
        readonly inputs: readonly [{
            readonly indexed: false;
            readonly internalType: "address";
            readonly name: "_ism";
            readonly type: "address";
        }];
        readonly name: "IsmSet";
        readonly type: "event";
    }, {
        readonly anonymous: false;
        readonly inputs: readonly [{
            readonly indexed: true;
            readonly internalType: "address";
            readonly name: "owner";
            readonly type: "address";
        }, {
            readonly indexed: false;
            readonly internalType: "uint256";
            readonly name: "nonce";
            readonly type: "uint256";
        }];
        readonly name: "NonceInvalidation";
        readonly type: "event";
    }, {
        readonly anonymous: false;
        readonly inputs: readonly [{
            readonly indexed: true;
            readonly internalType: "bytes32";
            readonly name: "orderId";
            readonly type: "bytes32";
        }, {
            readonly components: readonly [{
                readonly internalType: "address";
                readonly name: "user";
                readonly type: "address";
            }, {
                readonly internalType: "uint256";
                readonly name: "originChainId";
                readonly type: "uint256";
            }, {
                readonly internalType: "uint32";
                readonly name: "openDeadline";
                readonly type: "uint32";
            }, {
                readonly internalType: "uint32";
                readonly name: "fillDeadline";
                readonly type: "uint32";
            }, {
                readonly internalType: "bytes32";
                readonly name: "orderId";
                readonly type: "bytes32";
            }, {
                readonly components: readonly [{
                    readonly internalType: "bytes32";
                    readonly name: "token";
                    readonly type: "bytes32";
                }, {
                    readonly internalType: "uint256";
                    readonly name: "amount";
                    readonly type: "uint256";
                }, {
                    readonly internalType: "bytes32";
                    readonly name: "recipient";
                    readonly type: "bytes32";
                }, {
                    readonly internalType: "uint256";
                    readonly name: "chainId";
                    readonly type: "uint256";
                }];
                readonly internalType: "struct Output[]";
                readonly name: "maxSpent";
                readonly type: "tuple[]";
            }, {
                readonly components: readonly [{
                    readonly internalType: "bytes32";
                    readonly name: "token";
                    readonly type: "bytes32";
                }, {
                    readonly internalType: "uint256";
                    readonly name: "amount";
                    readonly type: "uint256";
                }, {
                    readonly internalType: "bytes32";
                    readonly name: "recipient";
                    readonly type: "bytes32";
                }, {
                    readonly internalType: "uint256";
                    readonly name: "chainId";
                    readonly type: "uint256";
                }];
                readonly internalType: "struct Output[]";
                readonly name: "minReceived";
                readonly type: "tuple[]";
            }, {
                readonly components: readonly [{
                    readonly internalType: "uint256";
                    readonly name: "destinationChainId";
                    readonly type: "uint256";
                }, {
                    readonly internalType: "bytes32";
                    readonly name: "destinationSettler";
                    readonly type: "bytes32";
                }, {
                    readonly internalType: "bytes";
                    readonly name: "originData";
                    readonly type: "bytes";
                }];
                readonly internalType: "struct FillInstruction[]";
                readonly name: "fillInstructions";
                readonly type: "tuple[]";
            }];
            readonly indexed: false;
            readonly internalType: "struct ResolvedCrossChainOrder";
            readonly name: "resolvedOrder";
            readonly type: "tuple";
        }];
        readonly name: "Open";
        readonly type: "event";
    }, {
        readonly anonymous: false;
        readonly inputs: readonly [{
            readonly indexed: true;
            readonly internalType: "address";
            readonly name: "previousOwner";
            readonly type: "address";
        }, {
            readonly indexed: true;
            readonly internalType: "address";
            readonly name: "newOwner";
            readonly type: "address";
        }];
        readonly name: "OwnershipTransferred";
        readonly type: "event";
    }, {
        readonly anonymous: false;
        readonly inputs: readonly [{
            readonly indexed: false;
            readonly internalType: "bytes32[]";
            readonly name: "orderIds";
            readonly type: "bytes32[]";
        }];
        readonly name: "Refund";
        readonly type: "event";
    }, {
        readonly anonymous: false;
        readonly inputs: readonly [{
            readonly indexed: false;
            readonly internalType: "bytes32";
            readonly name: "orderId";
            readonly type: "bytes32";
        }, {
            readonly indexed: false;
            readonly internalType: "address";
            readonly name: "receiver";
            readonly type: "address";
        }];
        readonly name: "Refunded";
        readonly type: "event";
    }, {
        readonly anonymous: false;
        readonly inputs: readonly [{
            readonly indexed: false;
            readonly internalType: "bytes32[]";
            readonly name: "orderIds";
            readonly type: "bytes32[]";
        }, {
            readonly indexed: false;
            readonly internalType: "bytes[]";
            readonly name: "ordersFillerData";
            readonly type: "bytes[]";
        }];
        readonly name: "Settle";
        readonly type: "event";
    }, {
        readonly anonymous: false;
        readonly inputs: readonly [{
            readonly indexed: false;
            readonly internalType: "bytes32";
            readonly name: "orderId";
            readonly type: "bytes32";
        }, {
            readonly indexed: false;
            readonly internalType: "address";
            readonly name: "receiver";
            readonly type: "address";
        }];
        readonly name: "Settled";
        readonly type: "event";
    }, {
        readonly inputs: readonly [];
        readonly name: "FILLED";
        readonly outputs: readonly [{
            readonly internalType: "bytes32";
            readonly name: "";
            readonly type: "bytes32";
        }];
        readonly stateMutability: "view";
        readonly type: "function";
    }, {
        readonly inputs: readonly [];
        readonly name: "OPENED";
        readonly outputs: readonly [{
            readonly internalType: "bytes32";
            readonly name: "";
            readonly type: "bytes32";
        }];
        readonly stateMutability: "view";
        readonly type: "function";
    }, {
        readonly inputs: readonly [];
        readonly name: "PACKAGE_VERSION";
        readonly outputs: readonly [{
            readonly internalType: "string";
            readonly name: "";
            readonly type: "string";
        }];
        readonly stateMutability: "view";
        readonly type: "function";
    }, {
        readonly inputs: readonly [];
        readonly name: "PERMIT2";
        readonly outputs: readonly [{
            readonly internalType: "contract IPermit2";
            readonly name: "";
            readonly type: "address";
        }];
        readonly stateMutability: "view";
        readonly type: "function";
    }, {
        readonly inputs: readonly [];
        readonly name: "REFUNDED";
        readonly outputs: readonly [{
            readonly internalType: "bytes32";
            readonly name: "";
            readonly type: "bytes32";
        }];
        readonly stateMutability: "view";
        readonly type: "function";
    }, {
        readonly inputs: readonly [];
        readonly name: "RESOLVED_CROSS_CHAIN_ORDER_TYPEHASH";
        readonly outputs: readonly [{
            readonly internalType: "bytes32";
            readonly name: "";
            readonly type: "bytes32";
        }];
        readonly stateMutability: "view";
        readonly type: "function";
    }, {
        readonly inputs: readonly [];
        readonly name: "SETTLED";
        readonly outputs: readonly [{
            readonly internalType: "bytes32";
            readonly name: "";
            readonly type: "bytes32";
        }];
        readonly stateMutability: "view";
        readonly type: "function";
    }, {
        readonly inputs: readonly [];
        readonly name: "UNKNOWN";
        readonly outputs: readonly [{
            readonly internalType: "bytes32";
            readonly name: "";
            readonly type: "bytes32";
        }];
        readonly stateMutability: "view";
        readonly type: "function";
    }, {
        readonly inputs: readonly [{
            readonly internalType: "uint32";
            readonly name: "";
            readonly type: "uint32";
        }];
        readonly name: "destinationGas";
        readonly outputs: readonly [{
            readonly internalType: "uint256";
            readonly name: "";
            readonly type: "uint256";
        }];
        readonly stateMutability: "view";
        readonly type: "function";
    }, {
        readonly inputs: readonly [];
        readonly name: "domains";
        readonly outputs: readonly [{
            readonly internalType: "uint32[]";
            readonly name: "";
            readonly type: "uint32[]";
        }];
        readonly stateMutability: "view";
        readonly type: "function";
    }, {
        readonly inputs: readonly [{
            readonly internalType: "uint32";
            readonly name: "_domain";
            readonly type: "uint32";
        }, {
            readonly internalType: "bytes32";
            readonly name: "_router";
            readonly type: "bytes32";
        }];
        readonly name: "enrollRemoteRouter";
        readonly outputs: readonly [];
        readonly stateMutability: "nonpayable";
        readonly type: "function";
    }, {
        readonly inputs: readonly [{
            readonly internalType: "uint32[]";
            readonly name: "_domains";
            readonly type: "uint32[]";
        }, {
            readonly internalType: "bytes32[]";
            readonly name: "_addresses";
            readonly type: "bytes32[]";
        }];
        readonly name: "enrollRemoteRouters";
        readonly outputs: readonly [];
        readonly stateMutability: "nonpayable";
        readonly type: "function";
    }, {
        readonly inputs: readonly [{
            readonly internalType: "bytes32";
            readonly name: "_orderId";
            readonly type: "bytes32";
        }, {
            readonly internalType: "bytes";
            readonly name: "_originData";
            readonly type: "bytes";
        }, {
            readonly internalType: "bytes";
            readonly name: "_fillerData";
            readonly type: "bytes";
        }];
        readonly name: "fill";
        readonly outputs: readonly [];
        readonly stateMutability: "payable";
        readonly type: "function";
    }, {
        readonly inputs: readonly [{
            readonly internalType: "bytes32";
            readonly name: "orderId";
            readonly type: "bytes32";
        }];
        readonly name: "filledOrders";
        readonly outputs: readonly [{
            readonly internalType: "bytes";
            readonly name: "originData";
            readonly type: "bytes";
        }, {
            readonly internalType: "bytes";
            readonly name: "fillerData";
            readonly type: "bytes";
        }];
        readonly stateMutability: "view";
        readonly type: "function";
    }, {
        readonly inputs: readonly [{
            readonly internalType: "uint32";
            readonly name: "_origin";
            readonly type: "uint32";
        }, {
            readonly internalType: "bytes32";
            readonly name: "_sender";
            readonly type: "bytes32";
        }, {
            readonly internalType: "bytes";
            readonly name: "_message";
            readonly type: "bytes";
        }];
        readonly name: "handle";
        readonly outputs: readonly [];
        readonly stateMutability: "payable";
        readonly type: "function";
    }, {
        readonly inputs: readonly [];
        readonly name: "hook";
        readonly outputs: readonly [{
            readonly internalType: "contract IPostDispatchHook";
            readonly name: "";
            readonly type: "address";
        }];
        readonly stateMutability: "view";
        readonly type: "function";
    }, {
        readonly inputs: readonly [{
            readonly internalType: "address";
            readonly name: "_customHook";
            readonly type: "address";
        }, {
            readonly internalType: "address";
            readonly name: "_interchainSecurityModule";
            readonly type: "address";
        }, {
            readonly internalType: "address";
            readonly name: "_owner";
            readonly type: "address";
        }];
        readonly name: "initialize";
        readonly outputs: readonly [];
        readonly stateMutability: "nonpayable";
        readonly type: "function";
    }, {
        readonly inputs: readonly [];
        readonly name: "interchainSecurityModule";
        readonly outputs: readonly [{
            readonly internalType: "contract IInterchainSecurityModule";
            readonly name: "";
            readonly type: "address";
        }];
        readonly stateMutability: "view";
        readonly type: "function";
    }, {
        readonly inputs: readonly [{
            readonly internalType: "uint256";
            readonly name: "_nonce";
            readonly type: "uint256";
        }];
        readonly name: "invalidateNonces";
        readonly outputs: readonly [];
        readonly stateMutability: "nonpayable";
        readonly type: "function";
    }, {
        readonly inputs: readonly [{
            readonly internalType: "address";
            readonly name: "_from";
            readonly type: "address";
        }, {
            readonly internalType: "uint256";
            readonly name: "_nonce";
            readonly type: "uint256";
        }];
        readonly name: "isValidNonce";
        readonly outputs: readonly [{
            readonly internalType: "bool";
            readonly name: "";
            readonly type: "bool";
        }];
        readonly stateMutability: "view";
        readonly type: "function";
    }, {
        readonly inputs: readonly [];
        readonly name: "localDomain";
        readonly outputs: readonly [{
            readonly internalType: "uint32";
            readonly name: "";
            readonly type: "uint32";
        }];
        readonly stateMutability: "view";
        readonly type: "function";
    }, {
        readonly inputs: readonly [];
        readonly name: "mailbox";
        readonly outputs: readonly [{
            readonly internalType: "contract IMailbox";
            readonly name: "";
            readonly type: "address";
        }];
        readonly stateMutability: "view";
        readonly type: "function";
    }, {
        readonly inputs: readonly [{
            readonly components: readonly [{
                readonly internalType: "uint32";
                readonly name: "fillDeadline";
                readonly type: "uint32";
            }, {
                readonly internalType: "bytes32";
                readonly name: "orderDataType";
                readonly type: "bytes32";
            }, {
                readonly internalType: "bytes";
                readonly name: "orderData";
                readonly type: "bytes";
            }];
            readonly internalType: "struct OnchainCrossChainOrder";
            readonly name: "_order";
            readonly type: "tuple";
        }];
        readonly name: "open";
        readonly outputs: readonly [];
        readonly stateMutability: "payable";
        readonly type: "function";
    }, {
        readonly inputs: readonly [{
            readonly components: readonly [{
                readonly internalType: "address";
                readonly name: "originSettler";
                readonly type: "address";
            }, {
                readonly internalType: "address";
                readonly name: "user";
                readonly type: "address";
            }, {
                readonly internalType: "uint256";
                readonly name: "nonce";
                readonly type: "uint256";
            }, {
                readonly internalType: "uint256";
                readonly name: "originChainId";
                readonly type: "uint256";
            }, {
                readonly internalType: "uint32";
                readonly name: "openDeadline";
                readonly type: "uint32";
            }, {
                readonly internalType: "uint32";
                readonly name: "fillDeadline";
                readonly type: "uint32";
            }, {
                readonly internalType: "bytes32";
                readonly name: "orderDataType";
                readonly type: "bytes32";
            }, {
                readonly internalType: "bytes";
                readonly name: "orderData";
                readonly type: "bytes";
            }];
            readonly internalType: "struct GaslessCrossChainOrder";
            readonly name: "_order";
            readonly type: "tuple";
        }, {
            readonly internalType: "bytes";
            readonly name: "_signature";
            readonly type: "bytes";
        }, {
            readonly internalType: "bytes";
            readonly name: "_originFillerData";
            readonly type: "bytes";
        }];
        readonly name: "openFor";
        readonly outputs: readonly [];
        readonly stateMutability: "nonpayable";
        readonly type: "function";
    }, {
        readonly inputs: readonly [{
            readonly internalType: "bytes32";
            readonly name: "orderId";
            readonly type: "bytes32";
        }];
        readonly name: "openOrders";
        readonly outputs: readonly [{
            readonly internalType: "bytes";
            readonly name: "orderData";
            readonly type: "bytes";
        }];
        readonly stateMutability: "view";
        readonly type: "function";
    }, {
        readonly inputs: readonly [{
            readonly internalType: "bytes32";
            readonly name: "orderId";
            readonly type: "bytes32";
        }];
        readonly name: "orderStatus";
        readonly outputs: readonly [{
            readonly internalType: "bytes32";
            readonly name: "status";
            readonly type: "bytes32";
        }];
        readonly stateMutability: "view";
        readonly type: "function";
    }, {
        readonly inputs: readonly [];
        readonly name: "owner";
        readonly outputs: readonly [{
            readonly internalType: "address";
            readonly name: "";
            readonly type: "address";
        }];
        readonly stateMutability: "view";
        readonly type: "function";
    }, {
        readonly inputs: readonly [{
            readonly internalType: "uint32";
            readonly name: "_destinationDomain";
            readonly type: "uint32";
        }];
        readonly name: "quoteGasPayment";
        readonly outputs: readonly [{
            readonly internalType: "uint256";
            readonly name: "";
            readonly type: "uint256";
        }];
        readonly stateMutability: "view";
        readonly type: "function";
    }, {
        readonly inputs: readonly [{
            readonly components: readonly [{
                readonly internalType: "uint32";
                readonly name: "fillDeadline";
                readonly type: "uint32";
            }, {
                readonly internalType: "bytes32";
                readonly name: "orderDataType";
                readonly type: "bytes32";
            }, {
                readonly internalType: "bytes";
                readonly name: "orderData";
                readonly type: "bytes";
            }];
            readonly internalType: "struct OnchainCrossChainOrder[]";
            readonly name: "_orders";
            readonly type: "tuple[]";
        }];
        readonly name: "refund";
        readonly outputs: readonly [];
        readonly stateMutability: "payable";
        readonly type: "function";
    }, {
        readonly inputs: readonly [{
            readonly components: readonly [{
                readonly internalType: "address";
                readonly name: "originSettler";
                readonly type: "address";
            }, {
                readonly internalType: "address";
                readonly name: "user";
                readonly type: "address";
            }, {
                readonly internalType: "uint256";
                readonly name: "nonce";
                readonly type: "uint256";
            }, {
                readonly internalType: "uint256";
                readonly name: "originChainId";
                readonly type: "uint256";
            }, {
                readonly internalType: "uint32";
                readonly name: "openDeadline";
                readonly type: "uint32";
            }, {
                readonly internalType: "uint32";
                readonly name: "fillDeadline";
                readonly type: "uint32";
            }, {
                readonly internalType: "bytes32";
                readonly name: "orderDataType";
                readonly type: "bytes32";
            }, {
                readonly internalType: "bytes";
                readonly name: "orderData";
                readonly type: "bytes";
            }];
            readonly internalType: "struct GaslessCrossChainOrder[]";
            readonly name: "_orders";
            readonly type: "tuple[]";
        }];
        readonly name: "refund";
        readonly outputs: readonly [];
        readonly stateMutability: "payable";
        readonly type: "function";
    }, {
        readonly inputs: readonly [];
        readonly name: "renounceOwnership";
        readonly outputs: readonly [];
        readonly stateMutability: "nonpayable";
        readonly type: "function";
    }, {
        readonly inputs: readonly [{
            readonly components: readonly [{
                readonly internalType: "uint32";
                readonly name: "fillDeadline";
                readonly type: "uint32";
            }, {
                readonly internalType: "bytes32";
                readonly name: "orderDataType";
                readonly type: "bytes32";
            }, {
                readonly internalType: "bytes";
                readonly name: "orderData";
                readonly type: "bytes";
            }];
            readonly internalType: "struct OnchainCrossChainOrder";
            readonly name: "_order";
            readonly type: "tuple";
        }];
        readonly name: "resolve";
        readonly outputs: readonly [{
            readonly components: readonly [{
                readonly internalType: "address";
                readonly name: "user";
                readonly type: "address";
            }, {
                readonly internalType: "uint256";
                readonly name: "originChainId";
                readonly type: "uint256";
            }, {
                readonly internalType: "uint32";
                readonly name: "openDeadline";
                readonly type: "uint32";
            }, {
                readonly internalType: "uint32";
                readonly name: "fillDeadline";
                readonly type: "uint32";
            }, {
                readonly internalType: "bytes32";
                readonly name: "orderId";
                readonly type: "bytes32";
            }, {
                readonly components: readonly [{
                    readonly internalType: "bytes32";
                    readonly name: "token";
                    readonly type: "bytes32";
                }, {
                    readonly internalType: "uint256";
                    readonly name: "amount";
                    readonly type: "uint256";
                }, {
                    readonly internalType: "bytes32";
                    readonly name: "recipient";
                    readonly type: "bytes32";
                }, {
                    readonly internalType: "uint256";
                    readonly name: "chainId";
                    readonly type: "uint256";
                }];
                readonly internalType: "struct Output[]";
                readonly name: "maxSpent";
                readonly type: "tuple[]";
            }, {
                readonly components: readonly [{
                    readonly internalType: "bytes32";
                    readonly name: "token";
                    readonly type: "bytes32";
                }, {
                    readonly internalType: "uint256";
                    readonly name: "amount";
                    readonly type: "uint256";
                }, {
                    readonly internalType: "bytes32";
                    readonly name: "recipient";
                    readonly type: "bytes32";
                }, {
                    readonly internalType: "uint256";
                    readonly name: "chainId";
                    readonly type: "uint256";
                }];
                readonly internalType: "struct Output[]";
                readonly name: "minReceived";
                readonly type: "tuple[]";
            }, {
                readonly components: readonly [{
                    readonly internalType: "uint256";
                    readonly name: "destinationChainId";
                    readonly type: "uint256";
                }, {
                    readonly internalType: "bytes32";
                    readonly name: "destinationSettler";
                    readonly type: "bytes32";
                }, {
                    readonly internalType: "bytes";
                    readonly name: "originData";
                    readonly type: "bytes";
                }];
                readonly internalType: "struct FillInstruction[]";
                readonly name: "fillInstructions";
                readonly type: "tuple[]";
            }];
            readonly internalType: "struct ResolvedCrossChainOrder";
            readonly name: "_resolvedOrder";
            readonly type: "tuple";
        }];
        readonly stateMutability: "view";
        readonly type: "function";
    }, {
        readonly inputs: readonly [{
            readonly components: readonly [{
                readonly internalType: "address";
                readonly name: "originSettler";
                readonly type: "address";
            }, {
                readonly internalType: "address";
                readonly name: "user";
                readonly type: "address";
            }, {
                readonly internalType: "uint256";
                readonly name: "nonce";
                readonly type: "uint256";
            }, {
                readonly internalType: "uint256";
                readonly name: "originChainId";
                readonly type: "uint256";
            }, {
                readonly internalType: "uint32";
                readonly name: "openDeadline";
                readonly type: "uint32";
            }, {
                readonly internalType: "uint32";
                readonly name: "fillDeadline";
                readonly type: "uint32";
            }, {
                readonly internalType: "bytes32";
                readonly name: "orderDataType";
                readonly type: "bytes32";
            }, {
                readonly internalType: "bytes";
                readonly name: "orderData";
                readonly type: "bytes";
            }];
            readonly internalType: "struct GaslessCrossChainOrder";
            readonly name: "_order";
            readonly type: "tuple";
        }, {
            readonly internalType: "bytes";
            readonly name: "_originFillerData";
            readonly type: "bytes";
        }];
        readonly name: "resolveFor";
        readonly outputs: readonly [{
            readonly components: readonly [{
                readonly internalType: "address";
                readonly name: "user";
                readonly type: "address";
            }, {
                readonly internalType: "uint256";
                readonly name: "originChainId";
                readonly type: "uint256";
            }, {
                readonly internalType: "uint32";
                readonly name: "openDeadline";
                readonly type: "uint32";
            }, {
                readonly internalType: "uint32";
                readonly name: "fillDeadline";
                readonly type: "uint32";
            }, {
                readonly internalType: "bytes32";
                readonly name: "orderId";
                readonly type: "bytes32";
            }, {
                readonly components: readonly [{
                    readonly internalType: "bytes32";
                    readonly name: "token";
                    readonly type: "bytes32";
                }, {
                    readonly internalType: "uint256";
                    readonly name: "amount";
                    readonly type: "uint256";
                }, {
                    readonly internalType: "bytes32";
                    readonly name: "recipient";
                    readonly type: "bytes32";
                }, {
                    readonly internalType: "uint256";
                    readonly name: "chainId";
                    readonly type: "uint256";
                }];
                readonly internalType: "struct Output[]";
                readonly name: "maxSpent";
                readonly type: "tuple[]";
            }, {
                readonly components: readonly [{
                    readonly internalType: "bytes32";
                    readonly name: "token";
                    readonly type: "bytes32";
                }, {
                    readonly internalType: "uint256";
                    readonly name: "amount";
                    readonly type: "uint256";
                }, {
                    readonly internalType: "bytes32";
                    readonly name: "recipient";
                    readonly type: "bytes32";
                }, {
                    readonly internalType: "uint256";
                    readonly name: "chainId";
                    readonly type: "uint256";
                }];
                readonly internalType: "struct Output[]";
                readonly name: "minReceived";
                readonly type: "tuple[]";
            }, {
                readonly components: readonly [{
                    readonly internalType: "uint256";
                    readonly name: "destinationChainId";
                    readonly type: "uint256";
                }, {
                    readonly internalType: "bytes32";
                    readonly name: "destinationSettler";
                    readonly type: "bytes32";
                }, {
                    readonly internalType: "bytes";
                    readonly name: "originData";
                    readonly type: "bytes";
                }];
                readonly internalType: "struct FillInstruction[]";
                readonly name: "fillInstructions";
                readonly type: "tuple[]";
            }];
            readonly internalType: "struct ResolvedCrossChainOrder";
            readonly name: "_resolvedOrder";
            readonly type: "tuple";
        }];
        readonly stateMutability: "view";
        readonly type: "function";
    }, {
        readonly inputs: readonly [{
            readonly internalType: "uint32";
            readonly name: "_domain";
            readonly type: "uint32";
        }];
        readonly name: "routers";
        readonly outputs: readonly [{
            readonly internalType: "bytes32";
            readonly name: "";
            readonly type: "bytes32";
        }];
        readonly stateMutability: "view";
        readonly type: "function";
    }, {
        readonly inputs: readonly [{
            readonly internalType: "uint32";
            readonly name: "domain";
            readonly type: "uint32";
        }, {
            readonly internalType: "uint256";
            readonly name: "gas";
            readonly type: "uint256";
        }];
        readonly name: "setDestinationGas";
        readonly outputs: readonly [];
        readonly stateMutability: "nonpayable";
        readonly type: "function";
    }, {
        readonly inputs: readonly [{
            readonly components: readonly [{
                readonly internalType: "uint32";
                readonly name: "domain";
                readonly type: "uint32";
            }, {
                readonly internalType: "uint256";
                readonly name: "gas";
                readonly type: "uint256";
            }];
            readonly internalType: "struct GasRouter.GasRouterConfig[]";
            readonly name: "gasConfigs";
            readonly type: "tuple[]";
        }];
        readonly name: "setDestinationGas";
        readonly outputs: readonly [];
        readonly stateMutability: "nonpayable";
        readonly type: "function";
    }, {
        readonly inputs: readonly [{
            readonly internalType: "address";
            readonly name: "_hook";
            readonly type: "address";
        }];
        readonly name: "setHook";
        readonly outputs: readonly [];
        readonly stateMutability: "nonpayable";
        readonly type: "function";
    }, {
        readonly inputs: readonly [{
            readonly internalType: "address";
            readonly name: "_module";
            readonly type: "address";
        }];
        readonly name: "setInterchainSecurityModule";
        readonly outputs: readonly [];
        readonly stateMutability: "nonpayable";
        readonly type: "function";
    }, {
        readonly inputs: readonly [{
            readonly internalType: "bytes32[]";
            readonly name: "_orderIds";
            readonly type: "bytes32[]";
        }];
        readonly name: "settle";
        readonly outputs: readonly [];
        readonly stateMutability: "payable";
        readonly type: "function";
    }, {
        readonly inputs: readonly [{
            readonly internalType: "address";
            readonly name: "newOwner";
            readonly type: "address";
        }];
        readonly name: "transferOwnership";
        readonly outputs: readonly [];
        readonly stateMutability: "nonpayable";
        readonly type: "function";
    }, {
        readonly inputs: readonly [{
            readonly internalType: "uint32";
            readonly name: "_domain";
            readonly type: "uint32";
        }];
        readonly name: "unenrollRemoteRouter";
        readonly outputs: readonly [];
        readonly stateMutability: "nonpayable";
        readonly type: "function";
    }, {
        readonly inputs: readonly [{
            readonly internalType: "uint32[]";
            readonly name: "_domains";
            readonly type: "uint32[]";
        }];
        readonly name: "unenrollRemoteRouters";
        readonly outputs: readonly [];
        readonly stateMutability: "nonpayable";
        readonly type: "function";
    }, {
        readonly inputs: readonly [{
            readonly internalType: "address";
            readonly name: "";
            readonly type: "address";
        }, {
            readonly internalType: "uint256";
            readonly name: "";
            readonly type: "uint256";
        }];
        readonly name: "usedNonces";
        readonly outputs: readonly [{
            readonly internalType: "bool";
            readonly name: "";
            readonly type: "bool";
        }];
        readonly stateMutability: "view";
        readonly type: "function";
    }, {
        readonly inputs: readonly [{
            readonly components: readonly [{
                readonly internalType: "address";
                readonly name: "user";
                readonly type: "address";
            }, {
                readonly internalType: "uint256";
                readonly name: "originChainId";
                readonly type: "uint256";
            }, {
                readonly internalType: "uint32";
                readonly name: "openDeadline";
                readonly type: "uint32";
            }, {
                readonly internalType: "uint32";
                readonly name: "fillDeadline";
                readonly type: "uint32";
            }, {
                readonly internalType: "bytes32";
                readonly name: "orderId";
                readonly type: "bytes32";
            }, {
                readonly components: readonly [{
                    readonly internalType: "bytes32";
                    readonly name: "token";
                    readonly type: "bytes32";
                }, {
                    readonly internalType: "uint256";
                    readonly name: "amount";
                    readonly type: "uint256";
                }, {
                    readonly internalType: "bytes32";
                    readonly name: "recipient";
                    readonly type: "bytes32";
                }, {
                    readonly internalType: "uint256";
                    readonly name: "chainId";
                    readonly type: "uint256";
                }];
                readonly internalType: "struct Output[]";
                readonly name: "maxSpent";
                readonly type: "tuple[]";
            }, {
                readonly components: readonly [{
                    readonly internalType: "bytes32";
                    readonly name: "token";
                    readonly type: "bytes32";
                }, {
                    readonly internalType: "uint256";
                    readonly name: "amount";
                    readonly type: "uint256";
                }, {
                    readonly internalType: "bytes32";
                    readonly name: "recipient";
                    readonly type: "bytes32";
                }, {
                    readonly internalType: "uint256";
                    readonly name: "chainId";
                    readonly type: "uint256";
                }];
                readonly internalType: "struct Output[]";
                readonly name: "minReceived";
                readonly type: "tuple[]";
            }, {
                readonly components: readonly [{
                    readonly internalType: "uint256";
                    readonly name: "destinationChainId";
                    readonly type: "uint256";
                }, {
                    readonly internalType: "bytes32";
                    readonly name: "destinationSettler";
                    readonly type: "bytes32";
                }, {
                    readonly internalType: "bytes";
                    readonly name: "originData";
                    readonly type: "bytes";
                }];
                readonly internalType: "struct FillInstruction[]";
                readonly name: "fillInstructions";
                readonly type: "tuple[]";
            }];
            readonly internalType: "struct ResolvedCrossChainOrder";
            readonly name: "_resolvedOrder";
            readonly type: "tuple";
        }];
        readonly name: "witnessHash";
        readonly outputs: readonly [{
            readonly internalType: "bytes32";
            readonly name: "";
            readonly type: "bytes32";
        }];
        readonly stateMutability: "pure";
        readonly type: "function";
    }, {
        readonly inputs: readonly [];
        readonly name: "witnessTypeString";
        readonly outputs: readonly [{
            readonly internalType: "string";
            readonly name: "";
            readonly type: "string";
        }];
        readonly stateMutability: "view";
        readonly type: "function";
    }];
    static createInterface(): Hyperlane7683Interface;
    static connect(address: string, signerOrProvider: Signer | Provider): Hyperlane7683;
}
//# sourceMappingURL=Hyperlane7683__factory.d.ts.map