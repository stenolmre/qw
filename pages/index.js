import React, { Fragment } from 'react'
import Head from 'next/head'
import Landing from './../components/landing'
import Mobile from './../components/mobile/mobile'

export default function Index() {
  return <Fragment>
    <Head>
      <title>North Season</title>
    </Head>
    <div className="desktop">
      <Landing/>
    </div>
    <div className="mobile">
      <Mobile/>
    </div>
  </Fragment>
}
