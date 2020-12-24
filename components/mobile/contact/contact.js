import React, { Fragment } from 'react'
import Head from './../../utils/head'
import MobileLayout from './../layout'
import Info from './info'
import Form from './form'

export default function Contact({ userLanguage }) {
  const heading = userLanguage ? 'North Season - Let\'s talk.' : 'North Season - Kirjuta meile.'
  const description = userLanguage
    ? 'Our most important goal is customer satisfaction. If you have anything we can assist you, please do not hesitate to write or call us. We are doing our best to make sure that your needs are met.'
    : 'Meie kõige olulisem väärtus ja eesmärk on kliendisõbralikkus. Kui me saame Sind millegagi aidata, siis palun ära kõhkle meie poole pöördumast. Me anname endast parima, et Sinu ootused saaksid täidetud.'

  return <Fragment>
    <Head title={heading} description={description} image="https://etreeningud.ee/media/images/stenolmre/OG_IMG_2946.jpg" url="https://stenolmre.com/contact" />
    <MobileLayout userLanguage={userLanguage} paragraph heading={heading.slice(15)} subheading={description} id="contact">
      <div className="mobile-contact-page">
        <Info />
        <Form />
      </div>
    </MobileLayout>
  </Fragment>
}
