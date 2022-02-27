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
        {winners.map((w, index) => (
          <WinnerUser
            key={index}
            picture={w.picture.thumbnail}
            title={w.name.title}
            firstName={w.name.first}
            lastName={w.name.last}
            email={w.email}
            gender={w.gender === "male" ? "M" : "F"}
            phoneNumber={w.phone}
            cell={w.cell}
            city={w.location.city}
            country={w.location.country}
            postcode={w.location.postcode}
            nationality={w.nat}
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
