import { useEffect, useState } from "react";
import logo from "../logo.svg";
import "../App.css";
import styles from "./pages.module.css";

import { updateMyAccount } from "../utils/contract";

import { Link } from "react-router-dom";

import * as Icons from "../assets/icons.export";

function Homepage() {
  return (
    <div>
      <nav className="h-20 bg-black flex justify-center">
        <div className="w-11/12 flex items-center justify-between">
          <span className="flex items-center gap-4 mis-8">
            <img src={Icons.Logos.Logo} className="h-12 w-12" alt="" />
            <h1 className="text-xl font-bold">Chain Agreement</h1>
          </span>

          <ul className="flex items-center text-base gap-4 mie-8">
            <button
              onClick={updateMyAccount}
              className="text-base bg-gray-700 px-4 py-2 rounded-lg"
            >
              Connect with metamask
            </button>
            <Link to="about">More Information</Link>
            <a href="https://github.com/gat786/chainagreement">Github</a>
          </ul>
        </div>
      </nav>
      <div className="flex justify-center">
        <div className="flex w-full md:w-11/12 mlb-8 gap-8">
          <Link to="create" className={`${styles.optionsCard}`}>
            <i className="material-icons text-3xl">create</i>
            <div className="">Create</div>
          </Link>
          <Link to="view" className={`${styles.optionsCard}`}>
            <i className="material-icons text-3xl">visibility</i>
            <div className="">View</div>
          </Link>
        </div>
      </div>
    </div>
  );
}

export default Homepage;
