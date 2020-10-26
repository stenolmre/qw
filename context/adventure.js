import React, { createContext, useContext, useReducer } from 'react';
import { AdventureReducer, initialState } from './../reducers/adventure'

const AdventureStateCtx = createContext();
const AdventureDispatchCtx = createContext();

export function useAdventureState() {
  const context = useContext(AdventureStateCtx);

  if (context === undefined) throw new Error('useAdventureState must be used within AdventureProvider');

  return context;
}

export function useAdventureDispatch() {
  const context = useContext(AdventureDispatchCtx);

  if (context === undefined) throw new Error('useAdventureDispatch must be used within AdventureProvider');

  return context;
}

export default function AdventureProvider({ children }) {
  const [adventure, dispatch] = useReducer(AdventureReducer, initialState);

  return <AdventureStateCtx.Provider value={adventure}>
    <AdventureDispatchCtx.Provider value={dispatch}>
      { children }
    </AdventureDispatchCtx.Provider>
  </AdventureStateCtx.Provider>
}
