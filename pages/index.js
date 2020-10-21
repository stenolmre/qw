import { Fragment } from 'react'
import Head from 'next/head'
import Link from 'next/link'
import Landing from './../components/landing'
import MobileLanding from './../components/mobilelanding'

export default function Index() {
  return <Fragment>
    <Head>
      <title>qw</title>
    </Head>
    <Landing>
      <div className="container">
        <h1>Travel to inspire your life</h1>
        <p>Visit magical lapland and gather amazing experiences that last forever. We are made to give you a taste of artic nature.</p>
        <div className="heading-read-more">
          <hr/>
          <Link href="/"><a>Show all experiences</a></Link>
        </div>
      </div>
      <MobileLanding/>
    </Landing>
  </Fragment>
}
