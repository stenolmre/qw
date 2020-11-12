import { Fragment } from 'react'
import Head from 'next/head'
import Cookies from 'js-cookie'
import Container from './../components/container'
import Contact from './../components/contact'

export default function About() {
  return <Fragment>
    {
      Cookies.get('lan') === 'eng'
        ? <Head>
            <title>qw - contact us</title>
          </Head>
        : <Head>
            <title>qw - võta meiega ühendust</title>
          </Head>
    }
    <Container>
      <Contact/>
    </Container>
  </Fragment>
}
