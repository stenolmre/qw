import { GET_POST, GET_POSTS, POST_ERROR } from './../actions/types'

export const initialState = {
  post: null,
  posts: [],
  loading: true,
  error: null
}

export function PostReducer(state = initialState, action) {
  const { type, payload } = action;

  switch (type) {
    case GET_POSTS:
      return {
        ...state,
        posts: payload,
        loading: false
      }
    case GET_POST:
      return {
        ...state,
        post: payload,
        loading: false
      }
    case POST_ERROR:
      return {
        ...state,
        error: payload,
        loading: false
      }
    default:
      return state;
  }
}
