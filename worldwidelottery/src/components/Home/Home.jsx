import React, { useState, useEffect } from "react";
import "./Home.scss";
import { useDispatch, useSelector } from "react-redux";
import {
  getUser,
  groupWinners,
} from "../../store/actions/fetchRandomUser.action";
import User from "../User/User";

function Home() {
  const dispatch = useDispatch();
  const [winnerGame, setWinnerGame] = useState(false);
  const [arrayOfWinners, setArrayOfWinners] = useState([]);

  const { user, userDetails, isLoading, randomNumber } = useSelector(
    (state) => state.userReducer
  );

  const fetchUser = () => {
    console.log("IS LOADING", isLoading);
    dispatch(getUser());
    console.log("user", user);
  };

  useEffect(() => {
    user.results?.map((u, i) => {
      if (randomNumber === u.registered?.age) {
        setWinnerGame(true);
        setArrayOfWinners((arrayOfWinners) => [...arrayOfWinners, user]);
        dispatch(groupWinners(u));
      } else {
        setWinnerGame(false);
        dispatch(groupWinners(u));
      }
    });
  }, [user]);

  console.log(arrayOfWinners);
  return (
    <div className="home">
      <div className="home__generatedUser">
        <button onClick={fetchUser}>Generate User</button>
        <div className="generatedUserDetails">
          {user.results?.map((u, index) => (
            <User
              key={index}
              picture={u.picture.thumbnail}
              title={u.name.title}
              firstName={u.name.first}
              lastName={u.name.last}
              email={u.email}
              gender={u.gender === "male" ? "M" : "F"}
              phoneNumber={u.phone}
              cell={u.cell}
              city={u.location.city}
              country={u.location.country}
              postcode={u.location.postcode}
              nationality={u.nat}
            />
          ))}
        </div>
      </div>
    </div>
  );
}

export default Home;
