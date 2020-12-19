import React, { Fragment } from 'react'
import cookies from 'next-cookies'
import MobileContact from './../components/mobile/contact/contact'

function Contact({ language }) {
  const user_lang = language === 'eng' ? true : false

  return <Fragment>
    <MobileContact/>
  </Fragment>
}

Contact.getInitialProps = async ctx => {
  const { lan } = cookies(ctx)
  return { language: lan }
}

export default Contact
