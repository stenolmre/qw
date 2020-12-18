import React from 'react'

export default function MobileContact({ userLanguage }) {
  return <div className="mobile-contact-container">
    <div className="mobile-contact">
      <h2 className="mobile-landing-heading">CONTACT</h2>
        <br/>
        <div className="mobile-contact-detail">
          <div className="mobile-contact-icon">
            <i className="fas fa-phone"/>
          </div>
          <p>+372 5346 1027</p>
        </div>
        <div className="mobile-contact-detail">
          <div className="mobile-contact-icon">
            <i className="fas fa-envelope"/>
          </div>
          <p>northseason@gmail.com</p>
        </div>
        <div className="mobile-contact-detail">
          <div className="mobile-contact-icon">
            <i className="fas fa-map-pin"/>
          </div>
          <p>Levi, Lapland</p>
        </div>
    </div>
  </div>
}
