import React, { Fragment } from 'react'
import Navbar from './navbar'

export default function DesktopLayout({ children, sidebar, heading, subheading }) {
  return <Fragment>
    <div className="desktop-layout-left-container">
      <div className="desktop-layout-header">
        <Navbar />
      </div>
      <div style={{ padding: '25px 0 0 0' }}>
        { children }
      </div>
    </div>
    <div className="desktop-layout-right-container">
      { sidebar }
    </div>
  </Fragment>
}
