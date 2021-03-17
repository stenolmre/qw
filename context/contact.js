import React, { createContext, useContext, useReducer } from 'react';
import { ContactReducer, initialState } from './../reducers/contact'

const ContactStateCtx = createContext();
const ContactDispatchCtx = createContext();

export function useContactState() {
  const context = useContext(ContactStateCtx);

  if (context === undefined) throw new Error('useContactState must be used within ContactProvider');

  return context;
}

export function useContactDispatch() {
  const context = useContext(ContactDispatchCtx);

  if (context === undefined) throw new Error('useContactDispatch must be used within ContactProvider');

  return context;
}

export default function ContactProvider({ children }) {
  const [contact, dispatch] = useReducer(ContactReducer, initialState);

  return <ContactStateCtx.Provider value={contact}>
    <ContactDispatchCtx.Provider value={dispatch}>
      { children }
    </ContactDispatchCtx.Provider>
  </ContactStateCtx.Provider>
}
