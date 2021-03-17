import { GET_FEEDBACK, ADD_FEEDBACK, FEEDBACK_ERROR } from '@/actions/types'

export const initialState = {
  feedback: [],
  loading: true,
  error: null
}

export function FeedbackReducer(state = initialState, action) {
  const { type, payload } = action;

  switch (type) {
    case ADD_FEEDBACK:
    case GET_FEEDBACK:
      return {
        ...state,
        feedback: payload,
        loading: false,
        error: null
      }
    case FEEDBACK_ERROR:
      return {
        ...state,
        error: payload,
        loading: false
      }
    default:
      return state;
  }
}
