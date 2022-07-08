import React from "react";
import { Link } from "react-router-dom";


const Nav = () => {
  return (
    <nav className="flex justify-center items-center border-b-[2px] p-4 bg-[#fff]">
      <h3 className="text-2xl"><Link to="/">oSlash Movies</Link></h3>
    </nav>
  );
};

export default React.memo(Nav);
