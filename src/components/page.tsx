import Head from 'next/head'
import Appbar from './appbar'
import BottomNav from './bottom-nav'
import Title from './title'

type Props = {
  title?: string,
  subtitle?: React.ReactNode,
  showButtons?: boolean,
  children: React.ReactNode
}

const Page = ({ title, showButtons, subtitle, children }: Props) => (
  <>
    <Head>
      <title>{title ? `${process.env.title || 'PWA'} | ${title}` : process.env.title || 'PWA'}</title>
    </Head>

    <Appbar />

    <main>
      <Title showButtons={showButtons} subtitle={subtitle}>{title}</Title>
      {children}
    </main>

    <BottomNav />

    <style jsx>{`
      main {
        margin: 0 auto;
        padding-top: calc(env(safe-area-inset-top) + 73px);
        padding-bottom: calc(env(safe-area-inset-bottom) + 73px);
        max-width: 40em;
        height: 100%;
        min-height: 100vh;
        background: var(--base);
        transition: var(--transition-colors);
      }
    `}</style>
  </>
)

Page.defaultProps = {
  title: '',
}

export default Page
