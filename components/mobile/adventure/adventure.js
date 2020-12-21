import React, { Fragment, useEffect } from 'react'
import { useRouter } from 'next/router'
import MobileLayout from './../layout'
import Details from './details'
import { useAdventureState, useAdventureDispatch } from './../../../context/adventure'
import { getAdventure } from './../../../actions/adventure'

export default function MobileAdventure({ userLanguage }) {
  const { query } = useRouter()
  const { adventure } = useAdventureState()
  const dispatchAdventure = useAdventureDispatch()

  useEffect(() => {
    getAdventure(dispatchAdventure, query.id)
  }, [dispatchAdventure, query])
  return <Fragment>
    {
      adventure && <MobileLayout userLanguage={userLanguage} adventure paragraph heading={userLanguage ? adventure.name : adventure.nimi} subheading={userLanguage ? adventure.description : adventure.kirjeldus} id={adventure._id}>
        <Details userLanguage={userLanguage}/>
      </MobileLayout>
    }
  </Fragment>
}
