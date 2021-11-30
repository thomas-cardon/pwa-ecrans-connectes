import Link from 'next/link'
import Brand from './brand'
import Avatar from './avatar'

const Header = () => {
  return (
    <header>
      <Brand />

      <div style={{ flex: 1 }} />

      <nav>
        <div className='divider' />

        <Link href='/profile'>
          <a title='Profile' aria-label='Profile'>
            <Avatar image='/images/avatar.jpg' />
          </a>
        </Link>
      </nav>

      <style jsx>{`
        header {
          padding: 0 var(--gap);
          padding-top: env(safe-area-inset-top);
          width: 100%;
          height: calc(env(safe-area-inset-top) + 72px);
          background: var(--base);
          border-bottom: 1px solid var(--divider);
          display: flex;
          align-items: center;
          z-index: 10;
          position: fixed;
          top: 0;
          left: 0;
          transition: var(--transition-colors);
        }

        nav {
          display: flex;
          align-items: center;
          z-index: 4;
        }

        .divider {
          margin: 0 var(--gap);
          width: 1px;
          height: 28px;
          background: var(--divider);
          display: flex;
          transition: var(--transition-colors);
        }
      `}</style>
    </header>
  )
}

export default Header
