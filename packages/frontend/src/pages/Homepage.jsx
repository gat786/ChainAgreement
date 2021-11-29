import { useEffect, useState } from "react";
import logo from '../logo.svg';
import '../App.css';

import { Link } from "react-router-dom";
const Moralis = require('moralis');

function Homepage() {

  const serverUrl = process.env.REACT_APP_MORALIS_SERVER_URL;
  const appId = process.env.REACT_APP_MORALIS_APPID;

  const [user, setUser] = useState(null);

  useEffect(() => {
    Moralis.start({ serverUrl, appId }).then(() => {
      console.log(`Moralis has started`);
    }).catch((err) => {
      console.log(`${err} occured`);
    })
    if (!checkLogin()) {
      Login();
    }
    // Login();
  }, []);

  // checkLogin();

  const checkLogin = () => {
    const currentUser = Moralis.User.current();
    console.log(`current user is ${JSON.stringify(currentUser)}`);
    setUser(currentUser);
    if (currentUser) {
      return true;
    }
    return false;
  }

  const Login = () => {
    Moralis.authenticate().then((user) => {
      console.log(`${JSON.stringify(user)} has logged in`);
    })
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
