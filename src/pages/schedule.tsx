import useSWR from 'swr';

import Page from '../components/page'
import Section from '../components/section'
import Schedule from '../components/schedule'
import Alert from '../components/alert'

import { useOnlineStatus } from '../utils/online';
import useLocalStorage from '../utils/localStorage';
import { useEffect } from 'react';
import { AlertTriangle } from 'react-feather';

const fetcher = (url: string) => fetch(url).then((res) => res.json());

const SchedulePage = () => {
  const isOnline = useOnlineStatus()
  const [lastUpdate, setLastUpdate] = useLocalStorage("schedule.lastUpdate", null);
  const [scheduleData, setScheduleData] = useLocalStorage("schedule.data", []);

  const { data, error } = useSWR(`${process.env.NEXT_PUBLIC_ECRANS_CONNECTES_URL}/v1/schedule`, fetcher)

  useEffect(() => {
    if (!data || !data.data || error) return;
    console.log("Mise à jour de l'emploi du temps :");
    console.log(new Date());
    setScheduleData(data.data);
    setLastUpdate(new Date());
  }, [data])

  return (
    <Page title='Emploi du temps' showButtons={true}>
      {!isOnline && lastUpdate && <Alert category={<AlertTriangle />} color="yellow" content={"Vous êtes hors-ligne. L'emploi du temps à été mis-à-jour pour la dernière fois le: " + new Date(lastUpdate).toLocaleString('fr-FR', { hour: 'numeric', minute: 'numeric', weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' })} />}
      {!isOnline && !lastUpdate && <Alert category={<AlertTriangle />} color="yellow" content="Vous êtes hors-ligne. L'emploi du temps est inaccessible. Reconnectez-vous pour l'avoir à jour." />}
      {error && lastUpdate && <Alert category={<AlertTriangle />} color="yellow" content={"Impossible de se connecter au serveur des écrans connectés. L'emploi du temps à été mis-à-jour pour la dernière fois le: " + new Date(lastUpdate).toLocaleString('fr-FR', { hour: 'numeric', minute: 'numeric', weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' })} />}
      <Section>
        {scheduleData && <Schedule data={scheduleData} />}
      </Section>
    </Page>
  )
}

export default SchedulePage