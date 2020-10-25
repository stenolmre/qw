import { GET_ALBUM, GET_ALBUMS, ALBUM_ERROR } from './types'
import axios from 'axios';

export async function getAlbums(dispatch) {
  try {
    const { data } = await axios.get('/api/albums/getalbums');

    dispatch({
      type: GET_ALBUMS,
      payload: data
    })
  } catch (err) {
    dispatch({
      type: ALBUM_ERROR,
      payload: err.message
    })
  }
}

export async function getAlbum(dispatch, albumId) {
  try {
    const { data } = await axios.get(`/api/albums/get/?albumId=${albumId}`)

    dispatch({
      type: GET_ALBUM,
      payload: data
    })
  } catch (err) {
    dispatch({
      type: ALBUM_ERROR,
      payload: err.response.data.msg
    })
  }
}

export async function comment(dispatch, albumId, commentData) {
  try {
    const config = { headers: { 'Content-Type': 'application/json' } }

    const body = JSON.stringify(commentData)

    const { data } = await axios.post(`/api/albums/comment/?albumId=${albumId}`, body, config)

    dispatch({
      type: GET_ALBUM,
      payload: data
    })
  } catch (err) {
    dispatch({
      type: ALBUM_ERROR,
      payload: err.response.data.msg
    })
  }
}

export async function rate(dispatch, albumId, ratingData) {
  try {
    const config = { headers: { 'Content-Type': 'application/json' } }

    const body = JSON.stringify(ratingData)

    const { data } = await axios.post(`/api/albums/rate/?albumId=${albumId}`, body, config)

    dispatch({
      type: GET_ALBUM,
      payload: data
    })
  } catch (err) {
    dispatch({
      type: ALBUM_ERROR,
      payload: err.response.data.msg
    })
  }
}
