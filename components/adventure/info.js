import React, { Fragment } from 'react'
import Cookies from 'js-cookie'
import share from './../arrays/share'

function List({ children, name }) {
  return <div className="adventure-list">
    <h4>{name}</h4>
    {children}
  </div>
}

export default function Info({ adventure }) {
  const userLanguage = Cookies.get('lan') === 'eng'

  return <div className="adventure-details">
    <h1>{userLanguage ? adventure.name : adventure.nimi}</h1>
    <div className="adventure-parameters">
      <div className="adventure-parameter">
        <p><i className="far fa-chart-bar"/>{userLanguage ? adventure.levelOfDifficulty : adventure.raskusaste}</p>
        <p><i className="far fa-clock"/> ~{adventure.duration}H</p>
      </div>
      <div className="adventure-parameter">
        {
          share.map(e => <a key={e.name} className="adventure-share-icon" href={e.name === 'Messenger' ? `${e.link}${userLanguage ? adventure.name : adventure.nimi}` : `${e.link}${adventure._id}`} target="_blank">
            <i style={{ color: e.color }} className={`fab fa-${e.icon}`}/>
          </a>)
        }
      </div>
    </div>
    <p className="adventure-description">{userLanguage ? adventure.description : adventure.kirjeldus}</p>
    <List name={userLanguage ? 'What is included?' : 'Mida hind sisaldab?'}>
      {
        userLanguage
          ? adventure.isIncluded.map(e => <p key={e}>
              <i className="fas fa-check"/> {e}
            </p>)
          : adventure.hinnas.map(e => <p key={e}>
              <i className="fas fa-check"/> {e}
            </p>)
      }
    </List>
    <List name={userLanguage ? 'Start & Finish' : 'Algus & Lõpp'}>
      <p><i className="fas fa-map-pin"/>{adventure.location.start}</p>
      <p><i className="fas fa-flag-checkered"/>{adventure.location.finish}</p>
    </List>
    <List name={userLanguage ? 'Discount For Groups' : 'Soodustus Gruppidele'}>
      {
        userLanguage
          ? <span className="adventure-discount">We offer special discount for groups bigger than 7 people. Please contact us for more information via email <a href="mailto:northseason@gmail.com">northseason@gmail.com</a> or call us on <a href="tel:37258553625">+37258553625</a>.</span>
          : <span className="adventure-discount">Me pakume soodustust gruppidele, kus on rohkem kui 7 inimest. Lisa info saamiseks, palun võta meiega ühendust emaili  <a href="mailto:northseason@gmail.com">northseason@gmail.com</a> teel või helista meile numbrile <a href="tel:37258553625">+37258553625</a>.</span>
      }
    </List>
    <List name={userLanguage ? 'Booking Refund' : 'Broneeringu Tühistamine'}>
      {
        userLanguage
          ? <Fragment>
              <p className="txt-js"><i className="fas fa-undo-alt"/> Cancelling 7 days before the event, we will refund 100% of the ticket fee.</p>
              <p className="txt-js"><i className="fas fa-undo"/> Cancelling less than 7 days before the event, we will refund 50% of the ticket fee.</p>
            </Fragment>
          : <Fragment>
              <p className="txt-js"><i className="fas fa-undo-alt"/> Me tagastame 100% summast kui broneering tühistatakse 7 või rohkem päevi enne matka algust.</p>
              <p className="txt-js"><i className="fas fa-undo"/> Me tagastame 50% summast kui broneering tühistatakse vähem kui 7 päeva enne matka algust.</p>
            </Fragment>
      }
    </List>
  </div>
}
