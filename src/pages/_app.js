import { ModeDistanceProvider } from '../../contexts/ModeDistance'
import '@/styles/globals.css'

export default function App({ Component, pageProps }) {
  return (
    <>
    <ModeDistanceProvider> 
      <Component {...pageProps} />
    </ModeDistanceProvider>
    </>
  )
}
