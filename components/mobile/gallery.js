import React from 'react'
import Heading from './../utils/heading'
import gallery from './../arrays/gallery'

export default function Gallery({ userLanguage }) {
  return <div className="mobile-section">
    <Heading name={userLanguage ? 'Gallery' : 'Galerii'} href="/albums" link={userLanguage ? 'see all' : 'vaata kõiki'}/>
    <div className="image-slider">
      {
        gallery.map(image => <div key={image} className="image-slider-img">
          <img src={image} alt="" />
        </div>)
      }
    </div>
  </div>
}
