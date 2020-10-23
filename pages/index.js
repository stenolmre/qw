import { Fragment } from 'react'
import Head from 'next/head'
import Link from 'next/link'
import Layout from './../components/layout'
import Landing from './../components/landing'
import MobileLanding from './../components/mobile/mobilelanding'

export default function Index() {
  return <Fragment>
    <Head>
      <title>qw</title>
    </Head>
    <Layout>
      <Landing/>
    </Layout>
    <MobileLanding/>
  </Fragment>
}
