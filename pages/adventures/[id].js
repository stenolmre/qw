import React, { Fragment, useEffect } from 'react'
import cookies from 'next-cookies'
import axios from 'axios'
import Head from './../../components/utils/head'
import MobileAdventure from './../../components/mobile/adventure/adventure'
import DesktopAdventure from './../../components/desktop/adventure/adventure'
import { useAdventureDispatch, useAdventureState } from './../../context/adventure'
import { addToAdventureState } from './../../actions/adventure'

function Adventure({ language, adventure }) {
  const user_lang = language === 'eng' ? true : false

  const dispatchAdventure = useAdventureDispatch()
  useEffect(() => { addToAdventureState(dispatchAdventure, adventure) }, [dispatchAdventure])

  return <Fragment>
    {
      adventure && <Fragment>
        <Head title={ user_lang ? adventure.name : adventure.nimi } description={ user_lang ? adventure.description : adventure.kirjeldus } image={ adventure.images[0] } url={ `https://stenolmre.com/adventures/${adventure._id}` }/>
        <div className="desktop">
          <DesktopAdventure userLanguage={ user_lang }/>
        </div>
        <div className="mobile">
          <MobileAdventure userLanguage={ user_lang } adventure={ adventure }/>
        </div>
      </Fragment>
    }
  </Fragment>
}

Adventure.getInitialProps = async ctx => {
  const { lan } = cookies(ctx)
  const { id } = ctx.query

  const { data } = !process.env.NODE_ENV || process.env.NODE_ENV === 'development'
    ? await axios.get(`http://localhost:3000/api/adventures/get?adventureId=${ id }`)
    : await axios.get(`https://stenolmre.com/api/adventures/get?adventureId=${ id }`)

  return { language: lan || '', adventure: data }
}

export default Adventure
