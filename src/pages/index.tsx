import Page from '../components/page'
import Section from '../components/section'
import Button from '../components/input/button'

import { Settings } from 'react-feather'

export default () => {

  return (
    <Page title="Accueil">
      <Section>
        <h2 className="text-2xl font-display">Info</h2>
        <p className="text-md dark:text-gray-200">Changez votre année/groupe dans les paramètres si nécessaire.</p>
        <Button href="/settings" icon={<Settings />}>
          Paramètres
        </Button>
      </Section>

    </Page>
  )
}
