import Page from '../components/page'
import Section from '../components/section'

import Alert from '../components/alert'

export default () => {

  return (
    <Page title="Accueil">
      <Section>
        <Alert category="Info" color="blue" content="Changez votre année/groupe dans les paramètres si nécessaire." />
      </Section>

    </Page>
  )
}
