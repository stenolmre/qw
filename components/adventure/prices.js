import React, { Fragment } from 'react'
import Cookies from 'js-cookie'
import { useRouter } from 'next/router'
import { useAdventureState } from './../../context/adventure'

export default function Prices() {
  const user_lang = Cookies.get('lan') === 'eng' ? true : false
  const { adventure } = useAdventureState()

  return <Fragment>
    <h4>{user_lang ? 'Prices' : 'Hinnakiri'}</h4>
    {
      adventure && <div className="adventure-prices">
        {
          adventure.prices.map(e => <p key={e._id}><span>{user_lang ? e.name : e.nimi}</span>{(e.price / 100).toFixed(2)}€</p>)
        }
      </div>
    }
    <style jsx>
      {`
        div { margin-bottom: 25px; }

        div p {
          height: auto;
          margin: 5px 0;
        }

        div p span { width: 150px; }
      `}
    </style>
  </Fragment>
}
