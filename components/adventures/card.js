import React, { Fragment } from 'react'
import Link from 'next/link'

const Card = ({ language, el, id, queryName }) => {
  return <Fragment>
    <Link href={`/adventures/${id}?name=${queryName}`}><a className="adventure_card">
      <img src={el.images[0]} alt={queryName}/>
      <div className="adventure_card_details">
        <h3>{language ? el.name : el.nimi}</h3>
        <div className="adventure_card_details_bottom">
          <p>2/08/21 - 12/08/21</p>
          <p>{(el.prices[0].price / 100).toFixed(2)}€</p>
        </div>
      </div>
    </a></Link>
  </Fragment>
}

export default Card
