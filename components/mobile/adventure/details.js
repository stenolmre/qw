import React from 'react'
import { useAdventureState } from './../../../context/adventure'

export default function Details() {
  const { adventure } = useAdventureState()

  return <div className="mobile-adventure-page-details">
    <h1>DETAILS</h1>
    <List name="What is included?">
      {
        adventure.isIncluded.map(e => <p key={e}><i className="fas fa-check"/> {e}</p>)
      }
    </List>
    <List name="Start & Finish">
      <p><i className="fas fa-map-pin"/>{adventure.location.start}</p>
      <p><i className="fas fa-flag-checkered"/>{adventure.location.finish}</p>
    </List>
    <List name="Group Tickets">
      <p>We offer special discount for groups bigger than 7 people. Please contact us for more information via <a href="mailto:northseason@gmail.com">email</a> or call us on <a href="tel:37258553625">+372 5855 3625</a>.</p>
    </List>
    <List name="Booking Refund">
      <p><i className="fas fa-undo-alt"/> Me tagastame 100% summast kui broneering tühistatakse 7 või rohkem päevi enne matka algust.</p>
      <p><i className="fas fa-undo"/> Me tagastame 50% summast kui broneering tühistatakse vähem kui 7 päeva enne matka algust.</p>
    </List>
  </div>
}

function List({ name, children }) {
  return <div className="mobile-adventure-page-details-list">
    <h3>{name}</h3>
    {children}
  </div>
}
