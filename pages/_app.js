import './../css/styles.css'
import './../css/components.css'
import './../css/pages.css'
import GlobalState from './../context/context'

export default function MyApp({ Component, pageProps }) {
  return <GlobalState>
    <Component {...pageProps} />
  </GlobalState>
}
