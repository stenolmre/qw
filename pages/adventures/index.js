import React, { Fragment, useEffect } from 'react'
import cookies from 'next-cookies'
import Head from './../../components/utils/head'
import MobileAdventures from './../../components/mobile/adventures/adventures'
import DesktopAdventures from './../../components/desktop/adventures'
import { useAdventureState, useAdventureDispatch } from './../../context/adventure'
import { getAdventures } from './../../actions/adventure'
import { landingeng, landingest } from './../../components/texts/landing'

function Adventures({ language }) {
  const user_lang = language === 'eng' ? true : false
  const { adventures, loading } = useAdventureState()
  const dispatchAdventure = useAdventureDispatch()

  useEffect(() => { getAdventures(dispatchAdventure) }, [dispatchAdventure])

  return <Fragment>
    <Head title={user_lang ? "Adventures" : "Elamusmatkad"} description={user_lang ? landingeng : landingest} image="https://etreeningud.ee/media/images/stenolmre/OG_IMG_2946.jpg" url="https://stenolmre.com/adventures" />
    {
      adventures && <Fragment>
        <div className="desktop">
          <DesktopAdventures adventures={adventures} userLanguage={user_lang} loading={loading}/>
        </div>
        <div className="mobile">
          <MobileAdventures userLanguage={user_lang}/>
        </div>
      </Fragment>
    }
  </Fragment>
}

Adventures.getInitialProps = async ctx => {
  const { lan } = cookies(ctx)
  return { language: lan }
}

export default Adventures
