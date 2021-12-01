import Section from './section'
import { Share, Edit2 } from 'react-feather'

type Props = {
  showButtons: boolean,
  subtitle?: React.ReactNode,
  children?: React.ReactNode
}

const Title = ({ showButtons, subtitle, children }) => (
  <Section>
    <div className="lg:flex lg:items-center lg:justify-between">
      <div className="flex-1 min-w-0">
        <h2 className="text-2xl font-bold leading-7 text-gray-900 dark:text-white sm:text-3xl sm:truncate">
          {children}
        </h2>
        {subtitle}
      </div>
      {showButtons && (
        <div className="flex mt-5 lg:mt-0 lg:ml-4">
          <span className="hidden sm:block">
            <button disabled type="button" className="inline-flex items-center px-4 py-2 text-sm font-medium text-gray-700 bg-white border border-gray-300 rounded-md shadow-sm disabled:opacity-50 hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500">
              <Edit2 />&nbsp;
              Modifier
            </button>
          </span>

          <span className="hidden ml-3 sm:block">
            <button type="button" className="inline-flex items-center px-4 py-2 text-sm font-medium text-gray-700 bg-white border border-gray-300 rounded-md shadow-sm hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500">
              <Share />&nbsp;
              Partager
            </button>
          </span>
        </div>
      )}
    </div>
  </Section>
)

export default Title
