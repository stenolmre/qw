import { Fragment } from 'react'
import Navbar from './navbar'
import Footer from './footer'
import Sidebar from './sidebar'

export default function Landing({ children }) {
  return <Fragment>
    <div className="landing">
      <div className="overlay"/>
      <div className="landing-content">
        <Navbar/>
          { children }
        <Footer/>
      </div>
      <Sidebar/>
    </div>
  </Fragment>
}
