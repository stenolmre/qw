import React from 'react'
import Link from 'next/link'
import categories from './../../arrays/categories'

export default function Categories({ userLanguage }) {
  return <div className="mobile-adventures-categories-container">
    <h2 className="mobile-landing-heading">ACTIVITIES</h2>
    <div className="mobile-adventures-categories">
      {
        categories.map(e => <Link href={`/adventures/${e.name}`} key={e.name}><a>
          <div className="mobile-adventures-category">
            <div className="mobile-adventures-category-icon">
              <i className={e.icon}/>
            </div>
            <h3>{e.name}</h3>
          </div>
        </a></Link>).slice(1)
      }
      <p style={{ opacity: '0' }}>&</p>
    </div>
  </div>
}
