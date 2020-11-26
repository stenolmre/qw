import React from 'react'
import { useRouter } from 'next/router'
import Heading from './../utils/heading'
import categories from './../arrays/categories'
import categoriesEst from './../arrays/categoriesEst'

export default function Categories({ userLanguage }) {
  const router = useRouter()
  
  return <div className="mobile-section">
    <Heading name={userLanguage ? 'all adventures' : 'kõik elamusmatkad'} span={userLanguage ? 'by category' : 'kategooriad'} href="/adventures" link={userLanguage ? 'see all' : 'vaata kõiki'}/>
    <div className="category-card-container">
      {
        userLanguage
          ? categories.filter(x => x.category !== 'all').map(category => <div className="category-card" key={category.category}   onClick={() => router.push(`/adventures?category=${category.category}`)}>
              <i className={category.icon}/>
              <p>{category.name}</p>
            </div>)
          : categoriesEst.filter(x => x.category !== 'all').map(category => <div className="category-card" key={category.category}   onClick={() => router.push(`/adventures?category=${category.category}`)}>
              <i className={category.icon}/>
              <p>{category.name}</p>
            </div>)
      }
    </div>
  </div>
}
