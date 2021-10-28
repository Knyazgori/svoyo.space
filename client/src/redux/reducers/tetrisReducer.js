import { GET_TETRIS } from "../actionTypes/tetrisAT.js";


const initialState = { tetris: [], }

export const tetrisReducer = (state = initialState, action) => {
  switch (action.type) { 
    case GET_TETRIS:
      return {...state, tetris: action.payload}
    default: 
      return state
  }
}
