import React from 'react'
import Heading from './../utils/heading'
import AdventureCard from './../utils/adventurecard'

export default function TopPicks({ userLanguage, adventureState }) {
  return <div className="mobile-section">
    <Heading name={userLanguage ? 'top rated picks' : 'populaarseimad elamusmatkad'} span={userLanguage ? 'by customers' : 'klientide eelistused'} href="/adventures" link={userLanguage ? 'see all' : 'vaata kõiki'}/>
    <div className="slider">
      {
        adventureState && adventureState.adventures
          ? adventureState.adventures.map(adventure => <AdventureCard key={adventure._id} link={`/adventures/${adventure._id}`} name={adventure.name} destination={adventure.location.destination} topicon="fa-star" bottomicon="fa-map-marker-alt" src={adventure.images.map(image => image).slice(0, 1)} alt={adventure.name} price={(adventure.price / 100).toFixed(2)}/>).slice(0, 5)
          : null
      }
    </div>
  </div>
}
