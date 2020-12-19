import React, { Fragment, useEffect } from 'react'
import { useRouter } from 'next/router'
import MobileLayout from './../layout'
import Details from './details'
import { useAdventureState, useAdventureDispatch } from './../../../context/adventure'
import { getAdventure } from './../../../actions/adventure'

export default function MobileAdventure() {
  const { query } = useRouter()
  const { adventure } = useAdventureState()
  const dispatchAdventure = useAdventureDispatch()

  useEffect(() => {
    getAdventure(dispatchAdventure, query.id)
  }, [dispatchAdventure, query])
  return <Fragment>
    {
      adventure && <MobileLayout adventure paragraph heading={adventure.name} subheading={adventure.description} id={adventure._id}>
        <Details/>
      </MobileLayout>
    }
  </Fragment>
}
