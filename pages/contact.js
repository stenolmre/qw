import { Fragment } from 'react'
import Cookies from 'js-cookie'
import Head from './../components/utils/head'
import Container from './../components/container'
import Contact from './../components/contact'
import { landingeng, landingest } from './../components/texts/landing'

export default function About() {
  const userLanguage = Cookies.get('lan') === 'eng'
  return <Fragment>
    <Head title={userLanguage ? "North Season - Contact with us" : "North Season - Võta meiega ühendust"} description={userLanguage ? landingeng : landingest} image="https://etreeningud.ee/media/images/stenolmre/OG_IMG_2946.jpg" url="https://stenolmre.com/contact" />
    <Container>
      <Contact/>
    </Container>
  </Fragment>
}
