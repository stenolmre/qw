import React, { useState } from 'react'

import Slideshow from '@/components/slideshow'
import { LevelOne, LevelTwo, LevelThree } from '@/components/levels'
import Form from '@/components/bookingform'

const Adventure = ({ language, adventure }) => {
  const [currentPage, setCurrentPage] = useState(1)
  const [showSlideshow, setShowSlideshow] = useState(false)

  return <div className="adventure">
    <div className="adventure_images">
      {
        adventure.images.map((el, i) => <img src={el} alt={el} key={i} onClick={() => {
          setShowSlideshow(true)
          setCurrentPage(i + 1)
        }}/>)
      }
    </div>
    <h1>{language ? adventure.name : adventure.nimi}</h1>
    <div className="adventure_details">
      <small>{adventure.type}</small>
      {adventure.levelOfDifficulty === 1 ? <LevelOne /> : adventure.levelOfDifficulty === 2 ? <LevelTwo /> : <LevelThree />}
      <small>{adventure.duration}</small>
    </div>
    <p>{language ? adventure.description : adventure.kirjeldus}</p>
    <h4>Location</h4>
    <ListItem icon="fas fa-map-pin" name={adventure.location.start}/>
    <ListItem icon="fas fa-flag-checkered" name={adventure.location.finish}/>
    <h4>{language ? 'What\'s included' : 'Mida hind sisaldab'}?</h4>
    {
      language
        ? adventure.isIncluded.map(el => <li key={el}>{el}</li>)
        : adventure.hinnas.map(el => <li key={el}>{el}</li>)
    }
    <h4>{language ? 'What\'s required' : 'Mis on eduka matka eeldus'}?</h4>
    {
      language
        ? adventure.isRequired.map(el => <li key={el}>{el}</li>)
        : adventure.nõudmised.map(el => <li key={el}>{el}</li>)
    }
    <h4>{language ? 'Prices' : 'Hinnakiri'}</h4>
    {
      adventure.prices.map((el, i) => <ListItem title={language ? el.name : el.nimi} name={`${(el.price / 100).toFixed(2)}€`} key={i}/>)
    }
    <h4>{language ? 'Book the trip' : 'Broneeri elamusmatk'}</h4>
    <Form language={language} adventure={adventure}/>
    {
      showSlideshow && <Slideshow totalImages={adventure.images.length} images={adventure.images} currentPage={currentPage} setCurrentPage={setCurrentPage} close={() => setShowSlideshow(false)}/>
    }
  </div>
}

const ListItem = ({ icon, name, title }) => <div className="adventure_list_item">
  {icon ? <i className={icon}/> : <div className="adventure_list_title">{title}</div>}
  <span>{name}</span>
</div>

export default Adventure
