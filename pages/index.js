import { Fragment } from 'react'
import Head from 'next/head'
import Link from 'next/link'
import Navbar from './../components/navbar'
import Footer from './../components/footer'
import Sidebar from './../components/sidebar'

export default function Index() {
  return <Fragment>
    <Head>
      <title>qw</title>
    </Head>
    <div className="landing">
      <div className="overlay"/>
      <div className="landing-content">
        <Navbar/>
          <div className="heading">
            <h1>Travel and inspire your life</h1>
            <p>Some random text about travelling and exploring.</p>
            <div className="heading-read-more">
              <hr/>
              <Link href="/"><a>Read more</a></Link>
            </div>
          </div>
        <Footer/>
      </div>
      <Sidebar/>
    </div>
  </Fragment>
}
