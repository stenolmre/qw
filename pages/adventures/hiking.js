import React, { Fragment, useState } from 'react'
import cookies from 'next-cookies'
import Head from './../../components/utils/head'
import MobileAdventures from './../../components/mobile/adventures/adventures'
import { useAdventureState } from './../../context/adventure'
import { landingeng, landingest } from './../../components/texts/landing'

function Hiking({ language }) {
  const user_lang = language === 'eng' ? true : false
  const { adventures, loading } = useAdventureState()
  const [search, setSearch] = useState('')

  const content = () => {
    return {__html: `${user_lang ? skiing_ad_eng : skiing_ad_est}`};
  }

  return <Fragment>
    <Head title={user_lang ? "Skiing Adventures" : "Elamusmatkad Suuskadel"} description={user_lang ? landingeng : landingest} image="https://etreeningud.ee/media/images/stenolmre/OG_IMG_2946.jpg" url="https://stenolmre.com/adventures/skiing" />
    <MobileAdventures userLanguage={user_lang} message="Unfortunately there are no hiking adventures available."/>
  </Fragment>
}

Hiking.getInitialProps = async ctx => {
  const { lan } = cookies(ctx)
  return { language: lan }
}

export default Hiking
