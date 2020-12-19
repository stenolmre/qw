import React, { Fragment, useState } from 'react'
import cookies from 'next-cookies'
import Head from './../../components/utils/head'
import MobileAdventures from './../../components/mobile/adventures/adventures'
import { useAdventureState } from './../../context/adventure'
import { adventures_ad_eng, adventures_ad_est } from './../../components/texts/adventures'
import { landingeng, landingest } from './../../components/texts/landing'

function Adventures({ language }) {
  const user_lang = language === 'eng' ? true : false
  const { adventures, loading } = useAdventureState()
  const [search, setSearch] = useState('')

  const content = () => {
    return {__html: `${user_lang ? adventures_ad_eng : adventures_ad_est}`};
  }

  return <Fragment>
    <Head title={user_lang ? "Adventures" : "Elamusmatkad"} description={user_lang ? landingeng : landingest} image="https://etreeningud.ee/media/images/stenolmre/OG_IMG_2946.jpg" url="https://stenolmre.com/adventures/skiing" />
    <MobileAdventures/>
  </Fragment>
}

Adventures.getInitialProps = async ctx => {
  const { lan } = cookies(ctx)
  return { language: lan }
}

export default Adventures
