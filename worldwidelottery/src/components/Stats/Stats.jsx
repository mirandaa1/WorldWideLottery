import React, { useEffect } from "react";
import { getStatsPlayers } from "../../store/actions/fetchRandomUser.action";
import { useDispatch, useSelector } from "react-redux";

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
            <div className="sessionPlayer">
              <h1>{player?.nationality}</h1>
              <h1>{player?.numberOfPlayers}</h1>
            </div>
          );
        }
      })}
    </div>
  );
};

export default Stats;
