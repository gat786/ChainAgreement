/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */
import { Signer, utils, Contract, ContractFactory, Overrides } from "ethers";
import { Provider, TransactionRequest } from "@ethersproject/providers";
import type {
  ChainAgreement,
  ChainAgreementInterface,
} from "../ChainAgreement";

const _abi = [
  {
    inputs: [],
    stateMutability: "nonpayable",
    type: "constructor",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "_initiator",
        type: "address",
      },
      {
        internalType: "address",
        name: "_acceptor",
        type: "address",
      },
      {
        internalType: "string",
        name: "_title",
        type: "string",
      },
      {
        internalType: "string",
        name: "_content_id",
        type: "string",
      },
    ],
    name: "createAgreement",
    outputs: [
      {
        components: [
          {
            internalType: "address",
            name: "initiator",
            type: "address",
          },
          {
            internalType: "address",
            name: "acceptor",
            type: "address",
          },
          {
            internalType: "string",
            name: "title",
            type: "string",
          },
          {
            internalType: "string",
            name: "content_id",
            type: "string",
          },
        ],
        internalType: "struct ChainAgreement.Agreement",
        name: "",
        type: "tuple",
      },
    ],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "string",
        name: "_content_id",
        type: "string",
      },
    ],
    name: "getAgreement",
    outputs: [
      {
        components: [
          {
            internalType: "address",
            name: "initiator",
            type: "address",
          },
          {
            internalType: "address",
            name: "acceptor",
            type: "address",
          },
          {
            internalType: "string",
            name: "title",
            type: "string",
          },
          {
            internalType: "string",
            name: "content_id",
            type: "string",
          },
        ],
        internalType: "struct ChainAgreement.Agreement",
        name: "",
        type: "tuple",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
];

const _bytecode =
  "0x608060405234801561001057600080fd5b50610966806100206000396000f3fe608060405234801561001057600080fd5b50600436106100365760003560e01c8063c0b817401461003b578063cdd82d1d1461006b575b600080fd5b61005560048036038101906100509190610566565b61009b565b6040516100629190610734565b60405180910390f35b610085600480360381019061008091906105f9565b6101ea565b6040516100929190610734565b60405180910390f35b6100a36103f2565b600060405180608001604052808773ffffffffffffffffffffffffffffffffffffffff1681526020018673ffffffffffffffffffffffffffffffffffffffff16815260200185815260200184815250905080600084604051610105919061071d565b908152602001604051809103902060008201518160000160006101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff16021790555060208201518160010160006101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff16021790555060408201518160020190805190602001906101bd929190610446565b5060608201518160030190805190602001906101da929190610446565b5090505080915050949350505050565b6101f26103f2565b600082604051610202919061071d565b90815260200160405180910390206040518060800160405290816000820160009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020016001820160009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020016002820180546102d790610847565b80601f016020809104026020016040519081016040528092919081815260200182805461030390610847565b80156103505780601f1061032557610100808354040283529160200191610350565b820191906000526020600020905b81548152906001019060200180831161033357829003601f168201915b5050505050815260200160038201805461036990610847565b80601f016020809104026020016040519081016040528092919081815260200182805461039590610847565b80156103e25780601f106103b7576101008083540402835291602001916103e2565b820191906000526020600020905b8154815290600101906020018083116103c557829003601f168201915b5050505050815250509050919050565b6040518060800160405280600073ffffffffffffffffffffffffffffffffffffffff168152602001600073ffffffffffffffffffffffffffffffffffffffff16815260200160608152602001606081525090565b82805461045290610847565b90600052602060002090601f01602090048101928261047457600085556104bb565b82601f1061048d57805160ff19168380011785556104bb565b828001600101855582156104bb579182015b828111156104ba57825182559160200191906001019061049f565b5b5090506104c891906104cc565b5090565b5b808211156104e55760008160009055506001016104cd565b5090565b60006104fc6104f78461077b565b610756565b90508281526020810184848401111561051457600080fd5b61051f848285610805565b509392505050565b60008135905061053681610919565b92915050565b600082601f83011261054d57600080fd5b813561055d8482602086016104e9565b91505092915050565b6000806000806080858703121561057c57600080fd5b600061058a87828801610527565b945050602061059b87828801610527565b935050604085013567ffffffffffffffff8111156105b857600080fd5b6105c48782880161053c565b925050606085013567ffffffffffffffff8111156105e157600080fd5b6105ed8782880161053c565b91505092959194509250565b60006020828403121561060b57600080fd5b600082013567ffffffffffffffff81111561062557600080fd5b6106318482850161053c565b91505092915050565b610643816107d3565b82525050565b6000610654826107ac565b61065e81856107b7565b935061066e818560208601610814565b61067781610908565b840191505092915050565b600061068d826107ac565b61069781856107c8565b93506106a7818560208601610814565b80840191505092915050565b60006080830160008301516106cb600086018261063a565b5060208301516106de602086018261063a565b50604083015184820360408601526106f68282610649565b915050606083015184820360608601526107108282610649565b9150508091505092915050565b60006107298284610682565b915081905092915050565b6000602082019050818103600083015261074e81846106b3565b905092915050565b6000610760610771565b905061076c8282610879565b919050565b6000604051905090565b600067ffffffffffffffff821115610796576107956108d9565b5b61079f82610908565b9050602081019050919050565b600081519050919050565b600082825260208201905092915050565b600081905092915050565b60006107de826107e5565b9050919050565b600073ffffffffffffffffffffffffffffffffffffffff82169050919050565b82818337600083830152505050565b60005b83811015610832578082015181840152602081019050610817565b83811115610841576000848401525b50505050565b6000600282049050600182168061085f57607f821691505b60208210811415610873576108726108aa565b5b50919050565b61088282610908565b810181811067ffffffffffffffff821117156108a1576108a06108d9565b5b80604052505050565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052602260045260246000fd5b7f4e487b7100000000000000000000000000000000000000000000000000000000600052604160045260246000fd5b6000601f19601f8301169050919050565b610922816107d3565b811461092d57600080fd5b5056fea2646970667358221220488f23080e051b41be41da1731979460916d24152d5c7d6a4a0c9a18694b758e64736f6c63430008040033";

type ChainAgreementConstructorParams =
  | [signer?: Signer]
  | ConstructorParameters<typeof ContractFactory>;

const isSuperArgs = (
  xs: ChainAgreementConstructorParams
): xs is ConstructorParameters<typeof ContractFactory> => xs.length > 1;

export class ChainAgreement__factory extends ContractFactory {
  constructor(...args: ChainAgreementConstructorParams) {
    if (isSuperArgs(args)) {
      super(...args);
    } else {
      super(_abi, _bytecode, args[0]);
    }
  }

  deploy(
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ChainAgreement> {
    return super.deploy(overrides || {}) as Promise<ChainAgreement>;
  }
  getDeployTransaction(
    overrides?: Overrides & { from?: string | Promise<string> }
  ): TransactionRequest {
    return super.getDeployTransaction(overrides || {});
  }
  attach(address: string): ChainAgreement {
    return super.attach(address) as ChainAgreement;
  }
  connect(signer: Signer): ChainAgreement__factory {
    return super.connect(signer) as ChainAgreement__factory;
  }
  static readonly bytecode = _bytecode;
  static readonly abi = _abi;
  static createInterface(): ChainAgreementInterface {
    return new utils.Interface(_abi) as ChainAgreementInterface;
  }
  static connect(
    address: string,
    signerOrProvider: Signer | Provider
  ): ChainAgreement {
    return new Contract(address, _abi, signerOrProvider) as ChainAgreement;
  }
}