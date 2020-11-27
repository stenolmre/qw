import React from 'react'
import Link from 'next/link'
import Heading from './../utils/heading'

export default function Info({ adventure, id }) {
  return <div className="adventure-content">
    <h1>{adventure.name}</h1>
    <div className="adventure-first-info">
      <div className="adventure-parameters">
        <div>
          <p><i className="far fa-chart-bar"/> <strong>{adventure.levelOfDifficulty}</strong></p>
          <p><i className="fas fa-clock"/> ~<strong>{adventure.duration}H</strong></p>
        </div>
        <Link href={`/adventures/${id}#cart`}><a>Buy now</a></Link>
      </div>
      <p>{adventure.description}</p>
      <div className="adventure-list">
        <h3>What is included?</h3>
        {
          adventure.isIncluded.map(item => <p key={item}><i className="fas fa-check"/> {item}</p>)
        }
      </div>
      <div className="adventure-list">
        <h3>Requirements:</h3>
        {
          adventure.isRequired.map(requirement => <p key={requirement}><i className="fas fa-exclamation"/> {requirement}</p>)
        }
      </div>
      <div className="adventure-location">
        <h3>Location:</h3>
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
