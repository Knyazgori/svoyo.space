import { CHECK_SESSION } from "../actionTypes/adminAT.js";

const initialState = { isUserAuth: false , }

export const adminReducer = (state = initialState, action) => {
  switch (action.type) { 
    case CHECK_SESSION:
      return {...state, isUserAuth: action.payload}
    default: 
      return state
  }
}
