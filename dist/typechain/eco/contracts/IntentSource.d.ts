import type { BaseContract, BigNumber, BigNumberish, BytesLike, CallOverrides, ContractTransaction, Overrides, PopulatedTransaction, Signer, utils } from "ethers";
import type { FunctionFragment, Result, EventFragment } from "@ethersproject/abi";
import type { Listener, Provider } from "@ethersproject/providers";
import type { TypedEventFilter, TypedEvent, TypedListener, OnEvent } from "../../common.js";
export type IntentStruct = {
    creator: string;
    destinationChainID: BigNumberish;
    targets: string[];
    data: BytesLike[];
    rewardTokens: string[];
    rewardAmounts: BigNumberish[];
    expiryTime: BigNumberish;
    hasBeenWithdrawn: boolean;
    nonce: BytesLike;
    prover: string;
};
export type IntentStructOutput = [
    string,
    BigNumber,
    string[],
    string[],
    string[],
    BigNumber[],
    BigNumber,
    boolean,
    string,
    string
] & {
    creator: string;
    destinationChainID: BigNumber;
    targets: string[];
    data: string[];
    rewardTokens: string[];
    rewardAmounts: BigNumber[];
    expiryTime: BigNumber;
    hasBeenWithdrawn: boolean;
    nonce: string;
    prover: string;
};
export interface IntentSourceInterface extends utils.Interface {
    functions: {
        "CHAIN_ID()": FunctionFragment;
        "MINIMUM_DURATION()": FunctionFragment;
        "counter()": FunctionFragment;
        "createIntent(uint256,address,address[],bytes[],address[],uint256[],uint256,address)": FunctionFragment;
        "getIntent(bytes32)": FunctionFragment;
        "intents(bytes32)": FunctionFragment;
        "withdrawRewards(bytes32)": FunctionFragment;
    };
    getFunction(nameOrSignatureOrTopic: "CHAIN_ID" | "MINIMUM_DURATION" | "counter" | "createIntent" | "getIntent" | "intents" | "withdrawRewards"): FunctionFragment;
    encodeFunctionData(functionFragment: "CHAIN_ID", values?: undefined): string;
    encodeFunctionData(functionFragment: "MINIMUM_DURATION", values?: undefined): string;
    encodeFunctionData(functionFragment: "counter", values?: undefined): string;
    encodeFunctionData(functionFragment: "createIntent", values: [
        BigNumberish,
        string,
        string[],
        BytesLike[],
        string[],
        BigNumberish[],
        BigNumberish,
        string
    ]): string;
    encodeFunctionData(functionFragment: "getIntent", values: [BytesLike]): string;
    encodeFunctionData(functionFragment: "intents", values: [BytesLike]): string;
    encodeFunctionData(functionFragment: "withdrawRewards", values: [BytesLike]): string;
    decodeFunctionResult(functionFragment: "CHAIN_ID", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "MINIMUM_DURATION", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "counter", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "createIntent", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "getIntent", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "intents", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "withdrawRewards", data: BytesLike): Result;
    events: {
        "IntentCreated(bytes32,address,uint256,address[],bytes[],address[],uint256[],uint256,bytes32,address)": EventFragment;
        "Withdrawal(bytes32,address)": EventFragment;
    };
    getEvent(nameOrSignatureOrTopic: "IntentCreated"): EventFragment;
    getEvent(nameOrSignatureOrTopic: "Withdrawal"): EventFragment;
}
export interface IntentCreatedEventObject {
    _hash: string;
    _creator: string;
    _destinationChain: BigNumber;
    _targets: string[];
    _data: string[];
    _rewardTokens: string[];
    _rewardAmounts: BigNumber[];
    _expiryTime: BigNumber;
    nonce: string;
    _prover: string;
}
export type IntentCreatedEvent = TypedEvent<[
    string,
    string,
    BigNumber,
    string[],
    string[],
    string[],
    BigNumber[],
    BigNumber,
    string,
    string
], IntentCreatedEventObject>;
export type IntentCreatedEventFilter = TypedEventFilter<IntentCreatedEvent>;
export interface WithdrawalEventObject {
    _hash: string;
    _recipient: string;
}
export type WithdrawalEvent = TypedEvent<[
    string,
    string
], WithdrawalEventObject>;
export type WithdrawalEventFilter = TypedEventFilter<WithdrawalEvent>;
export interface IntentSource extends BaseContract {
    connect(signerOrProvider: Signer | Provider | string): this;
    attach(addressOrName: string): this;
    deployed(): Promise<this>;
    interface: IntentSourceInterface;
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
        CHAIN_ID(overrides?: CallOverrides): Promise<[BigNumber]>;
        MINIMUM_DURATION(overrides?: CallOverrides): Promise<[BigNumber]>;
        counter(overrides?: CallOverrides): Promise<[BigNumber]>;
        createIntent(_destinationChainID: BigNumberish, _inbox: string, _targets: string[], _data: BytesLike[], _rewardTokens: string[], _rewardAmounts: BigNumberish[], _expiryTime: BigNumberish, _prover: string, overrides?: Overrides & {
            from?: string;
        }): Promise<ContractTransaction>;
        getIntent(identifier: BytesLike, overrides?: CallOverrides): Promise<[IntentStructOutput]>;
        intents(intenthash: BytesLike, overrides?: CallOverrides): Promise<[
            string,
            BigNumber,
            BigNumber,
            boolean,
            string,
            string
        ] & {
            creator: string;
            destinationChainID: BigNumber;
            expiryTime: BigNumber;
            hasBeenWithdrawn: boolean;
            nonce: string;
            prover: string;
        }>;
        withdrawRewards(_hash: BytesLike, overrides?: Overrides & {
            from?: string;
        }): Promise<ContractTransaction>;
    };
    CHAIN_ID(overrides?: CallOverrides): Promise<BigNumber>;
    MINIMUM_DURATION(overrides?: CallOverrides): Promise<BigNumber>;
    counter(overrides?: CallOverrides): Promise<BigNumber>;
    createIntent(_destinationChainID: BigNumberish, _inbox: string, _targets: string[], _data: BytesLike[], _rewardTokens: string[], _rewardAmounts: BigNumberish[], _expiryTime: BigNumberish, _prover: string, overrides?: Overrides & {
        from?: string;
    }): Promise<ContractTransaction>;
    getIntent(identifier: BytesLike, overrides?: CallOverrides): Promise<IntentStructOutput>;
    intents(intenthash: BytesLike, overrides?: CallOverrides): Promise<[
        string,
        BigNumber,
        BigNumber,
        boolean,
        string,
        string
    ] & {
        creator: string;
        destinationChainID: BigNumber;
        expiryTime: BigNumber;
        hasBeenWithdrawn: boolean;
        nonce: string;
        prover: string;
    }>;
    withdrawRewards(_hash: BytesLike, overrides?: Overrides & {
        from?: string;
    }): Promise<ContractTransaction>;
    callStatic: {
        CHAIN_ID(overrides?: CallOverrides): Promise<BigNumber>;
        MINIMUM_DURATION(overrides?: CallOverrides): Promise<BigNumber>;
        counter(overrides?: CallOverrides): Promise<BigNumber>;
        createIntent(_destinationChainID: BigNumberish, _inbox: string, _targets: string[], _data: BytesLike[], _rewardTokens: string[], _rewardAmounts: BigNumberish[], _expiryTime: BigNumberish, _prover: string, overrides?: CallOverrides): Promise<void>;
        getIntent(identifier: BytesLike, overrides?: CallOverrides): Promise<IntentStructOutput>;
        intents(intenthash: BytesLike, overrides?: CallOverrides): Promise<[
            string,
            BigNumber,
            BigNumber,
            boolean,
            string,
            string
        ] & {
            creator: string;
            destinationChainID: BigNumber;
            expiryTime: BigNumber;
            hasBeenWithdrawn: boolean;
            nonce: string;
            prover: string;
        }>;
        withdrawRewards(_hash: BytesLike, overrides?: CallOverrides): Promise<void>;
    };
    filters: {
        "IntentCreated(bytes32,address,uint256,address[],bytes[],address[],uint256[],uint256,bytes32,address)"(_hash?: BytesLike | null, _creator?: null, _destinationChain?: BigNumberish | null, _targets?: null, _data?: null, _rewardTokens?: null, _rewardAmounts?: null, _expiryTime?: null, nonce?: null, _prover?: string | null): IntentCreatedEventFilter;
        IntentCreated(_hash?: BytesLike | null, _creator?: null, _destinationChain?: BigNumberish | null, _targets?: null, _data?: null, _rewardTokens?: null, _rewardAmounts?: null, _expiryTime?: null, nonce?: null, _prover?: string | null): IntentCreatedEventFilter;
        "Withdrawal(bytes32,address)"(_hash?: null, _recipient?: string | null): WithdrawalEventFilter;
        Withdrawal(_hash?: null, _recipient?: string | null): WithdrawalEventFilter;
    };
    estimateGas: {
        CHAIN_ID(overrides?: CallOverrides): Promise<BigNumber>;
        MINIMUM_DURATION(overrides?: CallOverrides): Promise<BigNumber>;
        counter(overrides?: CallOverrides): Promise<BigNumber>;
        createIntent(_destinationChainID: BigNumberish, _inbox: string, _targets: string[], _data: BytesLike[], _rewardTokens: string[], _rewardAmounts: BigNumberish[], _expiryTime: BigNumberish, _prover: string, overrides?: Overrides & {
            from?: string;
        }): Promise<BigNumber>;
        getIntent(identifier: BytesLike, overrides?: CallOverrides): Promise<BigNumber>;
        intents(intenthash: BytesLike, overrides?: CallOverrides): Promise<BigNumber>;
        withdrawRewards(_hash: BytesLike, overrides?: Overrides & {
            from?: string;
        }): Promise<BigNumber>;
    };
    populateTransaction: {
        CHAIN_ID(overrides?: CallOverrides): Promise<PopulatedTransaction>;
        MINIMUM_DURATION(overrides?: CallOverrides): Promise<PopulatedTransaction>;
        counter(overrides?: CallOverrides): Promise<PopulatedTransaction>;
        createIntent(_destinationChainID: BigNumberish, _inbox: string, _targets: string[], _data: BytesLike[], _rewardTokens: string[], _rewardAmounts: BigNumberish[], _expiryTime: BigNumberish, _prover: string, overrides?: Overrides & {
            from?: string;
        }): Promise<PopulatedTransaction>;
        getIntent(identifier: BytesLike, overrides?: CallOverrides): Promise<PopulatedTransaction>;
        intents(intenthash: BytesLike, overrides?: CallOverrides): Promise<PopulatedTransaction>;
        withdrawRewards(_hash: BytesLike, overrides?: Overrides & {
            from?: string;
        }): Promise<PopulatedTransaction>;
    };
}
//# sourceMappingURL=IntentSource.d.ts.map