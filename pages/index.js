import { Fragment } from 'react';
import Head from 'next/head';

export default function Index() {
  return <Fragment>
    <Head>
      <title>qw</title>
    </Head>
    <div>{process.env.GREETING}</div>
  </Fragment>
}
