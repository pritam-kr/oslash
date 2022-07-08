import React from "react";
import Nav from "../../components/nav/Nav";
import { useDispatch, useSelector } from "react-redux";

const Booking = () => {
  const {
    shitReducer: { selectedShits },
  } = useSelector((state) => state);

  // current Movie
  const currentMovie = selectedShits[0].selectedMovie;

  return (
    <>
      <Nav />
      <main className="p-6 flex justify-center">
        <div className="billing-card w-billing-card border-2 ">
          <header className="movies-details flex">
            <div className="details"></div>
            <div className="ticket-img flex justify-center items-center">
              <img
                className="w-full"
                src={
                  "https://res.cloudinary.com/dhqxln7zi/image/upload/v1657283987/1_gi9fnt.png"
                }
                alt="ticket"
              />
            </div>
          </header>

          <div className="payment-details"></div>
        </div>
      </main>
    </>
  );
};

export default React.memo(Booking);
