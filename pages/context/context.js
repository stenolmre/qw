import { NoteProvider } from './notes';

export default function GlobalState({ children }) {
  return <NoteProvider>
    { children }
  </NoteProvider>
}
