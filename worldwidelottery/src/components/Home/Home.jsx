import React, { useState, useEffect } from "react";
import "./Home.scss";
import { useDispatch, useSelector } from "react-redux";
import {
  clearSession,
  getUser,
  groupWinners,
  sessionPlayers,
} from "../../store/actions/fetchRandomUser.action";
import User from "../User/User";

function Home() {
  const dispatch = useDispatch();
  const [winnerGame, setWinnerGame] = useState(false);

  const { user, sessionPlayersArray, isLoading, randomNumber } = useSelector(
    (state) => state.userReducer
  );

  const fetchUser = () => {
    dispatch(getUser());
  };

  const clearSessionFun = () => {
    dispatch(clearSession());
    window.location.reload();
  };

  useEffect(() => {
    if (randomNumber === null) return;
    let random = Math.floor(Math.random() * 10) + 1;
    if (randomNumber === user?.age) {
      setWinnerGame(true);
      dispatch(groupWinners({ ...user, isWinner: true }));
    } else {
      setWinnerGame(false);
    }
  }, [randomNumber]);

  return (
    <div className="home">
      <div className="home__generatedUser">
        <button onClick={(e) => fetchUser()}>Generate User</button>
        <div className="generatedUserDetails">
          {/* {user.results?.map((u, index) => ( */}
          {user === {} ? (
            "Empty User"
          ) : (
            <User
              picture={user?.picture}
              firstName={user?.fullName}
              gender={user?.gender}
              email={user?.email}
              age={user?.age}
              phoneNumber={user?.phone}
              cell={user?.cell}
              city={user?.location?.city}
              country={user?.location?.country}
              postcode={user?.location?.postcode}
              nationality={user?.nat}
            />
          )}
        </div>
        <button onClick={clearSessionFun}>Clear Section</button>
      </div>
    </div>
  );
}

export default Home;
