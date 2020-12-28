import React, { Fragment } from 'react'
import Navbar from './navbar'
import Images from './adventure/images'
import Footbar from './footbar'
import share from './../arrays/share'

export default function MobileLayout({ userLanguage, adventure, paragraph, children, heading, subheading, id, buttonName, buttonAction }) {
  return <Fragment>
    <Navbar userLanguage={userLanguage}/>
    {
      adventure && <Images/>
    }
    <h1 className="mobile-layout-heading">{ heading }</h1>
    <p style={paragraph ? { textAlign: 'jusitify' } : { textAlign: 'center' }} className="mobile-layout-subheading">{ subheading }</p>
    {
      adventure && <button className="mobile-layout-button" onClick={buttonAction}>{buttonName}</button>
    }
    {
      adventure
        ? null
        : <div className="mobile-layout-social">
          {
            share.map(e => <div key={e.name}>
              <a href={e.name === 'Messenger' ? `${e.link}${heading}` : `${e.link}${id}`} target="_blank">
                <i style={{ color: e.color }} className={`fab fa-${e.icon}`}/>
              </a>
            </div>)
          }
        </div>
    }
    <div className="mobile-layout-children">
      <hr/>
      { children }
    </div>
    <Footbar />
  </Fragment>
}
