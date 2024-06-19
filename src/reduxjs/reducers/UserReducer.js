import { types } from "../types";

const initialState = {
  users: [],
  user: {},
};

export default function fetchUsers(state = initialState, action) {
  if (action.type === types.ASYNC_FN) {
    return {
      ...state,
      users: action.payload,
    };
  }
  if (action.type === types.FETCH) {
    return {
      ...state,
      user: action.payload,
    };
  }
  return state;
}
