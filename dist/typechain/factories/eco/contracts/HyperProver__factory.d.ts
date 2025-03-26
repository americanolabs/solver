import { Signer } from "ethers";
import type { Provider } from "@ethersproject/providers";
import type { HyperProver, HyperProverInterface } from "../../../eco/contracts/HyperProver.js";
export declare class HyperProver__factory {
    static readonly abi: readonly [{
        readonly inputs: readonly [{
            readonly internalType: "address";
            readonly name: "_mailbox";
            readonly type: "address";
        }, {
            readonly internalType: "address";
            readonly name: "_inbox";
            readonly type: "address";
        }];
        readonly stateMutability: "nonpayable";
        readonly type: "constructor";
    }, {
        readonly inputs: readonly [{
            readonly internalType: "address";
            readonly name: "_sender";
            readonly type: "address";
        }];
        readonly name: "UnauthorizedDispatch";
        readonly type: "error";
    }, {
        readonly inputs: readonly [{
            readonly internalType: "address";
            readonly name: "_sender";
            readonly type: "address";
        }];
        readonly name: "UnauthorizedHandle";
        readonly type: "error";
    }, {
        readonly anonymous: false;
        readonly inputs: readonly [{
            readonly indexed: false;
            readonly internalType: "bytes32";
            readonly name: "_intentHash";
            readonly type: "bytes32";
        }];
        readonly name: "IntentAlreadyProven";
        readonly type: "event";
    }, {
        readonly anonymous: false;
        readonly inputs: readonly [{
            readonly indexed: true;
            readonly internalType: "bytes32";
            readonly name: "_hash";
            readonly type: "bytes32";
        }, {
            readonly indexed: true;
            readonly internalType: "address";
            readonly name: "_claimant";
            readonly type: "address";
        }];
        readonly name: "IntentProven";
        readonly type: "event";
    }, {
        readonly inputs: readonly [];
        readonly name: "INBOX";
        readonly outputs: readonly [{
            readonly internalType: "address";
            readonly name: "";
            readonly type: "address";
        }];
        readonly stateMutability: "view";
        readonly type: "function";
    }, {
        readonly inputs: readonly [];
        readonly name: "MAILBOX";
        readonly outputs: readonly [{
            readonly internalType: "address";
            readonly name: "";
            readonly type: "address";
        }];
        readonly stateMutability: "view";
        readonly type: "function";
    }, {
        readonly inputs: readonly [];
        readonly name: "PROOF_TYPE";
        readonly outputs: readonly [{
            readonly internalType: "enum IProver.ProofType";
            readonly name: "";
            readonly type: "uint8";
        }];
        readonly stateMutability: "view";
        readonly type: "function";
    }, {
        readonly inputs: readonly [];
        readonly name: "getProofType";
        readonly outputs: readonly [{
            readonly internalType: "enum IProver.ProofType";
            readonly name: "";
            readonly type: "uint8";
        }];
        readonly stateMutability: "pure";
        readonly type: "function";
    }, {
        readonly inputs: readonly [{
            readonly internalType: "uint32";
            readonly name: "";
            readonly type: "uint32";
        }, {
            readonly internalType: "bytes32";
            readonly name: "_sender";
            readonly type: "bytes32";
        }, {
            readonly internalType: "bytes";
            readonly name: "_messageBody";
            readonly type: "bytes";
        }];
        readonly name: "handle";
        readonly outputs: readonly [];
        readonly stateMutability: "payable";
        readonly type: "function";
    }, {
        readonly inputs: readonly [{
            readonly internalType: "bytes32";
            readonly name: "";
            readonly type: "bytes32";
        }];
        readonly name: "provenIntents";
        readonly outputs: readonly [{
            readonly internalType: "address";
            readonly name: "";
            readonly type: "address";
        }];
        readonly stateMutability: "view";
        readonly type: "function";
    }];
    static createInterface(): HyperProverInterface;
    static connect(address: string, signerOrProvider: Signer | Provider): HyperProver;
}
//# sourceMappingURL=HyperProver__factory.d.ts.map