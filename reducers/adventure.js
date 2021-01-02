import { GET_ADVENTURE, GET_ADVENTURES, ADVENTURE_ERROR, PAYMENT_ACCEPTED } from './../actions/types'

export const initialState = {
  adventure: null,
  adventures: [],
  adventuresByCategory: [],
  loading: true,
  error: null,
  paymentAccepted: null
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
    case PAYMENT_ACCEPTED:
      return {
        ...state,
        loading: false,
        error: null,
        paymentAccepted: payload
      }
    default:
      return state;
  }
}
