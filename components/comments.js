import { Fragment, useState } from 'react'

export default function AddRating({ action, dispatch, id, state, title }) {
  const [showAllComments, setShowAllComments] = useState(false);
  const [commentData, setCommentData] = useState({ comment: '' })
  const { comment } = commentData

  function onChange(e) {
    setCommentData({ ...commentData, [e.target.name]: e.target.value })
  }

  function addComment(e) {
    e.preventDefault();
    action(dispatch, id, commentData);
    setCommentData({ comment: '' });
  }

  return <Fragment>
    <div className="comments">
      <h4>{ title }</h4>
      <form>
        <textarea name="comment" value={comment} onChange={onChange} placeholder="Add your comment here."/>
        <button onClick={addComment}>Comment</button>
      </form>
      {
        state && state.comments.length === 0
          ? <h4>No Comments.</h4>
          : <h4 style={{cursor: 'pointer'}} onClick={() => setShowAllComments(!showAllComments)}>All Comments.({state && state.comments.length}) {showAllComments ? '↡' : '↠'}</h4>
      }
      {
        state && state.comments.map((comment, i) => {
          return <div key={i} className={showAllComments ? '' : 'hide-comments'}>
            <p>{comment.comment}</p>
            <hr/>
          </div>
          })
        }
    </div>
  </Fragment>
}
