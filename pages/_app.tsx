import type { AppProps } from 'next/app'
import React from 'react'
import '../src/styles/globals.css'
import '../src/styles/style.scss'

const App: React.FC<AppProps> = ({ Component, pageProps }) => {
  return (
      <React.Fragment>
        <Component {...pageProps} />
      </React.Fragment>
  )
}

export default App
