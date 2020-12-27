import React from 'react'
import Link from 'next/link'
import SnowshoeingIcon from './../components/snowshoeingicon'
import categories from './../../arrays/categories'

export default function Categories({ userLanguage }) {
  return <div className="mobile-adventures-categories">
      {
        categories.map(e => <Link href="/adventures" key={e.name}><a>
          <div className="mobile-adventures-category">
            <div className="mobile-adventures-category-icon">
              {
                e.category === 'snowshoeing'
                  ? <SnowshoeingIcon />
                  : <i className={e.icon}/>
              }
            </div>
          </div>
          <h3>{userLanguage ? e.name : e.nimi}</h3>
        </a></Link>).slice(1)
      }
      <p style={{ opacity: '0' }}>&</p>
    </div>

}
