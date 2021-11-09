
import Head from 'next/head';
import Image from 'next/image';
import {GetServerSideProps} from 'next';

import { SubscribeButton } from '../components/SubscribeButton';

import { stripe } from '../services/stripe';

import styles from './home.module.scss';

interface HomeProps {
  product: {
    priceId: string;
    amount: number;
  }
}

export default function Home({product}: HomeProps) { 
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
            <span>for {product.amount} month</span>
          </p>

          <SubscribeButton priceId={product.priceId}/>
        </section>

        <Image src="/images/avatar.svg" alt="Girl coding" width="366" height="400" />
      </main>
    </>
  )
}

export const getServerSideProps: GetServerSideProps = async () => {
  console.log('ok');
  const price = await stripe.prices.retrieve('price_1JtuDwDMGv72GozVCjh1lpo8')

  const product = {
    priceId: price.id,
    amount: new Intl.NumberFormat('en-US', {
      style: 'currency',
      currency: 'USD',
    }).format(price.unit_amount / 100),
  }

  return {
    props: {
      product,
    }
  }
}