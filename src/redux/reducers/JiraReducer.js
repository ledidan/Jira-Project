import { USER_SIGNIN_API } from "../constants/JiraConstants";

const initialState = {
  userLogin: [],
};

const JiraReducer = (state = initialState, action) => {
  switch (action.type) {
    case USER_SIGNIN_API: {
      console.log(action);
      return { ...state };
    }
    default:
      return state;
  }
};

export default JiraReducer;
