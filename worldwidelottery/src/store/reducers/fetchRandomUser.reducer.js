import {
  FETCH_USER,
  FETCH_USER_SUCCESS,
  FETCH_USER_FAIL,
  STATS_PLAYERS,
  GROUP_WINNERS,
  SESSION_PLAYERS,
  CLEAR_SESSION,
} from "../actions/fetchRandomUser.action";

const INITIAL_STATE = {
  user: {},
  winners: [],
  statsPlayers: [],
  sortWinnersByTime: [],
  sessionPlayersArray: [],
  isLoading: true,
  errorMessage: "",
  randomNumber: null,
};

const user = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case CLEAR_SESSION: {
      return {
        user: {},
        winners: [],
        statsPlayers: [],
        sortWinnersByTime: [],
        sessionPlayersArray: [],
        isLoading: false,
        errorMessage: "",
        randomNumber: null,
      };
    }
    case FETCH_USER: {
      return {
        ...state,
        isLoading: true,
        errorMessage: "",
      };
    }
    case GROUP_WINNERS: {
      let newWinner = action.payload;

      if (state.winners.length) {
        let foundIndex = state.winners.findIndex(
          (winner) => winner.id === newWinner.id
        );
        if (foundIndex > -1) {
          state.winners[foundIndex].timesPlayed =
            state.winners[foundIndex].timesPlayed + 1;
        } else {
          state.winners.unshift({ ...action.payload, timesPlayed: 1 });
        }
      } else {
        state.winners.unshift({ ...action.payload, timesPlayed: 1 });
      }

      let playerNational = state.winners.map((winner) => {
        return {
          nationality: winner.location.country,
          numberOfPlayers: winner.timesPlayed,
        };
      });

      return { ...state, statsPlayers: [...playerNational] };
    }
    case SESSION_PLAYERS: {
      console.log("action", action?.payload);
      state.sessionPlayersArray.unshift(action.payload);
      return { ...state };
    }

    case STATS_PLAYERS: {
      console.log("action", action?.payload);
      state.statsPlayers.unshift(action.payload);
      return { ...state };
    }

    case FETCH_USER_SUCCESS: {
      let newUser = action.payload.results[0];

      state.user.id = newUser.id.value;
      state.user.fullName = newUser.name.first + " " + newUser.name.last;
      state.user.picture = newUser.picture.thumbnail;
      state.user.email = newUser.email;
      state.user.gender = newUser.gender === "male" ? "M" : "F";
      state.user.email = newUser.email;
      state.user.cell = newUser.cell;
      state.user.phone = newUser.cell;
      state.user.location = newUser.location;
      state.user.age = newUser.dob.age;
      state.user.nat = newUser.nat;

      return {
        ...state,
        errorMessage: "",
        randomNumber: Math.floor(Math.random() * 100) + 1,
      };
    }
    case FETCH_USER_FAIL: {
      return {
        ...state,
        isLoading: true,
        errorMessage: action.payload,
      };
    }
    default:
      return state;
  }
};

export default user;
