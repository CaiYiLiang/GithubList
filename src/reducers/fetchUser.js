import * as ActionType from '../actions'

const fetchUserReducer = (state = {}, action) => {
 switch (action.type) {
    case ActionType.FETCH_USER_FULFILLED:
      return {
        ...state,
        user: action.payload  // ```[action.payload.login]`` is the username
      };

    default:
      return state;
  }
}

export default fetchUserReducer