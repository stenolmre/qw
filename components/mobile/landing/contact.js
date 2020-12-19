import React from 'react'
import Link from 'next/link'

export default function MobileContact({ userLanguage }) {
  return <div className="mobile-contact-container">
    <div className="mobile-contact">
      <h2 className="mobile-landing-heading">CONTACT</h2>
        <br/>
        <Link href="tel:37258553625"><a>
          <div className="mobile-contact-detail">
            <div className="mobile-contact-icon">
              <i className="fas fa-phone"/>
            </div>
            <p>+372 5855 3625</p>
          </div>
        </a></Link>
        <Link href="mailto:northseason@gmail.com"><a>
          <div className="mobile-contact-detail">
            <div className="mobile-contact-icon">
              <i className="fas fa-envelope"/>
            </div>
            <p>northseason@gmail.com</p>
          </div>
        </a></Link>
        <div className="mobile-contact-detail">
          <div className="mobile-contact-icon">
            <i className="fas fa-map-pin"/>
          </div>
          <p>Levi, Lapland</p>
        </div>
    </div>
  </div>
}
