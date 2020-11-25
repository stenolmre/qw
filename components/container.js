import React from 'react'
import Navbar from './navbar'
import Footer from './footer'

export default function Container({ children }) {
  return <main>
    <Navbar />
    { children }
    <Footer/>
  </main>
}
