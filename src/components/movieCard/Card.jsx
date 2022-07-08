import React from "react";
import { useNavigate } from "react-router-dom";

const Card = ({ eachMovie }) => {
  const navigate = useNavigate();

  const movieHandler = () => {
    navigate(`/movie/${eachMovie.id}`);
  };

  return (
    <div
      className="movie-card relative w-128 cursor-pointer"
      onClick={() => movieHandler()}
    >
      <img
        src={eachMovie.image}
        alt="poster"
        className="object-contain w-full"
      />
      <p className="movie-title absolute bottom-0 bg-[#fff] p-3 w-full">
        {eachMovie.title}
      </p>
    </div>
  );
};

export default React.memo(Card);
