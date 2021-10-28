import { CHECK_SESSION } from "../actionTypes/adminAT.js"

export const checkAdminAC = (payload) => {
  return {
    type: CHECK_SESSION, 
    payload
  }
}
