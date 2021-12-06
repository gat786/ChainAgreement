import { useEffect, useState } from "react";
import logo from '../logo.svg';
import '../App.css';

import { Link } from "react-router-dom";

function Homepage() {
  const [user, setUser] = useState(null);

  const Login = () => {
    // Moralis.authenticate().then((user) => {
    //   console.log(`${JSON.stringify(user)} has logged in`);
    // })
  }

  return (
    <div>
      {user !== null ?
        <div className="grid grid-cols-1 md:grid-cols-2 items-center h-screen w-screen">
          <Link to="create" className="text-2xl hover-scale w-max m-auto cursor-pointer">Create</Link>
          <Link to="view" className="text-2xl hover-scale w-max m-auto cursor-pointer">View</Link>
        </div>
        : <div className="flex flex-col gap-4 items-center justify-center mlb-8">
          <h1 className="text-2xl">
            To be able to use the app please login
          </h1>
          <button onClick={Login} className="bg-black text-xl font-semibold px-4 py-2">
            Login
          </button>
        </div>
      }
    </div>
  );
}

export default Homepage;
