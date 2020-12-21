import React, { Fragment } from 'react'
import MobileLayout from './../layout'
import Info from './info'
import Form from './form'

export default function Contact({ userLanguage }) {
  return <Fragment>
    <MobileLayout userLanguage={userLanguage} paragraph heading={userLanguage ? 'Let\'s talk.' : 'Kirjuta meile.'} subheading={userLanguage ? 'Our most important goal is customer satisfaction. If you have anything we can assist you, please do not hesitate to write or call us. We are doing our best to make sure that your needs are met.' : 'North Seasoni kõige olulisem väärtus ja eesmärk on kliendisõbralikkus. Kui me saame Sind millegagi aidata, siis palun ära kõhkle meie poole pöördumast. Me anname endast parima, et Sinu ootused saaksid täidetud.'} id="contact">
      <div className="mobile-contact-page">
        <Info />
        <Form />
      </div>
    </MobileLayout>
  </Fragment>
}
