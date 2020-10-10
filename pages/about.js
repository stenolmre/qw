import { Fragment } from 'react';
import Head from 'next/head';

export default function About() {
  return <Fragment>
    <Head>
      <title>qw - about us</title>
    </Head>
    <div>What would you like to know?</div>
    <div>{process.env.GREETING}</div>
  </Fragment>
}
