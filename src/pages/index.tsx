import Page from '../components/page'
import Section from '../components/section'
import FakeList from '../components/fake-list'
import { getPlaceholderName } from '../helpers'

export default () => {
  const data = []

  for (let i = 0; i < 10; i++) {
    data.push(getPlaceholderName())
  }

  return (
    <Page>
      <Section>
        <h2>Home</h2>

        <div className="m-1 pt-4 text-center">
          <div className="p-2">
            <div className="inline-flex items-center bg-white leading-none text-pink-600 rounded-full p-2 shadow text-yellow text-sm">
              <span className="inline-flex bg-yellow-400 text-white rounded-full h-6 px-3 justify-center items-center">Information</span>
              <span className="inline-flex text-xs sm:text-base px-2">Changez votre année/groupe dans les paramètres si nécessaire.</span>
            </div>
          </div>
        </div>
      </Section>

      <FakeList />
    </Page>
  )
}
