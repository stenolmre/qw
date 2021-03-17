import React from 'react'

const ShowRating = ({ rating }) => {
  return <div className="rating">
    {
      [...Array(5)].map((star, i) => {
        const ratingValue = i + 1

        return <label key={i}>
          <input type="radio" name="rating" value={ratingValue}/>
          <i className={ratingValue <= rating ? 'fas fa-star gold' : 'fas fa-star gray'}/>
        </label>
      })
    }
    <style jsx>{`
      .gold {
        color: #ffc107
      }

      .gray {
        color: rgba(33, 33, 33, .2)
      }

      .rating input[type = 'radio'] {
        display: none;
      }

      .rating label {
        padding: 0 2px;
        font-size: .75rem;
      }

      @media (max-width: 420px) {
        .rating label {
          font-size: .875rem;
        }
      }

      .rating label:nth-of-type(1) {
        margin-left: -3px;
      }
    `}</style>
  </div>
}

export { ShowRating }
