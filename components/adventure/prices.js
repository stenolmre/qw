import React, { Fragment, useEffect } from 'react'
import Cookies from 'js-cookie'
import { useRouter } from 'next/router'
import { useAdventureDispatch, useAdventureState } from './../../context/adventure'
import { getAdventure } from './../../actions/adventure'

export default function Prices() {
  const user_lang = Cookies.get('lan') === 'eng' ? true : false
  const { query } = useRouter()

  const dispatchAdventure = useAdventureDispatch()
  const { adventure } = useAdventureState()

  useEffect(() => { getAdventure(dispatchAdventure, query.id) }, [dispatchAdventure, query])

  return <Fragment>
    <h4>{user_lang ? 'Prices' : 'Hinnakiri'}</h4>
    {
      adventure && <div className="adventure-prices">
        <p><span>{user_lang ? 'Adult' : 'Täiskasvanu'}</span>{(adventure.prices[0].price / 100).toFixed(2)}€</p>
        <p><span>{user_lang ? 'Youth' : 'Nooruk'} (11-18)</span>{(adventure.prices[1].price / 100).toFixed(2)}€</p>
        <p><span>{user_lang ? 'Child' : 'Laps'} (6-11)</span>{(adventure.prices[2].price / 100).toFixed(2)}€</p>
      </div>
    }
    <style jsx>
      {`
        div {
          margin-bottom: 25px
        }

        div p {
          height: auto;
          margin: 5px 0;
        }

        div p span {
          width: 150px;
        }
      `}
    </style>
  </Fragment>
}
