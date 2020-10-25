import React, { createContext, useContext, useReducer } from 'react';
import { AlbumReducer, initialState } from './../reducers/album'

const AlbumStateCtx = createContext();
const AlbumDispatchCtx = createContext();

export function useAlbumState() {
  const context = useContext(AlbumStateCtx);

  if (context === undefined) throw new Error('useAlbumState must be used within AlbumProvider');

  return context;
}

export function useAlbumDispatch() {
  const context = useContext(AlbumDispatchCtx);

  if (context === undefined) throw new Error('useAlbumDispatch must be used within AlbumProvider');

  return context;
}

export default function AlbumProvider({ children }) {
  const [album, dispatch] = useReducer(AlbumReducer, initialState);

  return <AlbumStateCtx.Provider value={album}>
    <AlbumDispatchCtx.Provider value={dispatch}>
      { children }
    </AlbumDispatchCtx.Provider>
  </AlbumStateCtx.Provider>
}
