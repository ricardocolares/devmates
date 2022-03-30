import type { AppProps } from 'next/app'
import { Header } from '../Header'
import '../styles/global.css'

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
    <Header />
    <Component {...pageProps} />
    </>
  )
}

export default MyApp
