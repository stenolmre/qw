import React from 'react'

import Navbar from './navbar'
import Toolbar from './toolbar'

const Layout = ({ children }) => {
  return <div className="layout_container">
    <div className="layout">
      <Navbar />
      <Toolbar />
      <div className="layout_content">
        { children }
      </div>
    </div>
  </div>
}

export default Layout
