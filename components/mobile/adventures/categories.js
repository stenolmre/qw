import React from 'react'
import Link from 'next/link'
import { useRouter } from 'next/router'
import SnowshoeingIcon from './../components/snowshoeingicon'
import categories from './../../arrays/categories'

export default function Categories() {
  const { pathname } = useRouter()

  return <div className="mobile-adventures-page-categories">
    {
      categories.map((e, i) => <div className="mobile-adventures-page-category" key={i}>
        <Link href={`${e.path}`}><a className={pathname === e.path ? 'active-category' : ''}>
          {
            e.category === 'snowshoeing'
              ? <SnowshoeingIcon />
              : <i className={e.icon}/>
          }
        </a></Link>
      <p className={pathname === e.path ? 'active-category-p' : ''}>{e.name}</p>
      </div>)
    }
    <style jsx>{`
      .active-category {
        color: rgba(113, 90, 255, 1);
        margin-top: 2px;
        border-radius: 3px;
        background: #ffffff;
        box-shadow: inset 2px 2px 3px #e1e1e1, inset -5px -5px 6px #ffffff;
      }

      .active-category svg {
        fill: rgba(113, 90, 255, 1);
      }

      .active-category-p {
        display: block;
      }
    `}</style>
  </div>
}
