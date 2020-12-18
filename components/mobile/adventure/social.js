import React from 'react'
import { useAdventureState } from './../../../context/adventure'

export default function Social() {
  const { adventure } = useAdventureState()

  return <div className="mobile-adventure-page-social">
    <div style={{ display: 'flex', justifyContent: 'center' }}>
      <div className="mobile-adventure-page-social-icon-container">
        <div className="mobile-adventure-page-social-icon">
          <i className="fas fa-chart-bar"/>
        </div>
        <p>{adventure.levelOfDifficulty}</p>
      </div>
      <div className="mobile-adventure-page-social-icon-container">
        <div className="mobile-adventure-page-social-icon">
          <i className="fas fa-clock"/>
        </div>
        <p>~{adventure.duration}H</p>
      </div>
    </div>
    <div>
      <a href="" style={{ color: '#4267B2' }}><i className="fab fa-facebook-f"/></a>
      <a href="" style={{ color: '#0078FF' }}><i className="fab fa-twitter"/></a>
    </div>
  </div>
}
