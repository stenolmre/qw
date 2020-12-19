import { Fragment, useEffect, useState } from 'react'
import cookies from 'next-cookies'
import Head from './../../components/utils/head'
import { useRouter } from 'next/router'
import Container from './../../components/container'
import Loading from './../../components/utils/loading'
import Images from './../../components/adventure/images'
import Info from './../../components/adventure/info'
import Cart from './../../components/adventure/cart'
import { useAdventureState, useAdventureDispatch } from './../../context/adventure'
import { getAdventure } from './../../actions/adventure'

import MobileAdventure from './../../components/mobile/adventure/adventure'

function Adventure({ language }) {
  const dispatchAdventure = useAdventureDispatch()
  const { adventure } = useAdventureState()
  const { query } = useRouter()
  const user_lang = language === 'eng' ? true : false

  useEffect(() => {
    getAdventure(dispatchAdventure, query.id)
  }, [dispatchAdventure, query])

  return <Fragment>
    {
      adventure && <Head title={user_lang ? 'ss' : adventure.nimi} description={user_lang ? adventure.description : adventure.kirjeldus} image={adventure.images[0]} url={`https://stenolmre.com/adventures/${adventure._id}`}/>
    }

      <div className="adventure">
        <Container>
        {
          adventure
            ? <Fragment>
                <Images adventure={adventure}/>
                <Info adventure={adventure} id={adventure._id}/>
                <Cart adventure={adventure}/>
              </Fragment>
            : <Loading/>
        }
        </Container>
      </div>
      <MobileAdventure/>
  </Fragment>
}

Adventure.getInitialProps = ctx => {
  const { lan } = cookies(ctx)

  return { language: lan || '' }
}

export default Adventure
