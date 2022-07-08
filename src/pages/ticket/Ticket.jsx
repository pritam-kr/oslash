import React, { useState } from "react";
import Nav from "../../components/nav/Nav";
import { movies } from "../../data/movies";
import { useParams, useNavigate } from "react-router-dom";
import Poster from "../../components/moviePoster/Poster";
import { allShits } from "../../data/allShits";
import { useDispatch} from "react-redux";
import { selectShit } from "../../redux/actions/selectShit";
import Shit from "../../components/shit/Shit";
import Loading from "../../components/loading/Loading";

const Ticket = () => {
  const [userName, setUserName] = useState("");
  const [error, setError] = useState("");
  const { movieId } = useParams();
  const selectedMovie =
    movies.allMovies.find((eachMovie) => eachMovie.id === movieId) || "";
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const selectTicketHandler = ({ shitSide, selectedShit }) => {
    if (!userName) {
      setError("Please Enter Your Name");
    } else {
      dispatch(
        selectShit({
          selectedShit,
          shitSide,
          name: userName,
          selectedMovie: selectedMovie,
        })
      );
      setError("");
    }
  };

  const ticketHandler = () => {
    if (!userName) {
      setError("Please Enter Your Name");
    } else {
      navigate("/booking");
    }
  };
  

  return (
    <>
      <Nav />

      {!selectedMovie ? <Loading /> :  (
        <main className="p-6">
          <Poster selectedMovie={selectedMovie} />

          <div className="input-wrapper flex flex-col justify-center items-center mt-8 mb-8">
            <input
              type="text"
              placeholder="Enter Your Name"
              className="border-2 p-2 w-shit-card"
              onChange={(event) => setUserName(event.target.value)}
            />
            <p className="mt-2">{error}</p>
          </div>

          <div className="movies-shist flex justify-center mt-4 gap-3">
            {allShits.shits.map((each, i) => (
              <div key={i} className="shits border-2 w-shit-card p-2 bg-[#fff]">
                <h1 className="text-center">
                  {each.side}: {each.price} INR
                </h1>

                <Shit each={each} selectTicketHandler={selectTicketHandler} />
              </div>
            ))}
          </div>

          <div className="btn-container text-center mt-8 mb-4">
            <button
              className="btn-booking bg-[#0662b3] px-6 py-2 rounded-sm text-[#fff] hover:bg-[#0662b6]"
              onClick={() => ticketHandler()}
            >
              Book Ticket
            </button>
          </div>
        </main>
      )}
    </>
  );
};

export default React.memo(Ticket);
