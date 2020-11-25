import React, { useState, useEffect } from 'react'
import Cookies from 'js-cookie'

export default function Search({ onChange }) {
  const [text, setText] = useState('')
  const language = Cookies.get('lan') === 'eng'

  useEffect(() => {
    if (language) {
      setText('Search Adventure')
    } else {
      setText('Otsi Elamusmatka')
    }
  }, [])

  return <div className="search">
    <input placeholder={text} onChange={onChange}/>
    <span><i className="fas fa-search"/></span>
  </div>
}
