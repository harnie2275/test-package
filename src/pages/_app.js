
import ReduxProvider from '@/lib/redux/store/providers/ReduxProvider'
import '@/styles/globals.css'

export default function App({ Component, pageProps }) {
  return <ReduxProvider>
    <Component {...pageProps} />
  </ReduxProvider>
}
