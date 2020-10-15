import axios from 'axios';

async function getNotes(dispatch) {
  try {
    const { data } = await axios.get('/api/notes');

    dispatch({
      type: 'GET_NOTES',
      payload: data
    })
  } catch (err) {
    console.error(err.message);
    console.log('Something went wrong..');
  }
}

export default getNotes
