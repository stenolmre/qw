import { Fragment } from 'react'
import Navbar from './navbar'
import Footer from './footer'

export default function layout({ children, navbar }) {
  return <Fragment>
    <Navbar backgroground={navbar}/>
    { children }
    <Footer/>
  </Fragment>
}
