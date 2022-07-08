import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { removeSelectedShit } from "../../redux/actions/removeShit";

const Shit = ({ each, selectTicketHandler }) => {
  const dispatch = useDispatch();

  const {
    shitReducer: { selectedShits },
  } = useSelector((state) => state);

  const chooseAnotherShitHandler = (ShitId) => {
    dispatch(removeSelectedShit(ShitId));
  };

  return (
    <div className="shits-wrapper flex flex-wrap justify-center mt-2 mb-2 gap-1">
      {each.chairs.map((eachChair) => {
        const isChair = selectedShits.find(
          (each) => each.selectedShit.id === eachChair.id
        );
        return (
          <>
            {isChair === undefined ? (
              <button
                key={eachChair.id}
                className="chair border-2 w-14 h-14 flex justify-center items-center cursor-pointer"
                onClick={() =>
                  selectTicketHandler({
                    shitSide: each.side,
                    selectedShit: eachChair,
                  })
                }
              >
                {eachChair.shitNumber}
              </button>
            ) : (
              <button
                onClick={() => chooseAnotherShitHandler(eachChair.id)}
                key={eachChair.id}
                className="chair border-2 w-14 h-14 flex justify-center items-center cursor-pointer bg-[#0662b3] text-[#fff]"
              >
                {eachChair.shitNumber}
              </button>
            )}
          </>
        );
      })}
    </div>
  );
};

export default React.memo(Shit);
