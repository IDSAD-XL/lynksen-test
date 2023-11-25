import type { AppProps } from 'next/app'
import React from 'react'
import '../src/styles/globals.css'
import '../src/styles/style.scss'
import {store} from "@redux/store/store";
import {Provider} from "react-redux";

const App: React.FC<AppProps> = ({ Component, pageProps }) => {
  return (
    <Provider store={store}>
      <React.Fragment>
        <Component {...pageProps} />
      </React.Fragment>
    </Provider>
  )
}

export default App
