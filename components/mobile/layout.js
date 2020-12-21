import React, { Fragment } from 'react'
import Navbar from './navbar'
import Images from './adventure/images'
import Footbar from './footbar'
import share from './../arrays/share'

export default function MobileLayout({ userLanguage, adventure, paragraph, children, heading, subheading, id }) {
  return <Fragment>
    <Navbar userLanguage={userLanguage}/>
    {
      adventure && <Images/>
    }
    <h1 className="mobile-layout-heading">{ heading }</h1>
    <p style={paragraph ? { textAlign: 'jusitify' } : { textAlign: 'center' }} className="mobile-layout-subheading">{ subheading }</p>
    <div className="mobile-layout-social">
      {
        share.map(e => <div key={e.name}>
          <a href={e.name === 'Messenger' ? `${e.link}${heading}` : `${e.link}${id}`} target="_blank">
            <i style={{ color: e.color }} className={`fab fa-${e.icon}`}/>
          </a>
        </div>)
      }
    </div>
    <div className="mobile-layout-children">
      <hr/>
      { children }
    </div>
    <Footbar />
    <div className="mobile-footer">
      <p>copyright @ 2020 by North Season</p>
      <div>
        <a href="https://instagram.com/me_and_olmre" target="_blank"><i className="fab fa-instagram"/></a>
      </div>
    </div>
  </Fragment>
}
