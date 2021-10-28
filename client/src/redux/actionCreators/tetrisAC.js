import { GET_TETRIS } from "../actionTypes/tetrisAT.js"

export const getTetrisAC = (payload) => {
  return {
    type: GET_TETRIS, 
    payload
  }
}
