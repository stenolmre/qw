import React from 'react'
import Link from 'next/link'
import Form from './../../utils/contactform'
import contact_info from './../../arrays/contact'
import Heading from './../components/landingheading'

export default function MobileContact({ userLanguage }) {
  return <div className="mobile-contact">
    <Heading name={userLanguage ? 'Contact with us' : 'Võta meiega ühendust'} link="/contact"/>
    <br/>
    <div>
      {
        contact_info.map(e => <Info key={e.name} link={e.link} icon={e.icon} name={e.name}/>)
      }
    </div>
    <Form />
  </div>
}

function Info({ name, link, icon }) {
  return <a href={link} target="_blank">
    <div className="mobile-contact-detail">
      <div className="mobile-contact-icon">
        <i className={icon}/>
      </div>
      <p>{name}</p>
    </div>
  </a>
}
