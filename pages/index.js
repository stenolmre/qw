import React, { Fragment } from 'react'
import Cookies from 'js-cookie'
import Head from './../components/utils/head'
import Landing from './../components/landing'
import Mobile from './../components/mobile/mobile'
import { landingeng, landingest } from './../components/texts/landing'

export default function Index() {
  const userLanguage = Cookies.get('lan') === 'eng'
  return <Fragment>
    <Head title={userLanguage ? "North Season - Travel to Inspire Your Life" : "North Season - Puhka Maailmas Reisides"} description={userLanguage ? landingeng : landingest} image="https://etreeningud.ee/media/images/stenolmre/OG_IMG_2946.jpg" url="https://stenolmre.com" />
    <div className="desktop">
      <Landing/>
    </div>
    <div className="mobile">
      <Mobile/>
    </div>
  </Fragment>
}
