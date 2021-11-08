
import Head from 'next/head';
import Image from 'next/image'

import styles from './home.module.scss';

export default function Home() {
  return (
    <>
      <Head>
        <title>Home | ig.news</title>
      </Head>
      
      <main className={styles.contentContainer}>
        <section className={styles.hero}>
          <span>👏 Hey, Welcome</span>
          <h1>News about the <span>React</span> World.</h1>

          <p>
            Get access to the all publications <br />
            <span>for $9.90 month</span>
          </p>
        </section>

        <Image src="/images/avatar.svg" alt="Girl coding" width="366" height="400" />
      </main>
    </>
  )
}
