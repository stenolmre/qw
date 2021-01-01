import React, { Fragment } from 'react'
import cookies from 'next-cookies'
import Head from './../components/utils/head'
import MobileLanding from './../components/mobile/landing/landing'
import Landing from './../components/desktop/landing/landing'
import { landingeng, landingest } from './../components/texts/landing'
import { nanoid } from 'nanoid'

function Index({ language }) {
  console.log(nanoid());
  const user_lang = language === 'eng' ? true : false
  return <Fragment>
    <Head title={!user_lang ? "North Season - Puhka Maailmas Reisides" : "North Season - Travel to Inspire Your Life"} description={!user_lang ? landingest : landingeng} image="https://etreeningud.ee/media/images/stenolmre/OG_IMG_2946.jpg" url="https://stenolmre.com" />
    <div className="desktop">
      <Landing userLanguage={user_lang}/>
    </div>
    <div className="mobile">
      <MobileLanding userLanguage={user_lang}/>
    </div>
  </Fragment>
}

Index.getInitialProps = async ctx => {
  const { lan } = cookies(ctx)
  return { language: lan }
}

export default Index
