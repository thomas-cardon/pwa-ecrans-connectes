import Head from 'next/head'
import { AppProps } from 'next/app'
import '../styles/global.css'

const App = ({ Component, pageProps }: AppProps) => (
  <>
    <Head>
      <title>Aix-Marseille PWA</title>
      <meta charSet='utf-8' />
      <meta name='mobile-web-app-capable' content='yes' />
      <meta name='apple-mobile-web-app-capable' content='yes' />
      <meta
        name='apple-mobile-web-app-status-bar-style'
        content='black-translucent'
      />
      <meta name='apple-mobile-web-app-title' content='Aix-Marseille PWA' />
      <meta name='application-name' content='Aix-Marseille PWA' />
      <meta
        name='description'
        content="Accédez à votre emploi du temps en un clin d'oeil"
      />
      <meta name='theme-color' content='#457ef7' />
      <meta
        name='viewport'
        content='width=device-width, initial-scale=1, user-scalable=0, viewport-fit=cover'
      />
      <link rel='apple-touch-icon' href='/images/icon-192.png' />
      <link rel='icon' type='image/png' href='/favicon.png' />
      <link rel='manifest' href='/manifest.json' />
    </Head>

    <Component {...pageProps} />
  </>
)

export default App
