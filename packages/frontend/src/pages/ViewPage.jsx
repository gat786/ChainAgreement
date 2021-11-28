import React from 'react'
import { Link } from 'react-router-dom'

function ViewPage() {
  return (
    <div className="flex flex-col items-center">
      <div className="w-5/6 flex flex-col gap-4 mbs-8">
        <h1 className="text-xl font-bold mlb-4">
          View Agreement Page
        </h1>

        <label htmlFor="form-id">Enter Agreement ID to view</label>
        <input type="text" className="p-2" name="" id="form-id" />
        <button className="w-max px-4 py-2 bg-black font-semibold">View Agreement</button>
        <Link to="/" className="flex items-center gap-2">
          <i className="material-icons text-base">arrow_back</i>
          Go Back to Homepage
        </Link>
      </div>
    </div>
  )
}

export default ViewPage
