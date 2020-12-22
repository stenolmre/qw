import './../css/styles.css'
import './../css/components.css'
import './../css/pages.css'
import './../css/mobile.css'
import './../css/adventures.css'
import '@fortawesome/fontawesome-free/css/all.min.css';
import GlobalState from './../context/context'
import { useEffect } from 'react'
import Cookies from 'js-cookie'

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
      @import url('https://fonts.googleapis.com/css2?family=Nerko+One&family=Montserrat:wght@400;600;700;900&display=swap');
      @import url('https://fonts.googleapis.com/css2?family=Nanum+Pen+Script&display=swap');
    `}</style>
  </GlobalState>
}
