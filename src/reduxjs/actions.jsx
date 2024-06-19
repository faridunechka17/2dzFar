import { types } from "./types";

export function asyncFn(users) {
  return {
    type: types.ASYNC_FN,
    payload: users,
  };
}

export function fetchR(users) {
  return{
    type: types.FETCH,
    payload: users
  }
}


export function asyncFunctionFetch() {
  return async function (dispatch) {
    const response = await fetch("https://jsonplaceholder.typicode.com/users");
    const data = await response.json();
    dispatch(asyncFn(data));
  };
}

export function f(id) {
  return async function (dispatch) {
    const response = await fetch(`https://jsonplaceholder.typicode.com/users/${id}`);
    const data = await response.json();
    dispatch(fetchR(data));
  };
}