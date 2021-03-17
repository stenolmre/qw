import { SEND_MESSAGE, MESSAGE_ERROR } from '@/actions/types'

export const initialState = {
  contact: null,
  loading: true,
  error: null
}

export function ContactReducer(state = initialState, action) {
  const { type, payload } = action;

  switch (type) {
    case SEND_MESSAGE:
      return {
        ...state,
        contact: payload,
        loading: false,
        error: null
      }
    case MESSAGE_ERROR:
      return {
        ...state,
        error: payload,
        loading: false
      }
    default:
      return state;
  }
}
