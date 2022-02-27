import {
  FETCH_USER,
  FETCH_USER_SUCCESS,
  FETCH_USER_FAIL,
} from "../actions/fetchRandomUser.action";

const INITIAL_STATE = {
  user: {},
  isLoading: true,
  errorMessage: "",
  randomNumber: null,
};

const user = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case FETCH_USER: {
      return {
        ...state,
        isLoading: true,
        errorMessage: "",
      };
    }
    case FETCH_USER_SUCCESS: {
      //   console.log("ACTION>PAYLOAD", action.payload.results.picture);
      console.log(state.userDetails);
      action.payload.results.map((u, i) => {
        if (u.registered.age === state.randomNumber) {
          console.log("WINNER WITH AGEE");
        }
      });
      return {
        ...state,
        errorMessage: "",
        user: { ...action.payload },
        randomNumber: Math.floor(Math.random() * 10) + 1,
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
