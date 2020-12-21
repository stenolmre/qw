import React from 'react'
import { useAdventureState } from './../../../context/adventure'

export default function Details({ userLanguage }) {
  const { adventure } = useAdventureState()

  return <div className="mobile-adventure-page-details">
    <List name={userLanguage ? 'What is included?' : 'Mida hind sisaldab?'}>
      {
        userLanguage
          ? adventure.isIncluded.map(e => <p key={e}><i className="fas fa-check"/> {e}</p>)
          : adventure.hinnas.map(e => <p key={e}><i className="fas fa-check"/> {e}</p>)
      }
    </List>
    <List name={userLanguage ? 'Start & Finish' : 'Algus & Lõpp'}>
      <p><i className="fas fa-map-pin"/>{adventure.location.start}</p>
      <p><i className="fas fa-flag-checkered"/>{adventure.location.finish}</p>
    </List>
    <List name={userLanguage ? 'Group Tickets' : 'Grupi Soodustus'}>
      {
        userLanguage
          ? <p>We offer special discount for groups bigger than 7 people. Please contact us for more information via <a href="mailto:northseason@gmail.com">email</a> or call us on <a href="tel:37258553625">+372 5855 3625</a>.</p>
          : <p>Me pakume soodustust gruppidele, kus on rohkem kui 7 inimest. Lisa info saamiseks, palun võta meiega ühendust emaili <a href="mailto:northseason@gmail.com">northseason@gmail.com</a> teel või helista meile numbrile <a href="tel:37258553625">+372 5855 3625</a>.</p>
      }

    </List>
    <List name={userLanguage ? 'Booking Refund' : 'Broneeringu Tühistamine'}>
      <p><i className="fas fa-undo-alt"/>{userLanguage ? 'Cancelling 7 days before the event, we will refund 100% of the ticket fee.' : 'Me tagastame 100% summast kui broneering tühistatakse 7 või rohkem päevi enne matka algust.'}</p>
      <p><i className="fas fa-undo"/>{userLanguage ? 'Cancelling less than 7 days before the event, we will refund 50% of the ticket fee.' : 'Me tagastame 50% summast kui broneering tühistatakse vähem kui 7 päeva enne matka algust.'}</p>
    </List>
  </div>
}

function List({ name, children }) {
  return <div className="mobile-adventure-page-details-list">
    <h3>{name}</h3>
    {children}
  </div>
}
