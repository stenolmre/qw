import React from 'react'
import Link from 'next/link'
import Cookies from 'js-cookie'
import Heading from './../utils/heading'

export default function Info({ adventure, id }) {
  const userLanguage = Cookies.get('lan') === 'eng'

  return <div className="adventure-content">
    <h1>{userLanguage ? adventure.name : adventure.nimi}</h1>
    <div className="adventure-first-info">
      <div className="adventure-parameters">
        <div>
          <p><i className="far fa-chart-bar"/> <strong>{userLanguage ? adventure.levelOfDifficulty : adventure.raskusaste}</strong></p>
          <p><i className="fas fa-clock"/> ~<strong>{adventure.duration}H</strong></p>
        </div>
        <Link href={`/adventures/${id}#cart`}><a>{userLanguage ? 'Buy now' : 'Osta kohe'}</a></Link>
      </div>
      <p>{userLanguage ? adventure.description : adventure.kirjeldus}</p>
      <div className="adventure-list">
        <h3>{userLanguage ? 'What is included' : 'Mida hind sisaldab'}?</h3>
        {
          userLanguage ? adventure.isIncluded.map(item => <p key={item}><i className="fas fa-check"/> {item}</p>) : adventure.hinnas.map(item => <p key={item}><i className="fas fa-check"/> {item}</p>)
        }
      </div>
      <div className="adventure-list">
        <h3>Requirements:</h3>
        {
          userLanguage ? adventure.isRequired.map(requirement => <p key={requirement}><i className="fas fa-exclamation"/> {requirement}</p>) : adventure.nõudmised.map(requirement => <p key={requirement}><i className="fas fa-exclamation"/> {requirement}</p>)
        }
      </div>
      <div className="adventure-location">
        <h3>{userLanguage ? 'Location' : 'Asukoht'}:</h3>
        <p><i className="fas fa-map-pin"/>{adventure.location.start}</p>
        <p><i className="fas fa-flag-checkered"/>{adventure.location.finish}</p>
      </div>
      <div className="adventure-hashtags">
        {
          adventure.hashtags.map(category => <span key={category} className="adventure-hashtag">#{category}</span>)
        }
      </div>
    </div>
  </div>
}
