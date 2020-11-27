import { Fragment, useEffect, useState } from 'react'
import Head from 'next/head'
import { useRouter } from 'next/router'
import Container from './../../components/container'
import Spinner from './../../components/utils/spinner'
import Images from './../../components/adventure/images'
import Info from './../../components/adventure/info'
import Cart from './../../components/adventure/cart'

import { useAdventureState, useAdventureDispatch } from './../../context/adventure'
import { getAdventure } from './../../actions/adventure'

export default function Adventure() {
  const dispatchAdventure = useAdventureDispatch()
  const adventureState = useAdventureState()
  const { adventure } = adventureState
  const router = useRouter()
  const { id } = router.query

  useEffect(() => {
    getAdventure(dispatchAdventure, id)
  }, [dispatchAdventure, id])

  return <Fragment>
    <Head>
      <title>qw - adventure</title>
    </Head>
    <Container>
      <div className="adventure">
        {
          adventureState && adventure
            ? <Fragment>
                <Images adventure={adventure}/>
                <Info adventure={adventure} id={adventure._id}/>
                <Cart adventure={adventure}/>
              </Fragment>
            : <Spinner/>
        }
      </div>
    </Container>
  </Fragment>
}
