import React, { useState } from "react";
import { useMoralis } from "react-moralis";
import { Link } from "react-router-dom";

import * as Icons from "../assets/icons.export";

export default function NavBar() {
  const { authenticate, isAuthenticated, user, logout } = useMoralis();

  const [drawerOpen, setDrawerOpen] = useState<boolean>(false);

  return (
    <nav className="h-20 bg-black flex justify-center">
      <div className="w-11/12 flex items-center justify-between">
        <Link to="/" className="flex items-center gap-4 mis-8">
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
          className={`absolute ${
            drawerOpen ? "w-full delay-300" : "w-0"
          } duration-300 h-full top-0 right-0`}
        >
          <div
            onClick={() => {
              setDrawerOpen((currentState) => !currentState);
            }}
            className="absolute w-full h-full bg-black bg-opacity-60"
          />
          <div
            className={
              `absolute right-0 top-0 h-full bg-black gap-4 ` +
              `${
                drawerOpen ? "w-3/4 max-w-xs" : "w-0"
              } transition-all duration-300 delay-100 pli-8`
            }
          >
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
                  authenticate();
                }}
                className="text-base bg-gray-700 px-4 py-2 rounded-lg"
              >
                Connect with metamask
              </button>
            )}
            <Link to="/about">More Information</Link>
            <a href="https://github.com/gat786/chainagreement">Github</a>
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
                authenticate();
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
