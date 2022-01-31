import * as React from 'react'
import Head from 'next/head'
import dynamic from 'next/dynamic'
import '../styles/globals.scss'
import { Web3Provider } from '@ethersproject/providers'
import { Web3ReactProvider } from '@web3-react/core'
import { AppProps } from 'next/dist/shared/lib/router/router'
import ActiveLink from '../components/ActiveLink'
import { SEO } from '../config'
import { Navigation } from '@iotabots/components'

// eslint-disable-next-line @typescript-eslint/no-explicit-any
const getLibrary = (provider: any): Web3Provider => {
  const library = new Web3Provider(provider)
  library.pollingInterval = 1000
  return library
}

const MENU = [
  <ActiveLink href='/' label='Tokenomics' />,
  <ActiveLink href='/metaverse' label='Metaverse' />,
  <ActiveLink href='/game' label='Game' />,
]

const YOUR_TRACKING_ID = 'G-YTZ512CCQL'

const ThemeProvider = dynamic(() => import('../contexts/Theme'), { ssr: false })

const App: React.FC<AppProps> = (props) => {
  const { pageProps, Component } = props

  return (
    <>
      <Head>
        <title>{SEO.title}</title>
        <meta name='viewport' content='initial-scale=1, width=device-width' />
        <link rel='apple-touch-icon' sizes='180x180' href='favicon.ico' />
        <link rel='icon' type='image/png' sizes='32x32' href='favicon.ico' />
        <link rel='icon' type='image/png' sizes='16x16' href='favicon.ico' />
        <link rel='manifest' href='favicon/site.webmanifest' />
        <link rel='mask-icon' href='/safari-pinned-tab.svg' color='#20c593' />
        <link rel='preconnect' href='https://fonts.googleapis.com' />
        <link rel='preconnect' href='https://fonts.gstatic.com' />
        <link
          href='https://fonts.googleapis.com/css2?family=Inter:wght@400;600&family=Sarpanch:wght@800&display=swap'
          rel='stylesheet'
        />

        <meta name='msapplication-TileColor' content='#da532c' />
        <meta name='theme-color' content='#ffffff' />
        <meta key='description' name='description' content={SEO.description} />
        <meta key='og:type' name='og:type' content={SEO.openGraph.type} />
        <meta key='og:title' name='og:title' content={SEO.openGraph.title} />
        <meta
          key='og:description'
          name='og:description'
          content={SEO.openGraph.description}
        />
        <meta key='og:url' name='og:url' content={SEO.openGraph.url} />
        <meta key='og:image' name='og:image' content={SEO.openGraph.image} />
        <meta name='keywords' content='IOTA, NFT, Metaverse, DeFi, EVM' />
        <script
          async
          // eslint-disable-next-line max-len
          src={`https://www.googletagmanager.com/gtag/js?id=${YOUR_TRACKING_ID}`}
        />
        <script
          async
          // eslint-disable-next-line react/no-danger
          dangerouslySetInnerHTML={{
            __html: `window.dataLayer = window.dataLayer || [];
              function gtag(){dataLayer.push(arguments);}
              gtag('js', new Date());
            
              gtag('config', '${YOUR_TRACKING_ID}');`,
          }}
        />
      </Head>
      <ThemeProvider>
        <Web3ReactProvider getLibrary={getLibrary}>
          <Navigation identity menu={MENU} mobileMenu={MENU} />
          <Component {...pageProps} />
        </Web3ReactProvider>
      </ThemeProvider>
    </>
  )
}

export default App
