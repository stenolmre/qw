import React from 'react'
import Link from 'next/link'
import { useRouter } from 'next/router'
import SnowshoeingIcon from './../components/snowshoeingicon'
import categories from './../../arrays/categories'

export default function Categories() {
  const { pathname } = useRouter()
  console.log(pathname);

  return <div className="mobile-adventures-page-categories">
    {
      categories.map((e, i) => <Link href={`${e.path}`} key={i}><a className={pathname === e.path ? 'active-category' : ''}>
        {
          e.category === 'snowshoeing'
            ? <SnowshoeingIcon />
            : <i className={e.icon}/>
        }
      </a></Link>)
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
    `}</style>
  </div>
}
