import React, { Fragment, useEffect } from 'react'
import Link from 'next/link'
import Cookies from 'js-cookie'

import { useAdventureState, useAdventureDispatch } from '@/context/adventure'
import { getAdventures } from '@/actions/adventure'

import Loader from '@/components/loader'

const Hero = () => {
  const user_lang = Cookies.get('lan') === 'eng' ? true : false

  const dispatchAdventure = useAdventureDispatch()
  const { adventures, loading } = useAdventureState()

  useEffect(() => { getAdventures(dispatchAdventure) }, [dispatchAdventure])

  return <Fragment>
    {
      loading ? <div className="hero_loader"><Loader/></div> : adventures && adventures.filter(el => el._id === 'cNpAef7').map(el => <div key={el._id} className="hero">
        <img src={el.images[0]} alt={user_lang ? el.name : el.nimi}/>
        <div>
          <h1>{user_lang ? el.name : el.nimi}</h1>
          <p>{user_lang ? el.description : el.kirjeldus}</p>
          <Link href={`/adventures/${el._id}?name=${user_lang ? el.name.toLowerCase().replaceAll(' ', '-') : el.nimi.toLowerCase().replaceAll(' ', '-')}`}><a>{user_lang ? 'Book the trip' : 'Broneeri Elamusmatk'}</a></Link>
        </div>
      </div>)
    }
  </Fragment>
}

export default Hero
