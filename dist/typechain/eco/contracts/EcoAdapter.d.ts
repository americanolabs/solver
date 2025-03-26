import type { BaseContract, BigNumber, BigNumberish, BytesLike, CallOverrides, ContractTransaction, Overrides, PayableOverrides, PopulatedTransaction, Signer, utils } from "ethers";
import type { FunctionFragment, Result, EventFragment } from "@ethersproject/abi";
import type { Listener, Provider } from "@ethersproject/providers";
import type { TypedEventFilter, TypedEvent, TypedListener, OnEvent } from "../../common.js";
export interface EcoAdapterInterface extends utils.Interface {
    functions: {
        "fetchFee(uint256,bytes32[],address[],address)": FunctionFragment;
        "fulfillHyperInstant(uint256,address[],bytes[],uint256,bytes32,address,bytes32,address)": FunctionFragment;
        "inbox()": FunctionFragment;
        "isTransfer(bytes)": FunctionFragment;
        "owner()": FunctionFragment;
        "renounceOwnership()": FunctionFragment;
        "transferOwnership(address)": FunctionFragment;
    };
    getFunction(nameOrSignatureOrTopic: "fetchFee" | "fulfillHyperInstant" | "inbox" | "isTransfer" | "owner" | "renounceOwnership" | "transferOwnership"): FunctionFragment;
    encodeFunctionData(functionFragment: "fetchFee", values: [BigNumberish, BytesLike[], string[], string]): string;
    encodeFunctionData(functionFragment: "fulfillHyperInstant", values: [
        BigNumberish,
        string[],
        BytesLike[],
        BigNumberish,
        BytesLike,
        string,
        BytesLike,
        string
    ]): string;
    encodeFunctionData(functionFragment: "inbox", values?: undefined): string;
    encodeFunctionData(functionFragment: "isTransfer", values: [BytesLike]): string;
    encodeFunctionData(functionFragment: "owner", values?: undefined): string;
    encodeFunctionData(functionFragment: "renounceOwnership", values?: undefined): string;
    encodeFunctionData(functionFragment: "transferOwnership", values: [string]): string;
    decodeFunctionResult(functionFragment: "fetchFee", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "fulfillHyperInstant", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "inbox", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "isTransfer", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "owner", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "renounceOwnership", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "transferOwnership", data: BytesLike): Result;
    events: {
        "OwnershipTransferred(address,address)": EventFragment;
    };
    getEvent(nameOrSignatureOrTopic: "OwnershipTransferred"): EventFragment;
}
export interface OwnershipTransferredEventObject {
    previousOwner: string;
    newOwner: string;
}
export type OwnershipTransferredEvent = TypedEvent<[
    string,
    string
], OwnershipTransferredEventObject>;
export type OwnershipTransferredEventFilter = TypedEventFilter<OwnershipTransferredEvent>;
export interface EcoAdapter extends BaseContract {
    connect(signerOrProvider: Signer | Provider | string): this;
    attach(addressOrName: string): this;
    deployed(): Promise<this>;
    interface: EcoAdapterInterface;
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
        fetchFee(_sourceChainID: BigNumberish, _hashes: BytesLike[], _claimants: string[], _prover: string, overrides?: CallOverrides): Promise<[BigNumber] & {
            fee: BigNumber;
        }>;
        fulfillHyperInstant(_sourceChainID: BigNumberish, _targets: string[], _data: BytesLike[], _expiryTime: BigNumberish, _nonce: BytesLike, _claimant: string, _expectedHash: BytesLike, _prover: string, overrides?: PayableOverrides & {
            from?: string;
        }): Promise<ContractTransaction>;
        inbox(overrides?: CallOverrides): Promise<[string]>;
        isTransfer(_data: BytesLike, overrides?: CallOverrides): Promise<[boolean]>;
        owner(overrides?: CallOverrides): Promise<[string]>;
        renounceOwnership(overrides?: Overrides & {
            from?: string;
        }): Promise<ContractTransaction>;
        transferOwnership(newOwner: string, overrides?: Overrides & {
            from?: string;
        }): Promise<ContractTransaction>;
    };
    fetchFee(_sourceChainID: BigNumberish, _hashes: BytesLike[], _claimants: string[], _prover: string, overrides?: CallOverrides): Promise<BigNumber>;
    fulfillHyperInstant(_sourceChainID: BigNumberish, _targets: string[], _data: BytesLike[], _expiryTime: BigNumberish, _nonce: BytesLike, _claimant: string, _expectedHash: BytesLike, _prover: string, overrides?: PayableOverrides & {
        from?: string;
    }): Promise<ContractTransaction>;
    inbox(overrides?: CallOverrides): Promise<string>;
    isTransfer(_data: BytesLike, overrides?: CallOverrides): Promise<boolean>;
    owner(overrides?: CallOverrides): Promise<string>;
    renounceOwnership(overrides?: Overrides & {
        from?: string;
    }): Promise<ContractTransaction>;
    transferOwnership(newOwner: string, overrides?: Overrides & {
        from?: string;
    }): Promise<ContractTransaction>;
    callStatic: {
        fetchFee(_sourceChainID: BigNumberish, _hashes: BytesLike[], _claimants: string[], _prover: string, overrides?: CallOverrides): Promise<BigNumber>;
        fulfillHyperInstant(_sourceChainID: BigNumberish, _targets: string[], _data: BytesLike[], _expiryTime: BigNumberish, _nonce: BytesLike, _claimant: string, _expectedHash: BytesLike, _prover: string, overrides?: CallOverrides): Promise<string[]>;
        inbox(overrides?: CallOverrides): Promise<string>;
        isTransfer(_data: BytesLike, overrides?: CallOverrides): Promise<boolean>;
        owner(overrides?: CallOverrides): Promise<string>;
        renounceOwnership(overrides?: CallOverrides): Promise<void>;
        transferOwnership(newOwner: string, overrides?: CallOverrides): Promise<void>;
    };
    filters: {
        "OwnershipTransferred(address,address)"(previousOwner?: string | null, newOwner?: string | null): OwnershipTransferredEventFilter;
        OwnershipTransferred(previousOwner?: string | null, newOwner?: string | null): OwnershipTransferredEventFilter;
    };
    estimateGas: {
        fetchFee(_sourceChainID: BigNumberish, _hashes: BytesLike[], _claimants: string[], _prover: string, overrides?: CallOverrides): Promise<BigNumber>;
        fulfillHyperInstant(_sourceChainID: BigNumberish, _targets: string[], _data: BytesLike[], _expiryTime: BigNumberish, _nonce: BytesLike, _claimant: string, _expectedHash: BytesLike, _prover: string, overrides?: PayableOverrides & {
            from?: string;
        }): Promise<BigNumber>;
        inbox(overrides?: CallOverrides): Promise<BigNumber>;
        isTransfer(_data: BytesLike, overrides?: CallOverrides): Promise<BigNumber>;
        owner(overrides?: CallOverrides): Promise<BigNumber>;
        renounceOwnership(overrides?: Overrides & {
            from?: string;
        }): Promise<BigNumber>;
        transferOwnership(newOwner: string, overrides?: Overrides & {
            from?: string;
        }): Promise<BigNumber>;
    };
    populateTransaction: {
        fetchFee(_sourceChainID: BigNumberish, _hashes: BytesLike[], _claimants: string[], _prover: string, overrides?: CallOverrides): Promise<PopulatedTransaction>;
        fulfillHyperInstant(_sourceChainID: BigNumberish, _targets: string[], _data: BytesLike[], _expiryTime: BigNumberish, _nonce: BytesLike, _claimant: string, _expectedHash: BytesLike, _prover: string, overrides?: PayableOverrides & {
            from?: string;
        }): Promise<PopulatedTransaction>;
        inbox(overrides?: CallOverrides): Promise<PopulatedTransaction>;
        isTransfer(_data: BytesLike, overrides?: CallOverrides): Promise<PopulatedTransaction>;
        owner(overrides?: CallOverrides): Promise<PopulatedTransaction>;
        renounceOwnership(overrides?: Overrides & {
            from?: string;
        }): Promise<PopulatedTransaction>;
        transferOwnership(newOwner: string, overrides?: Overrides & {
            from?: string;
        }): Promise<PopulatedTransaction>;
    };
}
//# sourceMappingURL=EcoAdapter.d.ts.map