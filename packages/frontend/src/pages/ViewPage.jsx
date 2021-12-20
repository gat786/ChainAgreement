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

  return (
    <div>
      <NavBar />
      <div className="flex flex-col items-center">
        <form
          onSubmit={(event) => {
            event.preventDefault();
            const values = getValues();
            console.log(values);
            // ChainFunctions.readFromChain();
          }}
          className="w-5/6 flex flex-col gap-4 mbs-8"
        >
          <h1 className="text-xl font-bold mlb-4">View Agreement Page</h1>

          <label htmlFor="contentId">Enter Agreement ID to view</label>
          <input
            {...register("contentId", {
              required: true,
            })}
            className="p-2"
          />
          {errors.contentId?.type === "required" && "ContentId is required"}
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
