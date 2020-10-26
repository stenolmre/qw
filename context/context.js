import React from 'react'
import PostProvider from './post';
import AlbumProvider from './album';
import AdventureProvider from './adventure';

export default function GlobalState({ children }) {
  return <PostProvider>
    <AlbumProvider>
      <AdventureProvider>
        { children }
      </AdventureProvider>
    </AlbumProvider>
  </PostProvider>
}
