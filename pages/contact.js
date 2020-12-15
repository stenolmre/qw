import React, { Fragment } from 'react'
import cookies from 'next-cookies'
import Head from './../components/utils/head'
import Container from './../components/container'
import Contact from './../components/contact'
import { landingeng, landingest } from './../components/texts/landing'

function ContactPage({ language }) {
  const user_lang = language === 'eng' ? true : false
  return <Fragment>
    <Head title={!user_lang ? "North Season - Puhka Maailmas Reisides" : "North Season - Travel to Inspire Your Life"} description={!user_lang ? landingest : landingeng} image="https://etreeningud.ee/media/images/stenolmre/OG_IMG_2946.jpg" url="https://stenolmre.com/contact" />
    <Container>
      <Contact/>
    </Container>
  </Fragment>
}

ContactPage.getInitialProps = async ctx => {
  const { lan } = cookies(ctx)
  return { language: lan }
}

export default ContactPage
