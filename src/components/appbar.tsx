import Brand from './brand'

import { useOnlineStatus } from '../utils/online'
import { Wifi, WifiOff, User, Moon } from 'react-feather'

const Header = () => {
  const isOnline = useOnlineStatus()

  return (
    <header className="bg-white dark:bg-gray-500">
      <Brand />

      <div style={{ flex: 1 }} />

      <nav>
        {isOnline ? <Wifi /> : <WifiOff />}
        <div className='divider' />
        <Moon className="opacity-50" />
        <div className='divider' />
        <User className="opacity-50" />
      </nav>

      <style jsx>{`
        header {
          padding: 0 var(--gap);
          padding-top: env(safe-area-inset-top);
          width: 100%;
          height: calc(env(safe-area-inset-top) + 72px);
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
