import { Fragment, useState } from 'react'

export default function AddRating() {
  const [commentData, setCommentData] = useState({ name: '', comment: '' })
  const { name, comment } = commentData

  function onChange(e) {
    setCommentData({ ...commentData, [e.target.name]: e.target.value })
  }

  return <Fragment>
    <div className="comments">
      <h4>Comment this post.</h4>
      <form>
        <input type="text" name="name" value={name} onChange={onChange} placeholder="Name"/>
        <textarea name="comment" value={comment} onChange={onChange} placeholder="Add your comment here."/>
        <button>Comment</button>
      </form>
      <h4>Show all comments</h4>
    </div>
  </Fragment>
}
