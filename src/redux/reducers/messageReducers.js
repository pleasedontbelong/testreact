import * as types from "../actions/actionTypes.js";
import initialState from "./initialState";

export default function messageReducer(state = initialState.messages, action) {
  switch (action.type) {
    case types.ADD_MESSAGE:
    case types.MESSAGE_RECIEVED:
      return state.concat([
        { message: action.message, author: action.author, id: action.id },
      ]);
    default:
      return state;
  }
}
