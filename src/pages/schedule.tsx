import useSWR from 'swr';

import Page from '../components/page'
import Section from '../components/section'
import Schedule from '../components/schedule'

const fetcher = (url: string) => fetch(url).then((res) => res.json());

const SchedulePage = () => {
  const { data, error } = useSWR(`${process.env.ecranConnectesAddress}/v1/schedule`, fetcher)

  if (error) console.error(error);
  return (
    <Page title='Emploi du temps' showButtons={true}>
      <Section>
        {error && <pre><code>{error}</code></pre>}
        {data && <Schedule data={data?.data || []} />}
      </Section>
    </Page>
  )
}

export default SchedulePage