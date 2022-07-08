import React from "react";
import Nav from "../../components/nav/Nav";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";


const Booking = () => {
  const {
    shitReducer: { selectedShits },
  } = useSelector((state) => state);

  // current Movie
  const currentMovie = selectedShits[0]?.selectedMovie;

  // Shit number
  const shitNumber = selectedShits?.map((each) => each.selectedShit.shitNumber);

  // Shit side
  const shitSide = [...new Set(selectedShits?.map((each) => each.shitSide))];
  // User name
  const userName = [...new Set(selectedShits?.map((each) => each.name))];

  // Total Price
  const ticketPrice = selectedShits
    .map((each) => (each.shitSide === "X" ? 100 : 80))
    .reduce((sum, price) => sum + price, 0);

  // Add GST to total Prices
  const gst = (ticketPrice * 30) / 100;

  //  Total Price
  const totalPrice = gst + ticketPrice;

  return (
    <>
      <Nav />

      {currentMovie && (
        <main className="p-6 flex justify-center">
          <div className="billing-card w-billing-card border-2 ">
            <header className="movies-details flex">
              <div className="details p-4">
                <ul>
                  <li>
                    <b>Movie Title: </b> {currentMovie?.title}
                  </li>
                  <li>
                    <b>Shit Number: </b>{" "}
                    {shitNumber.map((n) => (
                      <span> | {n} | </span>
                    ))}{" "}
                  </li>
                  <li>
                    <b>Shit Side: </b>{" "}
                    {shitSide.map((n) => (
                      <span> | {n} | </span>
                    ))}{" "}
                  </li>

                  <li>
                    <b>Name: </b> {[...userName]}
                  </li>

                  <li>
                    <b>Total Price: </b> {totalPrice} Including GST {gst} /-
                  </li>
                </ul>
              </div>
              <div className="ticket-img flex justify-center items-center w-48 h-48">
                <img
                  className="w-full"
                  src={
                    "https://res.cloudinary.com/dhqxln7zi/image/upload/v1657283987/1_gi9fnt.png"
                  }
                  alt="ticket"
                />
              </div>
            </header>

            <div className="btn-container text-center mt-8 mb-4">
              <Link to="/" className="btn-booking bg-[#0662b3] px-6 py-2 rounded-sm text-[#fff] hover:bg-[#0662b6]">
                Home
              </Link>
            </div>
          </div>
        </main>
      )}
    </>
  );
};

export default React.memo(Booking);
