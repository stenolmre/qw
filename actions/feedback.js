import { GET_FEEDBACK, ADD_FEEDBACK, FEEDBACK_ERROR } from '@/actions/types'
import axios from 'axios'

export async function getFeedback(dispatch) {
  try {
    const { data } = await axios.get('/api/feedback/_get')

    console.log(data);

    dispatch({
      type: GET_FEEDBACK,
      payload: data
    })
  } catch (err) {
    dispatch({
      type: FEEDBACK_ERROR,
      payload: err.message
    })
  }
}

export async function addFeedback(dispatch, feedback, success, error) {
  const config = { headers: { 'Content-Type': 'application/json' } }
  const body = JSON.stringify(feedback)

  try {
    const { data } = await axios.post('/api/feedback/add', body, config)

    dispatch({
      type: ADD_FEEDBACK,
      payload: data
    })

    success()
  } catch (err) {
    dispatch({
      type: FEEDBACK_ERROR,
      payload: err.message
    })

    error()
  }
}
