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
      <List userLanguage={userLanguage} eng="What is included?" est="Mida hind sisaldab?">
        {
          userLanguage ? adventure.isIncluded.map(item => <p key={item}><i className="fas fa-check"/> {item}</p>) : adventure.hinnas.map(item => <p key={item}><i className="fas fa-check"/> {item}</p>)
        }
      </List>
      <List userLanguage={userLanguage} eng="Requirements" est="Eduka Matka Eeldus">
        {
          userLanguage ? adventure.isRequired.map(requirement => <p key={requirement}><i className="fas fa-exclamation"/> {requirement}</p>) : adventure.nõudmised.map(requirement => <p key={requirement}><i className="fas fa-exclamation"/> {requirement}</p>)
        }
      </List>
      <List userLanguage={userLanguage} eng="Location" est="Asukoht">
        <p><i className="fas fa-map-pin"/>{adventure.location.start}</p>
        <p><i className="fas fa-flag-checkered"/>{adventure.location.finish}</p>
      </List>
      <hr/>
      <Social userLanguage={userLanguage} eng="Share with friends" est="Jaga Sõpradega">
        <div className="adventure-social-share">
          <a href={`http://www.facebook.com/sharer.php?u=https://stenolmre.com/adventures/${adventure._id}=${adventure.name}`} title={adventure.name} rel="nofollow noopener"><i className="fab fa-facebook" style={{ color: '#4267B2' }}/></a>
          <a href={`http://twitter.com/home?status=${adventure.name}+https://stenolmre.com/adventures/${adventure._id}`} title={adventure.name} rel="nofollow noopener"><i className="fab fa-twitter" style={{ color: '#1DA1F2' }}/></a>
          <a rel="nofollow noopener" href={`fb-messenger://share/?link=https://stenolmre.com/adventures/${adventure._id}`}><i class="fab fa-facebook-messenger" style={{ color: '#0078FF' }}/></a>
          <a rel="nofollow noopener" href={`https://api.whatsapp.com/send?text=https://stenolmre.com/adventures/${adventure._id}`}><i className="fab fa-whatsapp" style={{ color: '#25D366' }}/></a>
        </div>
        <div className="adventure-hashtags">
          {
            adventure.hashtags.map(category => <span key={category} className="adventure-hashtag">#{category}</span>)
          }
        </div>
      </Social>
      <hr/>
      <List userLanguage={userLanguage} eng="Discount For Groups" est="Soodustus Gruppidele">
        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
      </List>
      <List userLanguage={userLanguage} eng="Booking Refund" est="Broneeringu Tühistamine">
        <p><i className="fas fa-undo-alt"/> Cancelling 7 days before the event, we will refund 100% of the ticket fee.</p>
        <p><i className="fas fa-undo"/> Cancelling less than 7 days before the event, we will refund 50% of the ticket fee.</p>
      </List>
    </div>
  </div>
}

function List({ eng, est, children, userLanguage }) {
  return <div className="adventure-list">
    <h3>{userLanguage ? eng : est}</h3>
    {children}
  </div>
}

function Social({ eng, est, children, userLanguage }) {
  return <div className="adventure-list">
    <h5 style={{ color: 'rgba(33, 33, 33, .4)', textTransform: 'uppercase' }}>{userLanguage ? eng : est}</h5>
    {children}
  </div>
}
