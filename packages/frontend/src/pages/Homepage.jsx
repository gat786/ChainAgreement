import logo from '../logo.svg';
import '../App.css';

import {Link} from "react-router-dom";

function Homepage() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 items-center h-screen w-screen">
      <Link to="create" className="text-2xl hover-scale w-max m-auto cursor-pointer">Create</Link>
      <Link to="view" className="text-2xl hover-scale w-max m-auto cursor-pointer">View</Link>
    </div>
  );
}

export default Homepage;
