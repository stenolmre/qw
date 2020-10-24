import { Fragment, useState } from 'react'

export default function AddRating() {
  const [ratingData, setRatingData] = useState({ rating: null })
  const { rating } = ratingData

  return <Fragment>
    <div className="rating">
      <h4>Rate this post.</h4>
      {
        [...Array(5)].map((star, i) => {
          const ratingValue = i + 1

          return <label key={i}>
            <input type="radio" name="rating" value={ratingValue}/>
            <i className={ratingValue <= rating ? 'fas fa-star' : 'fas fa-star gray'} onMouseEnter={ () => setRatingData({ ...ratingData, rating: ratingValue }) } onMouseLeave={ () => setRatingData({ ...ratingData, rating: null }) }/>
          </label>
        })
      }
    </div>
  </Fragment>
}
