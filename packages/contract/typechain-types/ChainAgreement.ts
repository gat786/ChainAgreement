/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */
import {
  BaseContract,
  BigNumber,
  BytesLike,
  CallOverrides,
  ContractTransaction,
  Overrides,
  PopulatedTransaction,
  Signer,
  utils,
} from "ethers";
import { FunctionFragment, Result } from "@ethersproject/abi";
import { Listener, Provider } from "@ethersproject/providers";
import { TypedEventFilter, TypedEvent, TypedListener, OnEvent } from "./common";

export type AgreementStruct = {
  initiator: string;
  acceptor: string;
  title: string;
  content_id: string;
  isCreated: boolean;
};

export type AgreementStructOutput = [
  string,
  string,
  string,
  string,
  boolean
] & {
  initiator: string;
  acceptor: string;
  title: string;
  content_id: string;
  isCreated: boolean;
};

export interface ChainAgreementInterface extends utils.Interface {
  functions: {
    "createAgreement(address,address,string,string)": FunctionFragment;
    "getAgreement(string)": FunctionFragment;
  };

  encodeFunctionData(
    functionFragment: "createAgreement",
    values: [string, string, string, string]
  ): string;
  encodeFunctionData(
    functionFragment: "getAgreement",
    values: [string]
  ): string;

  decodeFunctionResult(
    functionFragment: "createAgreement",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "getAgreement",
    data: BytesLike
  ): Result;

  events: {};
}

export interface ChainAgreement extends BaseContract {
  connect(signerOrProvider: Signer | Provider | string): this;
  attach(addressOrName: string): this;
  deployed(): Promise<this>;

  interface: ChainAgreementInterface;

  queryFilter<TEvent extends TypedEvent>(
    event: TypedEventFilter<TEvent>,
    fromBlockOrBlockhash?: string | number | undefined,
    toBlock?: string | number | undefined
  ): Promise<Array<TEvent>>;

  listeners<TEvent extends TypedEvent>(
    eventFilter?: TypedEventFilter<TEvent>
  ): Array<TypedListener<TEvent>>;
  listeners(eventName?: string): Array<Listener>;
  removeAllListeners<TEvent extends TypedEvent>(
    eventFilter: TypedEventFilter<TEvent>
  ): this;
  removeAllListeners(eventName?: string): this;
  off: OnEvent<this>;
  on: OnEvent<this>;
  once: OnEvent<this>;
  removeListener: OnEvent<this>;

  functions: {
    createAgreement(
      _initiator: string,
      _acceptor: string,
      _title: string,
      _content_id: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    getAgreement(
      _content_id: string,
      overrides?: CallOverrides
    ): Promise<[AgreementStructOutput]>;
  };

  createAgreement(
    _initiator: string,
    _acceptor: string,
    _title: string,
    _content_id: string,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  getAgreement(
    _content_id: string,
    overrides?: CallOverrides
  ): Promise<AgreementStructOutput>;

  callStatic: {
    createAgreement(
      _initiator: string,
      _acceptor: string,
      _title: string,
      _content_id: string,
      overrides?: CallOverrides
    ): Promise<AgreementStructOutput>;

    getAgreement(
      _content_id: string,
      overrides?: CallOverrides
    ): Promise<AgreementStructOutput>;
  };

  filters: {};

  estimateGas: {
    createAgreement(
      _initiator: string,
      _acceptor: string,
      _title: string,
      _content_id: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    getAgreement(
      _content_id: string,
      overrides?: CallOverrides
    ): Promise<BigNumber>;
  };

  populateTransaction: {
    createAgreement(
      _initiator: string,
      _acceptor: string,
      _title: string,
      _content_id: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    getAgreement(
      _content_id: string,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;
  };
}
