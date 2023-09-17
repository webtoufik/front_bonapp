import '@/styles/globals.css'

import { Pacifico } from 'next/font/google'
 
// If loading a variable font, you don't need to specify the font weight
const pacifico = Pacifico({ weight: '400', subsets: ['latin'] })


export default function App({ Component, pageProps }) {
  return <Component className={pacifico.className} {...pageProps} />
}
