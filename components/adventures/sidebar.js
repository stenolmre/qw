import React from 'react'
import Link from 'next/link'
import categories from './../arrays/categories'
import categoriesEst from './../arrays/categoriesEst'

export default function Sidebar({ userLanguage, onChange }) {
  return <div className="adventure-categories">
    <h5>{userLanguage ? 'Search adventure' : 'Otsi elamusmatka'}</h5>
    <input onChange={onChange}/>
    <span><i className="fas fa-search"/></span>
    <h5>{userLanguage ? 'Search by category' : 'Otsi kategooria järgi'}</h5>
    <div>
    {
      userLanguage
        ? categories.map(e => <p key={e.category}>
            <Link href={`/adventures/${e.category}`}><a>{e.name}</a></Link>
          </p>)
        : categoriesEst.map(e => <p key={e.category}>
            <Link href={`/adventures/${e.category}`}><a>{e.name}</a></Link>
          </p>)
    }
    </div>
  </div>
}
