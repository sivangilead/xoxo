import { Map } from 'immutable'


const flip = function (player) {
  if (player === 'X') {
     player = 'O'
  }
  else {
    player = 'X'
  }
  return player
}

const initialState = {

  board: Map(),
  turn: 'X'
}


const MOVE = 'MOVE'
export const move = (player, position) => {
  return {
    type: MOVE,
    position: position,
    player: player
  }
}



export default function reducer(state = initialState, action) {
  switch (action.type) {
    case MOVE:
    return {board: state.board.setIn(action.position, action.player),
      turn: flip(state.turn)
    }

    default:
      return state
  }
}

