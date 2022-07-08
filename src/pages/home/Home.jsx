import React from "react";
import Card from "../../components/movieCard/Card";
import Nav from "../../components/nav/Nav";
import { movies } from "../../data/movies";

const Home = () => {
  return (
    <>
      <Nav />
      <main className="p-6">
        <div className="movie-card-wrapper flex flex-wrap gap-2 justify-center">
          {movies.allMovies.map((eachMovie) => (
            <Card eachMovie={eachMovie} key={eachMovie.id} />
          ))}
        </div>
      </main>
    </>
  );
};

export default React.memo(Home);
