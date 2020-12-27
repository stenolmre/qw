import React, { Fragment } from 'react'
import Link from 'next/link'
import DesktopLayout from './layout'
import AdventureSidebar from './sidebars/adventuresidebar'
import Form from './../mobile/contact/form'

export default function DesktopContact({ userLanguage }) {
  return <DesktopLayout sidebar={<AdventureSidebar/>}>
    <div className="desktop-contact-page">
      <h1 className="desktop-page-heading">{userLanguage ? 'Let\'s talk.' : 'Kirjuta meile.'}</h1>
      <p>{userLanguage ? 'Our most important goal is customer satisfaction. If you have anything we can assist you, please do not hesitate to write or call us. We are doing our best to make sure that your needs are met.' : 'Meie kõige olulisem väärtus ja eesmärk on kliendisõbralikkus. Kui me saame Sind millegagi aidata, siis palun ära kõhkle meie poole pöördumast. Me anname endast parima, et Sinu ootused saaksid täidetud.'}</p>
      {
        links.map(e => <Info key={e.name} link={e.link} icon={e.icon} text={e.name}/>)
      }
      <Form />
    </div>
  </DesktopLayout>
}

function Info({ link, icon, text }) {
  return <a href={link} target="_blank" style={{ width: '250px' }}>
    <div className="contact-detail">
      <div className="contact-detail-icon">
        <i className={icon}/>
      </div>
      <span>{text}</span>
    </div>
  </a>
}

const links = [
  {
    link: 'tel:37258553625',
    name: '+37258553625',
    icon: 'fas fa-phone'
  },
  {
    link: 'mailto:northseason@gmail.com',
    name: 'northseason@gmail.com',
    icon: 'fas fa-envelope'
  },
  {
    link: 'http://maps.google.com/?q=Hissitie+8,+99130+Kittilä',
    name: 'Levi, Lapland',
    icon: 'fas fa-map-pin'
  }
]
