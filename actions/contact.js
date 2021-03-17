import { SEND_MESSAGE, MESSAGE_ERROR } from '@/actions/types'
import axios from 'axios'

export async function sendMessage(dispatch, contact, success, error) {
  const config = { headers: { 'Content-Type': 'application/json' } }
  const body = JSON.stringify(contact)

  try {
    const { data } = await axios.post('/api/contact/add', body, config)

    dispatch({
      type: SEND_MESSAGE,
      payload: data
    })

    success()
  } catch (err) {
    dispatch({
      type: MESSAGE_ERROR,
      payload: err.message
    })

    error()
  }
}
