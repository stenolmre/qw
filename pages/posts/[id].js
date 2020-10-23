import { Fragment } from 'react'
import Head from 'next/head'
import Container from './../../components/container'
import Link from 'next/link'

export default function Posts() {
  return <Fragment>
    <Head>
      <title>qw - posts</title>
    </Head>
    <Container>
      <section className="post">
        <img src="aurora.jpeg" alt=""/>
      </section>
    </Container>
  </Fragment>
}
