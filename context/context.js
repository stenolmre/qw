import React from 'react'
import PostProvider from './post'
import AlbumProvider from './album'
import AdventureProvider from './adventure'
import ContactProvider from './contact'
import FeedbackProvider from './feedback'

export default function GlobalState({ children }) {
  return <PostProvider>
    <AlbumProvider>
      <AdventureProvider>
        <ContactProvider>
          <FeedbackProvider>
            { children }
          </FeedbackProvider>
        </ContactProvider>
      </AdventureProvider>
    </AlbumProvider>
  </PostProvider>
}
