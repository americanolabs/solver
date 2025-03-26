import type { BaseContract, BigNumber, BigNumberish, BytesLike, CallOverrides, ContractTransaction, PayableOverrides, PopulatedTransaction, Signer, utils } from "ethers";
import type { FunctionFragment, Result, EventFragment } from "@ethersproject/abi";
import type { Listener, Provider } from "@ethersproject/providers";
import type { TypedEventFilter, TypedEvent, TypedListener, OnEvent } from "../../common.js";
export interface HyperProverInterface extends utils.Interface {
    functions: {
        "INBOX()": FunctionFragment;
        "MAILBOX()": FunctionFragment;
        "PROOF_TYPE()": FunctionFragment;
        "getProofType()": FunctionFragment;
        "handle(uint32,bytes32,bytes)": FunctionFragment;
        "provenIntents(bytes32)": FunctionFragment;
    };
    getFunction(nameOrSignatureOrTopic: "INBOX" | "MAILBOX" | "PROOF_TYPE" | "getProofType" | "handle" | "provenIntents"): FunctionFragment;
    encodeFunctionData(functionFragment: "INBOX", values?: undefined): string;
    encodeFunctionData(functionFragment: "MAILBOX", values?: undefined): string;
    encodeFunctionData(functionFragment: "PROOF_TYPE", values?: undefined): string;
    encodeFunctionData(functionFragment: "getProofType", values?: undefined): string;
    encodeFunctionData(functionFragment: "handle", values: [BigNumberish, BytesLike, BytesLike]): string;
    encodeFunctionData(functionFragment: "provenIntents", values: [BytesLike]): string;
    decodeFunctionResult(functionFragment: "INBOX", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "MAILBOX", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "PROOF_TYPE", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "getProofType", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "handle", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "provenIntents", data: BytesLike): Result;
    events: {
        "IntentAlreadyProven(bytes32)": EventFragment;
        "IntentProven(bytes32,address)": EventFragment;
    };
    getEvent(nameOrSignatureOrTopic: "IntentAlreadyProven"): EventFragment;
    getEvent(nameOrSignatureOrTopic: "IntentProven"): EventFragment;
}
export interface IntentAlreadyProvenEventObject {
    _intentHash: string;
}
export type IntentAlreadyProvenEvent = TypedEvent<[
    string
], IntentAlreadyProvenEventObject>;
export type IntentAlreadyProvenEventFilter = TypedEventFilter<IntentAlreadyProvenEvent>;
export interface IntentProvenEventObject {
    _hash: string;
    _claimant: string;
}
export type IntentProvenEvent = TypedEvent<[
    string,
    string
], IntentProvenEventObject>;
export type IntentProvenEventFilter = TypedEventFilter<IntentProvenEvent>;
export interface HyperProver extends BaseContract {
    connect(signerOrProvider: Signer | Provider | string): this;
    attach(addressOrName: string): this;
    deployed(): Promise<this>;
    interface: HyperProverInterface;
    queryFilter<TEvent extends TypedEvent>(event: TypedEventFilter<TEvent>, fromBlockOrBlockhash?: string | number | undefined, toBlock?: string | number | undefined): Promise<Array<TEvent>>;
    listeners<TEvent extends TypedEvent>(eventFilter?: TypedEventFilter<TEvent>): Array<TypedListener<TEvent>>;
    listeners(eventName?: string): Array<Listener>;
    removeAllListeners<TEvent extends TypedEvent>(eventFilter: TypedEventFilter<TEvent>): this;
    removeAllListeners(eventName?: string): this;
    off: OnEvent<this>;
    on: OnEvent<this>;
    once: OnEvent<this>;
    removeListener: OnEvent<this>;
    functions: {
        INBOX(overrides?: CallOverrides): Promise<[string]>;
        MAILBOX(overrides?: CallOverrides): Promise<[string]>;
        PROOF_TYPE(overrides?: CallOverrides): Promise<[number]>;
        getProofType(overrides?: CallOverrides): Promise<[number]>;
        handle(arg0: BigNumberish, _sender: BytesLike, _messageBody: BytesLike, overrides?: PayableOverrides & {
            from?: string;
        }): Promise<ContractTransaction>;
        provenIntents(arg0: BytesLike, overrides?: CallOverrides): Promise<[string]>;
    };
    INBOX(overrides?: CallOverrides): Promise<string>;
    MAILBOX(overrides?: CallOverrides): Promise<string>;
    PROOF_TYPE(overrides?: CallOverrides): Promise<number>;
    getProofType(overrides?: CallOverrides): Promise<number>;
    handle(arg0: BigNumberish, _sender: BytesLike, _messageBody: BytesLike, overrides?: PayableOverrides & {
        from?: string;
    }): Promise<ContractTransaction>;
    provenIntents(arg0: BytesLike, overrides?: CallOverrides): Promise<string>;
    callStatic: {
        INBOX(overrides?: CallOverrides): Promise<string>;
        MAILBOX(overrides?: CallOverrides): Promise<string>;
        PROOF_TYPE(overrides?: CallOverrides): Promise<number>;
        getProofType(overrides?: CallOverrides): Promise<number>;
        handle(arg0: BigNumberish, _sender: BytesLike, _messageBody: BytesLike, overrides?: CallOverrides): Promise<void>;
        provenIntents(arg0: BytesLike, overrides?: CallOverrides): Promise<string>;
    };
    filters: {
        "IntentAlreadyProven(bytes32)"(_intentHash?: null): IntentAlreadyProvenEventFilter;
        IntentAlreadyProven(_intentHash?: null): IntentAlreadyProvenEventFilter;
        "IntentProven(bytes32,address)"(_hash?: BytesLike | null, _claimant?: string | null): IntentProvenEventFilter;
        IntentProven(_hash?: BytesLike | null, _claimant?: string | null): IntentProvenEventFilter;
    };
    estimateGas: {
        INBOX(overrides?: CallOverrides): Promise<BigNumber>;
        MAILBOX(overrides?: CallOverrides): Promise<BigNumber>;
        PROOF_TYPE(overrides?: CallOverrides): Promise<BigNumber>;
        getProofType(overrides?: CallOverrides): Promise<BigNumber>;
        handle(arg0: BigNumberish, _sender: BytesLike, _messageBody: BytesLike, overrides?: PayableOverrides & {
            from?: string;
        }): Promise<BigNumber>;
        provenIntents(arg0: BytesLike, overrides?: CallOverrides): Promise<BigNumber>;
    };
    populateTransaction: {
        INBOX(overrides?: CallOverrides): Promise<PopulatedTransaction>;
        MAILBOX(overrides?: CallOverrides): Promise<PopulatedTransaction>;
        PROOF_TYPE(overrides?: CallOverrides): Promise<PopulatedTransaction>;
        getProofType(overrides?: CallOverrides): Promise<PopulatedTransaction>;
        handle(arg0: BigNumberish, _sender: BytesLike, _messageBody: BytesLike, overrides?: PayableOverrides & {
            from?: string;
        }): Promise<PopulatedTransaction>;
        provenIntents(arg0: BytesLike, overrides?: CallOverrides): Promise<PopulatedTransaction>;
    };
}
//# sourceMappingURL=HyperProver.d.ts.map