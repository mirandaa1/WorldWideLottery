import api from "../../service/api.interceptors";

export const FETCH_USER = "FETCH_USER";
export const FETCH_USER_SUCCESS = "FETCH_USER_SUCCESS";
export const FETCH_USER_FAIL = "FETCH_USER_FAIL";

export const GROUP_WINNERS = "GROUP_WINNERS";
export const SESSION_PLAYERS = "SESSION_PLAYERS";
export const STATS_PLAYERS = "STATS_PLAYERS";
export const CLEAR_SESSION = "CLEAR_SESSION";

export const groupWinners = (winner) => {
  return (dispatch) => {
    dispatch({ type: GROUP_WINNERS, payload: winner });
  };
};

export const clearSession = () => {
  return (dispatch) => {
    dispatch({ type: CLEAR_SESSION });
  };
};

export const getStatsPlayers = (player) => {
  return (dispatch) => {
    dispatch({ type: FETCH_USER });
    dispatch({ type: STATS_PLAYERS });
  };
};
export const sessionPlayers = (player) => {
  return (dispatch) => {
    dispatch({ type: SESSION_PLAYERS, payload: player });
  };
};

export const getUser = () => {
  return async (dispatch) => {
    dispatch({ type: FETCH_USER });
    try {
      const res = await api.get("page=%7BpageIndex%7D");

      if (res?.status === 200) {
        dispatch({ type: FETCH_USER_SUCCESS, payload: res.data });
      } else {
        dispatch({ type: FETCH_USER_FAIL, payload: res.data.error });
      }
    } catch (error) {
      dispatch({ type: FETCH_USER_FAIL, payload: error.message });
    }
  };
};
