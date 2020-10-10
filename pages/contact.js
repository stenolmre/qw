import { Fragment } from 'react';
import Head from 'next/head';
import axios from 'axios';

export default function Contact({ notes }) {
  return <Fragment>
    <Head>
      <title>qw - contact</title>
    </Head>
    <div>What is your request?</div>
    <div>
      {
        notes.data.map(note => <h2 key={note._id}>{note.title}</h2>)
      }
    </div>
  </Fragment>
}

Contact.getInitialProps = async () => {
  const { data } = await axios.get('https://qw-kappa.vercel.app/api/notes');

  return { notes: data }
}
