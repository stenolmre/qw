import React, { Fragment } from 'react'
import MobileLayout from './../layout'
import Info from './info'
import Form from './form'

export default function Contact() {
  return <Fragment>
    <MobileLayout paragraph heading="Let's talk." subheading="Our most important goal is customer satisfaction. If you have anything we can assist you, please do not hesitate to write or call us. We are doing our best to make sure that your needs are met." id="contact">
      <div className="mobile-contact-page">
        <Info />
        <Form />
      </div>
    </MobileLayout>
  </Fragment>
}
