import React, { useState } from 'react'
import { Link } from 'react-router-dom';
import MDEditor from "@uiw/react-md-editor";

function CreatePage() {
  const [agreementText, setAgreementText] = useState("Sample Agreement");
  return (
    <div className="flex flex-col items-center">
      <div className="w-5/6 flex flex-col gap-4 mbs-8">
        <h1 className="text-xl font-bold mlb-4">Create Agreement Page</h1>

        <label className="font-semibold" htmlFor="initiator-address">Agreement Initiator</label>
        <input 
          type="text"
          name=""
          id=""
          className="p-2" />

        <label className="font-semibold" htmlFor="acceptor-address">Agreement Acceptor</label>
        <input type="text" name="" id="" className="p-2" />

        <label className="font-semibold" htmlFor="agreement-title">Agreement title</label>
        <input type="text" name="" id="" className="p-2" />

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
      </div>
    </div>
  )
}

export default CreatePage;