import React, { Fragment } from 'react'
import Link from 'next/link'
import Navbar from './../navbar'
import Adventures from './adventures'
import Categories from './categories'
import Gallery from './gallery'
import MobileContact from './contact'
import { landingest, landingeng } from './../texts/landing'
import categories from './../arrays/categories'
import categoriesEst from './../arrays/categoriesEst'

export default function MobileLanding({ userLanguage }) {
  return <Fragment>
    <div className="mobile-landing">
      <h1>Travel to inspire your life!</h1>
      <Menuitem/>
    </div>
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
      <path fill="rgba(90, 95, 223)" fill-opacity="1" d="M0,288L18.5,288C36.9,288,74,288,111,272C147.7,256,185,224,222,213.3C258.5,203,295,213,332,181.3C369.2,149,406,75,443,42.7C480,11,517,21,554,32C590.8,43,628,53,665,90.7C701.5,128,738,192,775,213.3C812.3,235,849,213,886,213.3C923.1,213,960,235,997,208C1033.8,181,1071,107,1108,80C1144.6,53,1182,75,1218,96C1255.4,117,1292,139,1329,122.7C1366.2,107,1403,53,1422,26.7L1440,0L1440,0L1421.5,0C1403.1,0,1366,0,1329,0C1292.3,0,1255,0,1218,0C1181.5,0,1145,0,1108,0C1070.8,0,1034,0,997,0C960,0,923,0,886,0C849.2,0,812,0,775,0C738.5,0,702,0,665,0C627.7,0,591,0,554,0C516.9,0,480,0,443,0C406.2,0,369,0,332,0C295.4,0,258,0,222,0C184.6,0,148,0,111,0C73.8,0,37,0,18,0L0,0Z"></path>
    </svg>

    <Adventures userLanguage={userLanguage}/>

  </Fragment>
}

const Menuitem = () => <div className="menu-icon">
  <div className="menu-icon-top"/>
  <div className="menu-icon-bottom"/>
</div>
