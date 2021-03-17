import React, { useEffect } from 'react'
import Link from 'next/link'
import { useRouter } from 'next/router'
import Cookies from 'js-cookie'

import { useAdventureState, useAdventureDispatch } from '@/context/adventure'
import { getAdventures } from '@/actions/adventure'

import Card from '@/components/card'

const Adventures = () => {
  const user_lang = Cookies.get('lan') === 'eng' ? true : false

  const { query } = useRouter()

  const dispatchAdventure = useAdventureDispatch()
  const { adventures, loading } = useAdventureState()

  useEffect(() => { getAdventures(dispatchAdventure) }, [dispatchAdventure])

  return <div className="adventures_previews">
    {
      adventures && adventures.filter(x => query.search
        ? user_lang
          ? x.name.toLowerCase().includes(query.search.toLowerCase())
          : x.nimi.toLowerCase().includes(query.search.toLowerCase())
        : x.name).map(el => <Card
          key={el._id}
          language={user_lang}
          id={el._id}
          queryName={
            user_lang
              ? el.name.toLowerCase().replaceAll(' ', '-')
              : el.nimi.toLowerCase().replaceAll(' ', '-')
          }
          el={el}/>)
    }
  </div>
}

export default Adventures
