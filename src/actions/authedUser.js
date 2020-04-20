export const ADD_AUTHED_USER = "ADD_AUTHED_USER";
export const REMOVE_AUTHED_USER = "REMOVE_AUTHED_USER";

export function addAuthedUser(id) {
  return {
    type: ADD_AUTHED_USER,
    id,
  };
}

export function removeAuthedUser() {
  return {
    type: REMOVE_AUTHED_USER,
  };
}
