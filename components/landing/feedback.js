import React, { useEffect } from 'react'

import { useFeedbackState, useFeedbackDispatch } from '@/context/feedback'
import { getFeedback } from '@/actions/feedback'

import { ShowRating } from '@/components/rating'
import Loader from '@/components/loader'

const Feedback = ({ language }) => {
  const dispatchFeedback = useFeedbackDispatch()
  const { feedback, loading } = useFeedbackState()

  useEffect(() => { getFeedback(dispatchFeedback) }, [dispatchFeedback])

  return <div className="feedback_container">
    <h5>{language ? 'What our customers think' : 'Mida kliendid meist räägivad'}</h5>
    <div style={{ display: 'flex' }}>
      {
        loading ? <div className="feedback_loader"><Loader /></div> : feedback && feedback.map(el => <div key={el._id} className="feedback">
          <ShowRating rating={el.rating}/>
          <p>{el.feedback}</p>
          <div className="feedback_name"><p>{el.name.slice(0, 1)}</p> <p>{el.name}</p></div>
        </div>).slice(0, 2)
      }
      {
        loading ? <div className="feedback_loader"><Loader /></div> : feedback && feedback.map(el => <div key={el._id} className="feedback">
          <ShowRating rating={el.rating}/>
          <p>{el.feedback}</p>
          <div className="feedback_name"><p>{el.name.slice(0, 1)}</p> <p>{el.name}</p></div>
        </div>).slice(0, 2)
      }
    </div>
  </div>
}

export default Feedback
