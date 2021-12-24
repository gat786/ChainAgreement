import React from "react";
import { Link } from "react-router-dom";

import { useForm } from "react-hook-form";
import NavBar from "../components/NavBar.tsx";

import * as ChainFunctions from "../utils/contract";
import ContractDetails from "../contract-details";

import { useEffect } from "react/cjs/react.development";
import { useMoralis, useWeb3ExecuteFunction } from "react-moralis";

function ViewPage() {
  const {
    register,
    formState: { errors },
    getValues,
    setValue,
    watch,
    handleSubmit,
  } = useForm();

  const { data, error, fetch, isFetching, isLoading } =
    useWeb3ExecuteFunction();

  const { isAuthenticated } = useMoralis();

  const onSubmit = async (values) => {
    console.log(`fetching contract data`);
    const contentId = values?.contentId;

    await fetch({
      params: {
        abi: ContractDetails.abi,
        contractAddress: ContractDetails.address,
        functionName: "getAgreement",
        params: {
          _content_id: contentId,
        },
      },
      onSuccess: (results) => {
        console.log(`query yielded ${JSON.stringify(results)}`);
      },
      onError: (errors) => {
        console.log(`errors occured ${JSON.stringify(errors)}`);
      },
      onComplete: () => {
        console.log(`Fetching completed`);
      },
    });
    // ChainFunctions.readFromChain();
  };

  const displayAlert = () => {
    if (!isAuthenticated) {
      alert("Please Connect with Metamask before using the application");
    }
  };

  return (
    <div>
      {(isFetching || isLoading) && (
        <div className="fixed top-0 w-full h-full bg-black bg-opacity-70 flex items-center justify-center">
          Loading...
        </div>
      )}
      <NavBar />
      <div className="flex flex-col items-center">
        <form
          onSubmit={handleSubmit(onSubmit)}
          className="w-5/6 flex flex-col gap-4 mbs-8"
        >
          <h1 className="text-xl font-bold mlb-4">View Agreement Page</h1>

          <label htmlFor="contentId">Enter Agreement ID to view</label>
          <input
            {...register("contentId", {
              required: true,
              minLength: 59,
              maxLength: 59,
            })}
            className="p-2"
          />
          {errors.contentId?.type === "required" && "ContentId is required"}
          {errors.contentId?.type === ("minLength" || "maxLength") &&
            "make sure it is a correct IPFS Content Id"}
          <button className="w-max px-4 py-2 text-lg bg-black font-semibold">
            View Agreement
          </button>
          <Link to="/" className="flex items-center gap-2">
            <i className="material-icons text-base">arrow_back</i>
            Go Back to Homepage
          </Link>
        </form>
      </div>
    </div>
  );
}

export default ViewPage;
