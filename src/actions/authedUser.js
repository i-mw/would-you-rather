export const  ADD_AUTHED_USER = 'ADD_AUTHED_USER';

export function addAuthedUser(id) {
  return {
    type: ADD_AUTHED_USER,
    id
  }
}