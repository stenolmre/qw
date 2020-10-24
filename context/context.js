import PostProvider from './post';

export default function GlobalState({ children }) {
  return <PostProvider>
    { children }
  </PostProvider>
}
