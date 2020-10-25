import { GET_ALBUM, GET_ALBUMS, ALBUM_ERROR } from './../actions/types'

export const initialState = {
  album: null,
  albums: [],
  loading: true,
  error: null
}

export function AlbumReducer(state = initialState, action) {
  const { type, payload } = action;

  switch (type) {
    case GET_ALBUMS:
      return {
        ...state,
        albums: payload,
        loading: false,
        error: null
      }
    case GET_ALBUM:
      return {
        ...state,
        album: payload,
        loading: false,
        error: null
      }
    case ALBUM_ERROR:
      return {
        ...state,
        error: payload,
        loading: false
      }
    default:
      return state;
  }
}
