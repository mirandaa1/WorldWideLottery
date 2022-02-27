import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import "./Winners.scss";
import WinnerUser from "../WinnerUser/WinnerUser";
function Winners() {
  const dispatch = useDispatch();

  const { winners } = useSelector((state) => state.userReducer);

  useEffect(() => {
    console.log("winners", winners);
  }, []);

  return (
    <div className="winners">
      <div className="winners__container">
        <h2>Winners</h2>
        {/*  */}
        {winners.map((winners, index) => (
          <WinnerUser
            picture={winners?.picture}
            firstName={winners?.fullName}
            gender={winners?.gender}
            email={winners?.email}
            age={winners?.age}
            phoneNumber={winners?.phone}
            cell={winners?.cell}
            city={winners?.location?.city}
            country={winners?.location?.country}
            postcode={winners?.location?.postcode}
            nationality={winners?.nat}
          />
        ))}

        <div className="winners__container-sort">
          <button>Sort</button>
        </div>
      </div>
    </div>
  );
}
export default Winners;
