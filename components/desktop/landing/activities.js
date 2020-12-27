import React from 'react'
import categories from './../../arrays/categories'
import SnowshoeingIcon from './../../mobile/components/snowshoeingicon'

export default function Activities({ userLanguage }) {
  return <div className="desktop-activities-container">
    <h4>Activities</h4>
    <div className="desktop-activities">
      {
        categories.map(e => <div className="desktop-activity">
          {
            e.category === 'snowshoeing'
              ? <SnowshoeingIcon />
              : <i className={e.icon}/>
          }
          <p style={e.name === 'snowshoeing' ? { margin: '10px 0 0 0' } : null}>{userLanguage ? e.name : e.nimi}</p>
        </div>).slice(1)
      }
    </div>
  </div>
}
