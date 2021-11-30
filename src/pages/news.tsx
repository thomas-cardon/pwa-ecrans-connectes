import useSWR from 'swr';

import NewsCard from '../components/news-card'
import Page from '../components/page'
import Section from '../components/section'

const fetcher = (url: string) => fetch(url).then((res) => res.json());

const Tasks = () => {
  const { data } = useSWR(`${process.env.ecranConnectesAddress}/v1/information`, fetcher)

  return (
    <Page title='Informations'>
      <Section>
        <div className="space-y-4">
          {data && data.map((news: any) => (
            <NewsCard key={news.id} title={news.title} content={news.content} link={news.content_link} type={news.type} />
          ))}
        </div>
      </Section>

    </Page>
  );
};

export default Tasks
