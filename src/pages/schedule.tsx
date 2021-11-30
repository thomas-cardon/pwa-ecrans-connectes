import Page from '../components/page'
import Section from '../components/section'
import Schedule from '../components/schedule'

const SchedulePage = () => (
  <Page title='Emploi du temps'>
    <Section>
      <h2 className="text-3xl">Emploi du temps</h2>
    </Section>

    <Section>
      <Schedule />
    </Section>
  </Page>
)

export default SchedulePage