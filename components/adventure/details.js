import React, { Fragment, useEffect } from 'react'
import Cookies from 'js-cookie'
import { useRouter } from 'next/router'
import share from './../arrays/share'
import { useAdventureDispatch, useAdventureState } from './../../context/adventure'
import { getAdventure } from './../../actions/adventure'

export default function AdventureDetails({ mobile }) {
  const user_lang = Cookies.get('lan') === 'eng' ? true : false
  const { query } = useRouter()

  const dispatchAdventure = useAdventureDispatch()
  const { adventure } = useAdventureState()

  useEffect(() => { getAdventure(dispatchAdventure, query.id) }, [dispatchAdventure, query])

  return <Fragment>
    {
      adventure && <Fragment>
        {
          mobile
            ? <List name={user_lang ? 'Level of Difficulty & Duration' : 'Raskusaste & Kestvus'}>
                <p><i className="fas fa-chart-bar"/>{user_lang ? adventure.levelOfDifficulty : adventure.raskusaste}</p>
                <p><i className="fas fa-clock"/>~{adventure.duration}H</p>
              </List>
            : <Fragment>
                <div className="adventure-subheader">
                  <div>
                    <span><i className="fas fa-chart-bar"/>{user_lang ? adventure.levelOfDifficulty : adventure.raskusaste}</span>
                    <span><i className="fas fa-clock"/>~{adventure.duration}H</span>
                  </div>
                  <div className="adventure-social">
                    {
                      share.map(e => <a key={e.name} href={e.link}><i className={`fab fa-${e.icon}`}/></a>)
                    }
                  </div>
                </div>
                <p>{user_lang ? adventure.description : adventure.kirjeldus}</p>
              </Fragment>
        }
        <List name={user_lang ? 'What is included?' : 'Mida hind sisaldab?'}>
          {
            user_lang
              ? adventure.isIncluded.map(e => <p key={e}><i className="fas fa-check"/> {e}</p>)
              : adventure.hinnas.map(e => <p key={e}><i className="fas fa-check"/> {e}</p>)
          }
        </List>
        <List name={user_lang ? 'Start & Finish' : 'Algus & Lõpp'}>
          <p><i className="fas fa-map-pin"/>{adventure.location.start}</p>
          <p><i className="fas fa-flag-checkered"/>{adventure.location.finish}</p>
        </List>
        <List name={user_lang ? 'Group Tickets' : 'Grupi Soodustus'}>
          {
            user_lang
              ? <span>We offer special discount for groups bigger than 7 people. Please contact us for more information via <a href="mailto:northseason@gmail.com">email</a> or call us on <a href="tel:37258553625">+372 5855 3625</a>.</span>
              : <span>Me pakume soodustust gruppidele, kus on rohkem kui 7 inimest. Lisa info saamiseks, palun võta meiega ühendust emaili <a href="mailto:northseason@gmail.com">northseason@gmail.com</a> teel või helista meile numbrile <a href="tel:37258553625">+372 5855 3625</a>.</span>
          }
        </List>
        <List name={user_lang ? 'Booking Refund' : 'Broneeringu Tühistamine'}>
          <p><i className="fas fa-undo-alt"/>{user_lang ? 'Cancelling 7 days before the event, we will refund 100% of the ticket fee.' : 'Me tagastame 100% summast kui broneering tühistatakse 7 või rohkem päevi enne matka algust.'}</p>
          <p><i className="fas fa-undo"/>{user_lang ? 'Cancelling less than 7 days before the event, we will refund 50% of the ticket fee.' : 'Me tagastame 50% summast kui broneering tühistatakse vähem kui 7 päeva enne matka algust.'}</p>
        </List>
      </Fragment>
    }
  </Fragment>
}

function List({ children, name }) {
  return <div className="adventure-list">
    <h4>{name}</h4>
    {children}
  </div>
}
