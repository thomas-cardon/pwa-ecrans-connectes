import Page from '../components/page'
import Section from '../components/section'

export default () => {

  return (
    <Page title="Accueil">
      <Section>
        <div className="m-1 pt-4 text-center">
          <div className="p-2">
            <div className="inline-flex items-center bg-white leading-none text-pink-600 rounded-lg p-2 shadow text-yellow text-sm">
              <span className="inline-flex bg-yellow-400 text-white rounded-full h-6 px-3 justify-center items-center">Info</span>
              <span className="inline-flex text-xs sm:text-base px-2 break-all">Changez votre année/groupe dans les paramètres si nécessaire.</span>
            </div>
          </div>
        </div>
      </Section>

    </Page>
  )
}
