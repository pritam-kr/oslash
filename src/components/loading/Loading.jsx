import React from "react";

const Loading = () => {
  return (
    <div className="loading flex flex-col justify-center items-center my-4">
      <img className="w-40 h-40 rounded-full opacity-0.3"
        src={"https://assets.vogue.com/photos/5891938d58aa89a00d5446e4/master/pass/ultimate-popcorn-guide-for-oscar-movie-watching-square.gif"}
        alt="gif"
      />
      <h1 className="mt-4">Please! Book a Movie Ticket.</h1>
    </div>
  );
};

export default Loading;
