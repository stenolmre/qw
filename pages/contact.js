import React, { Fragment } from 'react'
import cookies from 'next-cookies'
import DesktopContact from './../components/desktop/contact'
import MobileContact from './../components/mobile/contact/contact'

function Contact({ language }) {
  const user_lang = language === 'eng' ? true : false

  return <Fragment>
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
