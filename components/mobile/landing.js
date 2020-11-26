import React, { Fragment } from 'react'
import Link from 'next/link'
import Cookies from 'js-cookie'
import Sidebar from './../sidebar'
import Navbar from './../navbar'
import Footer from './../footer'

export default function Demo() {
  const language = Cookies.get('lan') === 'eng'
  return <Fragment>
    <img className="front-cover" src="aurora.jpeg" alt="aurora-light" />
    <div className="front-cover-overlay"/>
    <div className="front-page-container">
      <div>
        <Navbar />
        <div className="front-page">
          {
            language
              ? <Fragment>
                  <h1>Travel to inspire your life</h1>
                  <p>Lapland. A land in the Arctic Circle with sweeping fells and northern lights, midnight sun and polar night. A home to reindeers, elves and Santa Claus, where for half a year, the trees wear winter coats. This could be the place where your next adventure awaits!</p>
                </Fragment>
              : <Fragment>
                  <h1>Maagiline puhkus Lapimaal</h1>
                  <p>Lapimaa – see on tundrute ja virmaliste maa. Keskööpäikese ja polaaröö maa. Jõuluvana ja põhjapõtrade maa. Põhjapolaarjoonetagune maagiline maa, mida kuus kuud aastast katab kohev helevalge lumevaip. Käegakatsutav reisielamus ja suurte seikluste alguspaik.</p>
                </Fragment>
          }
          <div className="">
            <hr/>
            <Link href="/adventures?category=all"><a>{language ? 'Show all experiences' : 'Vaata kõiki elamusmatku'}</a></Link>
          </div>
        </div>
      </div>
    </div>
  </Fragment>
}
