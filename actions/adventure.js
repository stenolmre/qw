import { GET_ADVENTURE, GET_ADVENTURES, ADVENTURE_ERROR, GET_ADVENTURES_BY_CATEGORY } from './types'
import axios from 'axios'

export async function getAdventures(dispatch) {
  try {
    const { data } = await axios.get('/api/adventures/getadventures');

    dispatch({
      type: GET_ADVENTURES,
      payload: data
    })
  } catch (err) {
    dispatch({
      type: ADVENTURE_ERROR,
    })
  }
}

export async function getAdventuresByCategory(dispatch, category) {
  try {
    const { data } = await axios.get(`/api/adventures/getbycategory/?category=${category}`);

    dispatch({
      type: GET_ADVENTURES,
      payload: data
    })
  } catch (err) {
    dispatch({
      type: ADVENTURE_ERROR,
    })
  }
}

export async function getAdventure(dispatch, adventureId) {
  try {
    const { data } = await axios.get(`/api/adventures/get/?adventureId=${adventureId}`)

    dispatch({
      type: GET_ADVENTURE,
      payload: data
    })
  } catch (err) {
    dispatch({
      type: ADVENTURE_ERROR,
    })
  }
}

// export async function comment(dispatch, adventureId, commentData) {
//   try {
//     const config = { headers: { 'Content-Type': 'application/json' } }
//
//     const body = JSON.stringify(commentData)
//
//     const { data } = await axios.post(`/api/adventures/comment/?adventureId=${adventureId}`, body, config)
//
//     dispatch({
//       type: GET_ADVENTURE,
//       payload: data
//     })
//   } catch (err) {
//     dispatch({
//       type: ADVENTURE_ERROR,
//       payload: err.response.data.msg
//     })
//   }
// }
//
// export async function rate(dispatch, adventureId, ratingData) {
//   try {
//     const config = { headers: { 'Content-Type': 'application/json' } }
//
//     const body = JSON.stringify(ratingData)
//
//     const { data } = await axios.post(`/api/adventures/rate/?adventureId=${adventureId}`, body, config)
//
//     dispatch({
//       type: GET_ADVENTURE,
//       payload: data
//     })
//   } catch (err) {
//     dispatch({
//       type: ADVENTURE_ERROR,
//       payload: err.response.data.msg
//     })
//   }
// }
