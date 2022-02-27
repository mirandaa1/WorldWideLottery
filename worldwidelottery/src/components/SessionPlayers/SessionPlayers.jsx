import React, { useEffect, useState } from "react";
import "./SessionPlayers.scss";
import WinnerUser from "../WinnerUser/WinnerUser";
import { useDispatch, useSelector } from "react-redux";
import { sessionPlayers } from "../../store/actions/fetchRandomUser.action";

function SessionPlayers() {
  const [winnerGame, setWinnerGame] = useState(false);
  const dispatch = useDispatch();
  const { user, sessionPlayersArray, randomNumber } = useSelector(
    (state) => state.userReducer
  );
  console.log(sessionPlayersArray, "sessionPlayersArray");

  useEffect(() => {
    if (randomNumber === user?.age) {
      setWinnerGame(true);
      dispatch(sessionPlayers({ ...user, isWinner: winnerGame }));
    } else {
      setWinnerGame(false);
    }
  }, [randomNumber]);

  useEffect(() => {
    dispatch(sessionPlayers({ ...user, isWinner: winnerGame }));
  }, []);
  return (
    <div>
      {sessionPlayersArray.length === 0 ? (
        "No players"
      ) : (
        <>
          {sessionPlayersArray.map((w, index) => (
            <div
              className="sessionPlayer"
              style={{ background: winnerGame ? "lightblue" : "#dbd8d8" }}
            >
              <img src={w?.picture} alt="" />
              <p>{w?.fullName}</p>
              <p>{w?.cell}</p>
            </div>
          ))}
        </>
      )}
    </div>
  );
}

export default SessionPlayers;
