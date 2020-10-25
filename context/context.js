import PostProvider from './post';
import AlbumProvider from './album';

export default function GlobalState({ children }) {
  return <PostProvider>
    <AlbumProvider>
      { children }
    </AlbumProvider>
  </PostProvider>
}
