import * as types from "../actions/actionTypes.js";
import initialState from "./initialState";

export default function userReducer(state = initialState.users, action) {
  switch (action.type) {
    case types.ADD_USER:
      return state.concat([{ name: action.name, id: action.id }]);
    case types.USERS_LIST:
      return actions.users;
    default:
      return state;
  }
}
