import useSWR from 'swr';

import Page from '../components/page'
import Section from '../components/section'
import Schedule from '../components/schedule'
import Alert from '../components/alert'

import { useOnlineStatus } from '../utils/online';
import useLocalStorage from '../utils/localStorage';

const fetcher = (url: string) => fetch(url).then((res) => res.json());

const SchedulePage = () => {
  const isOnline = useOnlineStatus()
  const [lastUpdate] = useLocalStorage("schedule.lastUpdate", null);

  const { data, error } = useSWR(`${process.env.ecranConnectesAddress}/v1/schedule`, fetcher)

  if (error) console.error(error);
  return (
    <Page title='Emploi du temps' showButtons={true}>
      {!isOnline && lastUpdate && <Alert category="Attention" content={"Vous êtes hors-ligne. L'emploi du temps à été mis-à-jour pour la dernière fois le: " + lastUpdate.toLocaleDateString('fr-FR', { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' })} />}
      {!isOnline && !lastUpdate && <Alert category="Attention" content="Vous êtes hors-ligne. L'emploi du temps est inaccessible. Reconnectez-vous pour l'avoir à jour." />}
      <Section>
        {error && <pre><code>{error}</code></pre>}
        {data && <Schedule data={data?.data || []} />}
      </Section>
    </Page>
  )
}

export default SchedulePage