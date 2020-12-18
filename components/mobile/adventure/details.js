import React from 'react'
import { useAdventureState } from './../../../context/adventure'

export default function Details() {
  const { adventure } = useAdventureState()

  return <div className="mobile-adventure-page-details">
    <h1>DETAILS</h1>
    <hr/>
    <List name="What is included?">
      {
        adventure.isIncluded.map(e => <p key={e}><i className="fas fa-check"/> {e}</p>)
      }
    </List>
    <List name="Start & Finish">
      <p><i className="fas fa-map-pin"/>{adventure.location.start}</p>
      <p><i className="fas fa-flag-checkered"/>{adventure.location.finish}</p>
    </List>
  </div>
}

function List({ name, children }) {
  return <div className="mobile-adventure-page-details-list">
    <h3>{name}</h3>
    {children}
  </div>
}
