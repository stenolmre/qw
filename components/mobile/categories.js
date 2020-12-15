import React from 'react'
import categories from './../arrays/categories'

export default function Categories({ userLanguage }) {
  return <div className="mobile-adventures-categories-container">
    <div style={{ marginLeft: '4%' }} className="mobile-landing-heading">
      <h1>{ userLanguage ? 'Categories' : 'Kategooriad' }</h1>
      <i className="fas fa-ellipsis-h"/>
    </div>
    <div className="mobile-adventures-categories">
      {
        categories.map(e => <div key={e.name}>
          <i className={e.icon}/>
          <h3>{e.name}</h3>
        </div>).slice(1)
      }
      <p style={{ color: 'rgba(30, 30, 34)' }}>&</p>
    </div>
  </div>
}
