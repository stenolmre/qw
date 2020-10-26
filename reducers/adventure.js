import { GET_ADVENTURE, GET_ADVENTURES, ADVENTURE_ERROR } from './../actions/types'

export const initialState = {
  adventure: null,
  adventures: [],
  adventuresByCategory: [],
  loading: true,
  error: null
}

export function AdventureReducer(state = initialState, action) {
  const { type, payload } = action;

  switch (type) {
    case GET_ADVENTURES:
      return {
        ...state,
        adventures: payload,
        loading: false,
        error: null
      }
    case GET_ADVENTURE:
      return {
        ...state,
        adventure: payload,
        loading: false,
        error: null
      }
    case ADVENTURE_ERROR:
      return {
        ...state,
        error: payload,
        loading: false
      }
    default:
      return state;
  }
}
