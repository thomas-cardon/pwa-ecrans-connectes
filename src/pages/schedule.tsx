import Page from '../components/page'
import Section from '../components/section'
import Schedule from '../components/schedule'

const SchedulePage = () => (
  <Page title='Emploi du temps' showButtons={true}>
    <Section>
      <Schedule />
    </Section>
  </Page>
)

export default SchedulePage