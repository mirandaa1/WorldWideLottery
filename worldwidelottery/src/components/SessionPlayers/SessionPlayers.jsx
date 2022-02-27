import React from "react";
import WinnerUser from "../WinnerUser/WinnerUser";
import { useDispatch, useSelector } from "react-redux";

function SessionPlayers() {
  const { sessionPlayersArray } = useSelector((state) => state.userReducer);

  return (
    <div>
      {sessionPlayersArray.map((w, index) => (
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
    </div>
  );
}

export default SessionPlayers;
