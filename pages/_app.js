import './../css/styles.css'
import './../css/components.css'
import './../css/pages.css'
import './../css/mobile.css'
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
  </GlobalState>
}
