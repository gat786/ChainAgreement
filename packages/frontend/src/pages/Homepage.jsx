import { useEffect, useState } from "react";
import logo from "../logo.svg";
import "../App.css";
import * as styles from "./pages.module.css";

import { Link } from "react-router-dom";
import { useMoralis } from "react-moralis";
import NavBar from "../components/NavBar";

function Homepage() {
  return (
    <div>
      <NavBar />
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
