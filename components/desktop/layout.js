import React, { Fragment, useState, useEffect } from 'react'
import Navbar from './navbar'

export default function DesktopLayout({ children, sidebar, heading, subheading }) {
  const [windowHeight, setWindowHeight] = useState(null)

  useEffect(() => {
    setWindowHeight(window.innerHeight)

    window.addEventListener("resize", () => setWindowHeight(window.innerHeight))

    return () => window.addEventListener("resize", () => setWindowHeight(window.innerHeight))
  }, [])

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
    <style jsx>{`
      .desktop-layout-right-container {
        position: ${ windowHeight < 720 ? 'absolute' : 'fixed' }
      }
    `}</style>
  </Fragment>
}
