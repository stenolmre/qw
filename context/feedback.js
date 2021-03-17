import React, { createContext, useContext, useReducer } from 'react';
import { FeedbackReducer, initialState } from './../reducers/feedback'

const FeedbackStateCtx = createContext();
const FeedbackDispatchCtx = createContext();

export function useFeedbackState() {
  const context = useContext(FeedbackStateCtx);

  if (context === undefined) throw new Error('useFeedbackState must be used within FeedbackProvider');

  return context;
}

export function useFeedbackDispatch() {
  const context = useContext(FeedbackDispatchCtx);

  if (context === undefined) throw new Error('useFeedbackDispatch must be used within FeedbackProvider');

  return context;
}

export default function FeedbackProvider({ children }) {
  const [feedback, dispatch] = useReducer(FeedbackReducer, initialState);

  return <FeedbackStateCtx.Provider value={feedback}>
    <FeedbackDispatchCtx.Provider value={dispatch}>
      { children }
    </FeedbackDispatchCtx.Provider>
  </FeedbackStateCtx.Provider>
}
