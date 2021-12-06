import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { useForm } from "react-hook-form";

import MDEditor from "@uiw/react-md-editor";
import MarkdownPreview from "@uiw/react-markdown-preview";
import { generateAgreement } from "../utils/generateAgreement";

function CreatePage() {
  const [preview, setPreview] = useState(false);
  const [previewText, setPreviewText] = useState(null);

  const {
    register,
    formState: { errors },
    setValue,
    watch,
    handleSubmit,
  } = useForm();

  const onSubmit = (data) => {
    const generated = generateAgreement(data);
    console.log(generated);
    setPreviewText(generated);
    setPreview(true);
  };

  return (
    <div className="flex flex-col items-center">
      <form
        onSubmit={handleSubmit(onSubmit)}
        className="w-5/6 flex flex-col gap-4 mbs-8"
      >
        <h1 className="text-xl font-bold mlb-4">Create Agreement Page</h1>

        <label className="font-semibold" htmlFor="initiator-address">
          Agreement Initiator
        </label>
        <input
          {...register("initiator", {
            required: true,
            maxLength: 42,
            minLength: 42,
            pattern: "/^0x[a-fA-F0-9]{40}$/",
          })}
          className="p-2"
        />
        {errors.initiator?.type === "required" &&
          "Initiator Address is required"}
        {errors.initiator?.type === ("minLength" || "maxLength" || "pattern") &&
          "Make sure it is a correct address"}

        <label className="font-semibold" htmlFor="acceptor-address">
          Agreement Acceptor
        </label>
        <input
          {...register("acceptor", {
            required: true,
            maxLength: 42,
            minLength: 42,
          })}
          className="p-2"
        />
        {errors.acceptor?.type === "required" && "Acceptor Address is required"}
        {errors.acceptor?.type === ("minLength" || "maxLength" || "pattern") &&
          "Make sure it is a correct address"}

        <label className="font-semibold" htmlFor="agreement-title">
          Agreement title
        </label>
        <input {...register("title", { required: true })} className="p-2" />
        {errors.title?.type === "required" && "Title is required"}

        <label className="font-semibold" htmlFor="agreement-text">
          Agreement Text
        </label>
        <MDEditor
          {...register("markdown", { required: true })}
          id="agreement-text"
          value={watch("markdown")}
          onChange={(value) => {
            setValue("markdown", value);
          }}
        />
        {errors.markdown?.type === "required" && "Agreement text is required"}

        <button className="bg-black w-max px-8 py-2 font-semibold">
          Create Agreement
        </button>

        <Link to="/" className="flex items-center gap-2">
          <i className="material-icons text-base">arrow_back</i>
          Go Back to Homepage
        </Link>
      </form>

      {preview && (
        <div className="fixed w-full h-full flex justify-center bg-opacity-90">
          <div
            onClick={() => {
              setPreview(false);
            }}
            className="absolute -z-10 bg-black w-full h-full bg-opacity-90"
          />
          <div className="flex flex-col z-10 mlb-8 w-5/6">
            <div className="flex justify-between">
              <h1 className="text-4xl font-bold">Agreement Preview</h1>
              <button
                onClick={() => {
                  const file = makeFileObject(previewText);
                  storeFiles([file]);
                }}
                className="bg-white text-black px-4"
              >
                Write on blockchain
              </button>
            </div>
            <div className="p-4 mlb-8 bg-white text-black w-full">
              <MarkdownPreview source={previewText} />
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default CreatePage;
