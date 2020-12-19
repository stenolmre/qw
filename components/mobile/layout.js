import React, { Fragment } from 'react'
import Navbar from './navbar'
import share from './../arrays/share'

export default function MobileLayout({ children, heading, subheading, id }) {
  return <Fragment>
    <Navbar />
    <h1 className="mobile-layout-heading">{ heading }</h1>
    <p className="mobile-layout-subheading">{ subheading }</p>
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
    <div className="mobile-footer">
      <p>copyright @ 2020 by North Season</p>
    </div>
  </Fragment>
}
