import React from "react";
import { Link } from "react-router-dom";

import { useForm } from "react-hook-form";
import NavBar from "../components/NavBar.tsx";

import * as ChainFunctions from "../utils/contract";

function ViewPage() {
  const {
    register,
    formState: { errors },
    getValues,
    setValue,
    watch,
    handleSubmit,
  } = useForm();

  const onSubmit = (values) => {
    console.log(values);
    // ChainFunctions.readFromChain();
  };

  return (
    <div>
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
