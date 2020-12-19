import React, { useState } from 'react'
import categories from './../../arrays/albumscategories'

export default function Categories({ filter }) {
  const [active, setActive] = useState(0)

  function onClick(i, el) {
    setActive(i)
    filter(el)
  }

  return <div className="mobile-galleries-categories">
    {
      categories.map((e, i) => <div onClick={() => onClick(i, e.category)}>
        <p><i className={`fas ${e.icon}`}/></p>
      </div>)
    }
    <style>{`
      .mobile-galleries-categories div:nth-of-type(${active + 1}) {
        color: rgba(113, 90, 255, 1);
        padding: 8px 16px;
        margin-top: 2px;
        border-radius: 3px;
        background: #ffffff;
        box-shadow: inset 5px 5px 6px #e8e8e8, inset -5px -5px 6px #ffffff;
      }
    `}</style>
  </div>
}
