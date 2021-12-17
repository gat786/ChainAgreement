import Web3 from "web3";
import contractsJson from "../contract-details";

interface AgreementInfo {
  initiatorAddress: string;
  acceptorAddress: string;
  title: string;
  contentId: string;
}

const web3 = new Web3(Web3.givenProvider || "ws://localhost:8545");
let myAccount = undefined;

function updateMyAccount() {
  web3.eth
    .getAccounts()
    .then((accounts) => {
      myAccount = accounts[0];
      console.log(`${myAccount} selected for all future transactions`);
    })
    .catch((error) => {
      console.log(`loading account failed with error ${error}`);
    });
}

async function enableEthereum() {
  if ((window as any).ethereum) {
    //@ts-ignore
    ethereum.enable().then(() => {
      updateMyAccount();
    });
  }
}
enableEthereum();

const contract = new web3.eth.Contract(
  contractsJson.abi as any,
  contractsJson.address
);

// @ts-ignore

export const writeToChain = async (payload: AgreementInfo) => {
  const contract = new web3.eth.Contract(
    contractsJson.abi as any,
    contractsJson.address,
    {
      from: myAccount,
    }
  );
  //   console.log(contract);
  //   contract.methods.createAgreement(
  //     payload.initiatorAddress,
  //     payload.acceptorAddress,
  //     payload.title,
  //     payload.contentId,
  //   );
  // const number = await provider.getBlockNumber();
  console.log({
    initiatorAddress: payload.initiatorAddress,
    acceptorAddress: payload.acceptorAddress,
    title: payload.title,
    contentId: payload.contentId,
  });

  contract.methods
    .createAgreement(
      payload.initiatorAddress,
      payload.acceptorAddress,
      payload.title,
      payload.contentId
    )
    .send(myAccount)
    .on("transactionHash", (hash) => {
      console.log(`hash created ${hash}`);
    })
    .on("receipt", (receipt) => {
      console.log(`receipt available ${JSON.stringify(receipt)}`);
    })
    .on("confirmation", (number, receipt) => {
      console.log(`received ${number} confirmation with ${receipt} as receipt`);
    })
    .on("error", (error) => {
      console.log(
        `error occured while creating transaction ${error} as receipt`
      );
    });
};
