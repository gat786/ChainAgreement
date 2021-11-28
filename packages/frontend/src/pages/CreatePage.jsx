import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom';
import { useForm } from "react-hook-form";

import MDEditor from "@uiw/react-md-editor";
const Moralis = require("moralis");

function CreatePage() {
  const [agreementText, setAgreementText] = useState("Sample Agreement");

  const { register, formState: {errors}, handleSubmit } = useForm();

  const onSubmit = (data) => {
    console.log(data);
  }

  return (
    <div className="flex flex-col items-center">
      <form onSubmit={handleSubmit(onSubmit) } className="w-5/6 flex flex-col gap-4 mbs-8">
        <h1 className="text-xl font-bold mlb-4">Create Agreement Page</h1>

        <label className="font-semibold" htmlFor="initiator-address">Agreement Initiator</label>
        <input
          {...register("initiator", {required: true, maxLength: 42, minLength: 42,pattern:"/^0x[a-fA-F0-9]{40}$/"})}
          className="p-2" />
        {errors.initiator?.type === "required" && "Initiator Address is required"}
        {errors.initiator?.type === ("minLength" || "maxLength" || "pattern") && "Make sure it is a correct address"}

        <label className="font-semibold" htmlFor="acceptor-address">Agreement Acceptor</label>
        <input 
          {...register("acceptor", {required: true, maxLength: 42, minLength: 42})}
          className="p-2" />
        {errors.acceptor?.type === "required" && "Acceptor Address is required"}
        {errors.acceptor?.type === ("minLength" || "maxLength" || "pattern") && "Make sure it is a correct address"}

        <label className="font-semibold" htmlFor="agreement-title">Agreement title</label>
        <input
          {...register("title", {required: true})}
          className="p-2" />
        {errors.title?.type === "required" && "Title is required"}

        <label className="font-semibold" htmlFor="agreement-text">
          Agreement Text
        </label>
        <MDEditor
          id="agreement-text"
          value={agreementText}
          onChange={setAgreementText}
        />


        <button className="bg-black w-max px-8 py-2 font-semibold">
          Create Agreement
        </button>

        <Link to="/" className="flex items-center gap-2">
          <i className="material-icons text-base">arrow_back</i>
          Go Back to Homepage
        </Link>
      </form>
    </div>
  )
}

export default CreatePage;