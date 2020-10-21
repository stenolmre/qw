import { Fragment, useMemo } from 'react';
import Head from 'next/head';
import { useNoteState, useNoteDispatch } from './../context/notes';
import getNotes from './../actions/notes';

export default function Contact() {
  const stateNote = useNoteState();
  const dispatchNote = useNoteDispatch();

  const { notes } = stateNote;

  useMemo(() => {
    getNotes(dispatchNote)
  }, [dispatchNote])

  return <Fragment>
    <Head>
      <title>qw - {notes.data && notes.data[0].title}</title>
    </Head>
    <div>What is your request?</div>
    <div>
      {
        notes.data && notes.data.map(note => <p key={note._id}>{note.title}</p>)
      }
    </div>
  </Fragment>
}
