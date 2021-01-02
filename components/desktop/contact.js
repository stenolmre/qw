import React, { Fragment } from 'react'
import Link from 'next/link'
import DesktopLayout from './layout'
import AdventureSidebar from './sidebars/adventuresidebar'
import Form from './../utils/contactform'
import contact_info from './../arrays/contact'
import { contact_est, contact_eng } from './../texts/contact'

export default function DesktopContact({ userLanguage }) {
  return <DesktopLayout sidebar={<AdventureSidebar/>}>
    <div className="desktop-contact-page">
      <h1 className="desktop-page-heading">{userLanguage ? 'Let\'s talk.' : 'Kirjuta meile.'}</h1>
      <p>{userLanguage ? contact_eng : contact_est}</p>
      {
        contact_info.map(e => <Info key={e.name} link={e.link} icon={e.icon} name={e.name}/>)
      }
      <Form />
    </div>
  </DesktopLayout>
}

function Info({ link, icon, name }) {
  return <a href={link} target="_blank" style={{ width: '250px' }}>
    <div className="contact-detail">
      <div className="contact-detail-icon">
        <i className={icon}/>
      </div>
      <span>{name}</span>
    </div>
  </a>
}
