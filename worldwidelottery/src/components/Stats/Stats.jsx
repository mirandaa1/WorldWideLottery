import React, { useEffect } from "react";
import { getStatsPlayers } from "../../store/actions/fetchRandomUser.action";
import { useDispatch, useSelector } from "react-redux";
import "./Stats.scss";

const Stats = () => {
  const dispatch = useDispatch();
  const { user, statsPlayers } = useSelector((state) => state.userReducer);

  useEffect(() => {
    dispatch(getStatsPlayers({ ...user }));
  }, []);
  console.log("statsPlayers", statsPlayers);
  return (
    <div>
      {statsPlayers.map((player, index) => {
        if (player === undefined) {
          return "";
        } else {
          return (
            <div className="stats">
              <h2> Nationality : {player?.nationality}</h2>
              <h2> Number Of Players : {player?.numberOfPlayers}</h2>
            </div>
          );
        }
      })}
    </div>
  );
};

export default Stats;
