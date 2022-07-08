import React from "react";
import { Link } from "react-router-dom";

const Loading = () => {
  return (
    <div className="loading flex flex-col justify-center items-center my-4">
      <img
        className="w-40 h-40 rounded-full opacity-0.3"
        src={
          "https://res.cloudinary.com/dhqxln7zi/image/upload/v1650990392/Loading_icon_stoagp.gif"
        }
        alt="gif"
      />
      <h1 className="mt-4 mb-4">Please! Book a Movie Ticket.</h1>

      <div className="btn-container text-center mt-8 mb-4">
        <Link
          to="/"
          className="btn-booking bg-[#0662b3] px-6 py-2 rounded-sm text-[#fff] hover:bg-[#0662b6]"
        >
          Home
        </Link>
      </div>
    </div>
  );
};

export default Loading;
