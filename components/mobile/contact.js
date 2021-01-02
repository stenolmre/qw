import React, { Fragment } from 'react'
import MobileLayout from './layout'
import Form from './../utils/contactform'
import contact_info from './../arrays/contact'
import { contact_est, contact_eng, contact_heading_est, contact_heading_eng } from './../texts/contact'

export default function Contact({ userLanguage }) {
  return <Fragment>
    <MobileLayout userLanguage={userLanguage} paragraph heading={userLanguage ? contact_heading_est : contact_heading_eng} subheading={userLanguage ? contact_eng : contact_est} id="contact">
      <div className="mobile-contact-page">
        <div>
          {
            contact_info.map(e => <Info key={e.name} link={e.link} icon={e.icon} name={e.name}/>)
          }
        </div>
        <Form />
      </div>
    </MobileLayout>
  </Fragment>
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
