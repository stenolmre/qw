import './../styles.css';
import GlobalState from './context/context';

// This default export is required in a new `pages/_app.js` file.
export default function MyApp({ Component, pageProps }) {
  return <GlobalState>
    <Component {...pageProps} />
  </GlobalState>
}
