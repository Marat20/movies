import Film from '@/components/Films/Film';
import { Layout } from '@/components/layout/Layout';
import { IFilms } from '@/interface/interface';
import { GetStaticProps } from 'next';
import styles from '../styles/Home.module.scss';

export default function Home({ data }: IFilms) {
  return (
    <Layout>
      <section className={styles.grid}>
        {data?.map((item) => (
          <Film key={item.id} {...item} />
        ))}
      </section>
    </Layout>
  );
}

export const getStaticProps: GetStaticProps = async () => {
  const res = await fetch('https://kinobd.ru/api/films');
  const data: IFilms = await res.json();

  return { props: { data: data.data.slice(0, 10) } };
};
