import React from 'react'
import Heading from './../utils/heading'
import AdventureCard from './../utils/adventurecard'

export default function TopPicks({ userLanguage, adventureState }) {
  return <div className="mobile-section">
    <Heading name={userLanguage ? 'top rated picks' : 'populaarseimad elamusmatkad'} span={userLanguage ? 'by customers' : 'klientide eelistused'} href="/adventures" link={<i className="fas fa-grip-horizontal"/>}/>
    <div className="slider">
      {
        adventureState && adventureState.adventures
          ? userLanguage
            ? adventureState.adventures.sort((a, b) => a.prices[0].price - b.prices[0].price).map(adventure => <AdventureCard key={adventure._id} link={`/adventures/${adventure._id}`} name={adventure.name} destination={adventure.location.start} topicon="fa-star" bottomicon="fa-map-marker-alt" src={adventure.images.map(image => image).slice(0, 1)} alt={adventure.name} price={(adventure.prices[0].price / 100).toFixed(2)}/>)
            : adventureState.adventures.sort((a, b) => a.prices[0].price - b.prices[0].price).map(adventure => <AdventureCard key={adventure._id} link={`/adventures/${adventure._id}`} name={adventure.nimi} destination={adventure.location.start} topicon="fa-star" bottomicon="fa-map-marker-alt" src={adventure.images.map(image => image).slice(0, 1)} alt={adventure.name} price={(adventure.prices[0].price / 100).toFixed(2)}/>)
          : null
      }
    </div>
  </div>
}
