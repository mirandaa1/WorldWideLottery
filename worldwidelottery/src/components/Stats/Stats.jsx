import React, { useEffect } from "react";
import { getStatsPlayers } from "../../store/actions/fetchRandomUser.action";
import { useDispatch, useSelector } from "react-redux";

const Stats = () => {
  const dispatch = useDispatch();
  const { statsPlayers } = useSelector((state) => state.userReducer);

  return <div></div>;
};

export default Stats;
