import React, { useEffect, useState } from "react";
import { useMoralis } from "react-moralis";
import { Link } from "react-router-dom";

import config from "../config";

import * as Icons from "../assets/icons.export";

export default function NavBar() {
  const {
    authenticate,
    isAuthenticated,
    isWeb3Enabled,
    enableWeb3,
    user,
    logout,
  } = useMoralis();

  const [drawerOpen, setDrawerOpen] = useState(false);

  const unlockMetamask = () => {
    enableWeb3({
      onSuccess: () => {
        console.log(`successfully enabled`);
      },
      onError: (error) => {
        console.log({ error });
      },
    });
  };

  useEffect(() => {
    unlockMetamask();
  }, []);

  const loginUser = () => {
    if (isWeb3Enabled) {
      authenticate();
    } else {
      alert(`Make sure your metamask wallet is unlocked and web3 is enabled`);
    }
  };

  return (
    <nav className="h-20 bg-black flex justify-center z-10">
      <div className="w-5/6 flex items-center justify-between">
        <Link to="/" className="flex items-center gap-4">
          <img src={Icons.Logos.Logo} className="h-12 w-12" alt="" />
          <h1 className="text-xl font-bold">Chain Agreement</h1>
        </Link>

        <button
          className="md:hidden"
          onClick={() => {
            setDrawerOpen((currentState) => !currentState);
          }}
        >
          <i className="material-icons">menu</i>
        </button>

        <div
          className={`absolute z-10 ${
            drawerOpen ? "w-full" : "w-0"
          } h-full top-0 right-0`}
        >
          <div
            onClick={() => {
              setDrawerOpen((currentState) => !currentState);
            }}
            className="absolute w-full h-full bg-black bg-opacity-60"
          />

          <div
            className={
              `absolute lg:hidden right-0 top-0 h-full  transition-all duration-500 bg-black gap-4 ` +
              `${drawerOpen ? "w-3/4 max-w-xs" : "w-0 overflow-hidden"}`
            }
          >
            <div className="flex flex-col items-start">
              {user !== undefined && user !== null ? (
                <div className="flex flex-col items-start gap-4 md:items-center px-8 mt-8">
                  <span>{user?.getUsername()}</span>
                  <button
                    onClick={() => {
                      logout();
                    }}
                    className="text-base text-red-500 border p-2 border-red-400"
                  >
                    Logout
                  </button>
                </div>
              ) : (
                <button
                  onClick={() => {
                    loginUser();
                  }}
                  className="rounded-lg px-8 mt-8 text-base"
                >
                  Connect with metamask
                </button>
              )}
              <Link className="underline px-8 my-8" to="/about">
                More Information
              </Link>
              <div className="">
                <a
                  className="underline px-8 my-8"
                  href="https://github.com/gat786/chainagreement"
                >
                  Github
                </a>
              </div>
            </div>
          </div>
        </div>

        <ul className="hidden md:flex items-center text-base gap-4 mie-8">
          {user !== undefined && user !== null ? (
            <div className="flex gap-4 items-center">
              <span>{user?.getUsername()}</span>
              <button
                onClick={() => {
                  logout();
                }}
                className="text-base text-red-500 border p-2 border-red-400"
              >
                Logout
              </button>
            </div>
          ) : (
            <button
              onClick={() => {
                loginUser();
              }}
              className="text-base bg-gray-700 px-4 py-2 rounded-lg"
            >
              Connect with metamask
            </button>
          )}
          <Link to="/about">More Information</Link>
          <a href="https://github.com/gat786/chainagreement">Github</a>
        </ul>
      </div>
    </nav>
  );
}
