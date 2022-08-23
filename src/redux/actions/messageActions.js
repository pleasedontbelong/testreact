import * as types from "./actionTypes.js";

let nextMessageId = 0;
const nextUserId = 0;

// Action Creators
export function addMessage(message, author) {
  return { type: types.ADD_MESSAGE, id: nextMessageId++, message, author };
}

export function addUser(name) {
  return { type: types.ADD_USER, nextUserId: 0, name };
}

export function messageRecieved(message, author) {
  return { type: types.MESSAGE_RECIEVED, id: nextMessageId++, message, author };
}

export function populateUsersList(users) {
  return { type: types.USERS_LIST, users };
}
