import React, { Fragment } from 'react'
import cookies from 'next-cookies'
import Head from './../components/utils/head'
import DesktopContact from './../components/desktop/contact'
import MobileContact from './../components/mobile/contact'
import { contact_heading_est, contact_heading_eng, contact_est, contact_eng } from './../components/texts/contact'

function Contact({ language }) {
  const user_lang = language === 'eng' ? true : false

  return <Fragment>
    <Head title={user_lang ? `North Season - ${contact_heading_eng}` : `North Season - ${contact_heading_est}`} description={user_lang ? contact_eng : contact_est} image="https://etreeningud.ee/media/images/stenolmre/OG_IMG_2946.jpg" url="https://stenolmre.com/contact" />
    <div className="desktop">
      <DesktopContact userLanguage={user_lang}/>
    </div>
    <div className="mobile">
      <MobileContact userLanguage={user_lang}/>
    </div>
  </Fragment>
}

Contact.getInitialProps = async ctx => {
  const { lan } = cookies(ctx)
  return { language: lan }
}

export default Contact
