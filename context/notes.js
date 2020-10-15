import React, { createContext, useContext, useReducer } from 'react';

const initialState = {
  note: null,
  notes: [],
  loading: true
}

export function NoteReducer(state = initialState, action) {
  const { type, payload } = action;

  switch (type) {
    case 'GET_NOTES':
      return {
        ...state,
        notes: payload,
        loading: false
      }
    case 'GET_NOTE':
      return {
        ...state,
        note: payload,
        loading: false
      }
    default:
      return state;
  }
}

const NoteStateCtx = createContext();
const NoteDispatchCtx = createContext();

export function useNoteState() {
  const context = useContext(NoteStateCtx);

  if (context === undefined) {
    throw new Error('useNoteState must be used within NoteProvider');
  }

  return context;
}

export function useNoteDispatch() {
  const context = useContext(NoteDispatchCtx);

  if (context === undefined) {
    throw new Error('useNoteDispatch must be used within NoteProvider');
  }

  return context;
}

export default function NoteProvider({ children }) {
  const [note, dispatch] = useReducer(NoteReducer, initialState);

  return <NoteStateCtx.Provider value={note}>
    <NoteDispatchCtx.Provider value={dispatch}>
      { children }
    </NoteDispatchCtx.Provider>
  </NoteStateCtx.Provider>
}
