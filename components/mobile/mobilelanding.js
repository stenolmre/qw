import React, { useEffect } from 'react'
import Link from 'next/link'
import Cookies from 'js-cookie'
import { useRouter } from 'next/router'
import Navbar from './../navbar'
import Footer from './../footer'
import Heading from './../utils/heading'
import PostCard from './../utils/postcard'
import AdventureCard from './../utils/adventurecard'
import Landing from './../landing'
import Contact from './../contact'
import categories from './../arrays/categories'
import categoriesEst from './../arrays/categoriesEst'
import gallery from './../arrays/gallery'
import { usePostState, usePostDispatch } from './../../context/post'
import { getPosts } from './../../actions/post'
import { useAdventureState, useAdventureDispatch } from './../../context/adventure'
import { getAdventures } from './../../actions/adventure'

export default function MobileLanding() {
  const dispatchPost = usePostDispatch()
  const postState = usePostState()
  const { posts } = postState
  const dispatchAdventure = useAdventureDispatch()
  const adventureState = useAdventureState()
  const { adventures } = adventureState
  const router = useRouter()
  const userLanguage = Cookies.get('lan') === 'eng'

  useEffect(() => {
    getPosts(dispatchPost)
    getAdventures(dispatchAdventure)
  }, [dispatchPost, dispatchAdventure])

  return <div className="mobile-container">
    <LandingMobile/>
    <br/>
    <Heading name={userLanguage ? 'top rated picks' : 'populaarseimad elamusmatkad'} span={userLanguage ? 'by customers' : 'klientide eelistused'} href="/adventures" link={userLanguage ? 'see all' : 'vaata kõiki'}/>
    <div className="slider">
      {
        adventureState && adventures
          ? adventures.map(adventure => <AdventureCard key={adventure._id} link={`/adventures/${adventure._id}`} name={adventure.name} destination={adventure.location.destination} topicon="fa-star" bottomicon="fa-map-marker-alt" src={adventure.images.map(image => image).slice(0, 1)} alt={adventure.name} price={(adventure.price / 100).toFixed(2)}/>).slice(0, 5)
          : null
      }
    </div>
    <Heading name={userLanguage ? 'all adventures' : 'kõik elamusmatkad'} span={userLanguage ? 'by category' : 'kategooriad'} href="/adventures" link={userLanguage ? 'see all' : 'vaata kõiki'}/>
    <div className="category-card-container">
      {
        userLanguage
          ? categories.map(category => <div className="category-card" key={category.category}   onClick={() => router.push(`/adventures?category=${category.category}`)}>
              <i className={category.icon}/>
              <p>{category.name}</p>
            </div>)
          : categoriesEst.map(category => <div className="category-card" key={category.category}   onClick={() => router.push(`/adventures?category=${category.category}`)}>
              <i className={category.icon}/>
              <p>{category.name}</p>
            </div>)
      }
    </div>
    <Heading name={userLanguage ? 'Gallery' : 'Galerii'} href="/albums" link={userLanguage ? 'see all' : 'vaata kõiki'}/>
    <ImageSlider/>
    <Contact/>
    <Footer style={{ background: 'white', color: 'rgba(33, 33, 33)', boxShadow: '0 0 7px rgba(33, 33, 33, .2)' }}/>
  </div>
}

function LandingMobile() {
  return <div className="mobile-landing">
    <img src="aurora.jpeg" alt="aurora-lights"/>
    <div className="mobile-overlay-header"/>
    <div className="landing-content">
      <Navbar/>
      <Landing/>
    </div>
  </div>
}

function CategoryCard({ name, icon }) {
  return <div className="category-card">
    <i className={`fas ${ icon } icon`}/>
    <p>{ name }</p>
  </div>
}

function ImageSlider() {
  return <div className="image-slider">
    {
      gallery.map(image => <div key={image} className="image-slider-img">
        <img src={image} alt="" />
      </div>)
    }
  </div>
}
