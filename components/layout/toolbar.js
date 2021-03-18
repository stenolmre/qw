import React, { useState, useEffect } from 'react'
import Link from 'next/link'
import { useRouter } from 'next/router'
import Cookies from 'js-cookie'

const Toolbar = () => {
  const [search, setSearch] = useState('')
  const [placeholder, setPlaceholder] = useState('')

  const router = useRouter()

  const user_lang = Cookies.get('lan') === 'eng' ? true : false

  useEffect(() => { user_lang ? setPlaceholder('Search adventure') : setPlaceholder('Otsi elamusmatka') }, [user_lang])

  const changeLanguage = (language) => {
    Cookies.set('lan', language)
    router.reload()
  }

  return <div className="toolbar">
    <div className="toolbar_input">
      <input value={search} onChange={e => setSearch(e.target.value)} placeholder={placeholder} autoComplete="false"/>
      <Link href={`/adventures/?search=${search}`}><a><i className="fas fa-search"/></a></Link>
    </div>
    <div className="toolbar_details">
      <div className="toolbar_details_flags">
        <img onClick={() => changeLanguage('est')} src="https://res.cloudinary.com/djz69vbsq/image/upload/v1615885940/NorthSeason/est_nzz90i.png" alt="est"/>
        <img onClick={() => changeLanguage('eng')} src="https://res.cloudinary.com/djz69vbsq/image/upload/v1615885940/NorthSeason/eng_i1k8dj.png" alt="eng"/>
      </div>
      <p className="toolbar_company_name" onClick={() => router.push('/')}>North Season</p>
    </div>
  </div>
}

export default Toolbar
