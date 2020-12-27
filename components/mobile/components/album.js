import React from 'react'
import Link from 'next/link'

export default function AlbumDisplay({ e, userLanguage }) {
  return <Link href={`/albums/${e._id}`}><a>
    <div className="mobile-album-container">
      <div className="mobile-album">
        {
          e.thumbnails.map(img => <img key={img} src={img} alt={img}/>).slice(0, 4)
        }
        <div className="mobile-album-blur">
          +{e.images.length - 3}
        </div>
      </div>
      <h2>{userLanguage ? e.name : e.nimi}</h2>
    </div>
  </a></Link>
}
