import Head from 'next/head'
import '../styles/global.css'

const App = ({ Component, pageProps }) => {

  return (
    <>
      <Head>
        <title>{process.env.title}</title>
        <meta charSet='utf-8' />
        <meta name='mobile-web-app-capable' content='yes' />
        <meta name='apple-mobile-web-app-capable' content='yes' />
        <meta
          name='apple-mobile-web-app-status-bar-style'
          content='black-translucent'
        />
        <meta name='apple-mobile-web-app-title' content={process.env.title} />
        <meta name='application-name' content={process.env.title} />
        <meta
          name='description'
          content="Accédez à votre emploi du temps en un clin d'oeil"
        />
        <meta name='theme-color' content='#1f2022' />
        <meta
          name='viewport'
          content='width=device-width, initial-scale=1, user-scalable=0, viewport-fit=cover'
        />
        <link rel='apple-touch-icon' href='/images/icon-192.png' />
        <link rel='icon' type='image/png' href='/favicon.png' />
        <link rel='manifest' href='/manifest.json' />

        <script src="https://cdn.onesignal.com/sdks/OneSignalSDK.js" async />
      </Head>

      <Component {...pageProps} />
    </>
  )
}

export default App
