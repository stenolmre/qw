import React, { Fragment } from 'react'
import Head from 'next/head'
import Landing from './../components/landing'
import MobileLanding from './../components/mobile/mobilelanding'

export default function Index() {
  return <Fragment>
    <Head>
      <title>North Season</title>
    </Head>
    <Landing/>
    <MobileLanding/>
  </Fragment>
}
