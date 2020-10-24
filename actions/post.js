import { GET_POST, GET_POSTS, POST_ERROR } from './types'
import axios from 'axios';

export async function getPosts(dispatch) {
  try {
    const { data } = await axios.get('/api/posts/getposts');

    dispatch({
      type: GET_POSTS,
      payload: data
    })
  } catch (err) {
    dispatch({
      type: POST_ERROR,
      payload: err.message
    })
  }
}

export async function getPost(dispatch, postId) {
  try {
    const { data } = await axios.get(`/api/posts/get/?postId=${postId}`)

    dispatch({
      type: GET_POST,
      payload: data
    })
  } catch (err) {
    dispatch({
      type: POST_ERROR,
      payload: err.response.data.msg
    })
  }
}
