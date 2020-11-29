import React, { Fragment } from 'react'
import Link from 'next/link'
import Cookies from 'js-cookie'
import Sidebar from './../sidebar'
import Navbar from './../navbar'
import Footer from './../footer'
import { landingest, landingeng } from './../texts/landing'

export default function Demo() {
  const language = Cookies.get('lan') === 'eng'
  return <Fragment>
    <img className="front-cover" src="https://etreeningud.ee/media/images/stenolmre/FP_IMG_2946.jpg" alt="Levi, Lapland" />
    <div className="front-cover-overlay"/>
    <div className="front-page-container">
      <div>
        <Navbar />
        <div className="front-page">
          {
            language
              ? <Fragment>
                  <h1>Travel to inspire your life</h1>
                  <p>{landingeng}</p>
                </Fragment>
              : <Fragment>
                  <h1>Puhka Maailmas Reisides</h1>
                  <p>{landingest}</p>
                </Fragment>
          }
          <div>
            <hr/>
            <Link href="/adventures?category=all"><a>{language ? 'Show all experiences' : 'Vaata kõiki elamusmatku'}</a></Link>
          </div>
        </div>
      </div>
    </div>
  </Fragment>
}
