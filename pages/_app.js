import React, { useEffect } from 'react'
import Cookies from 'js-cookie'

import GlobalState from './../context/context'

import './../css/styles.css'
import '@fortawesome/fontawesome-free/css/all.min.css';

export default function MyApp({ Component, pageProps }) {
  useEffect(() => {
    if (Cookies.get('lan')) {
      Cookies.get('lan')
    } else {
      Cookies.set('lan', 'est')
    }
  })
  return <GlobalState>
    <Component {...pageProps} />
    <style jsx>{`
      @import url('https://fonts.googleapis.com/css2?family=Gochi+Hand&family=Montserrat:wght@400;600;700;900&display=swap');
    `}</style>
  </GlobalState>
}
