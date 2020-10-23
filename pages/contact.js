import { Fragment } from 'react'
import Head from 'next/head'
import Container from './../components/container'
import Contact from './../components/contact'

export default function About() {
  return <Fragment>
    <Head>
      <title>qw - contact us</title>
    </Head>
    <Container>
      <Contact/>
    </Container>
  </Fragment>
}
