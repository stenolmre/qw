import { useEffect } from 'react'
import Link from 'next/link'
import { useRouter } from 'next/router'
import Navbar from './../navbar'
import Footer from './../footer'
import Heading from './../heading'
import PostCard from './../postcard'
import Landing from './../landing'
import Contact from './../contact'
import categories from './../utils/categories'
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

  useEffect(() => {
    getPosts(dispatchPost)
    getAdventures(dispatchAdventure)
  }, [dispatchPost, dispatchAdventure])

  return <div className="mobile-container">
    <LandingMobile/>
    <br/>
    <Heading name="top rated picks" span="by customers" href="/adventures" link="see all"/>
    <div className="slider">
      {
        adventureState && adventures
          ? adventures.map(adventure => <PostCard key={adventure._id} link={`/adventures/${adventure._id}`} title={adventure.name} author={adventure.location.destination} topicon="fa-star" bottomicon="fa-map-marker-alt"/>).slice(0, 5)
          : null
      }
    </div>
    <Heading name="all adventures" span="by category" href="/adventures" link="see all"/>
    <div className="category-card-container">
      {
        categories.map(category => <div className="category-card" key={category.category} onClick={() => router.push(`/adventures?category=${category.category}`)}>
          <i className={category.icon}/>
          <p>{category.name}</p>
        </div>)
      }
    </div>
    <Heading name="all posts" href="/posts" link="see all"/>
    <div className="slider">
      {
        postState && posts
          ? posts.map(post => <PostCard key={post._id} link={`/posts/${post._id}`} title={post.name} author={post.author} topicon="fa-heart" bottomicon="fa-user"/>).slice(0, 5)
          : null
      }
    </div>
    <Heading name="gallery" href="/albums" link="see all"/>
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
    <div className="image-slider-img">
      <img src="särkitunturi.JPG" alt="" />
    </div>
    <div className="image-slider-img">
      <img src="särkitunturi.JPG" alt="" />
    </div>
    <div className="image-slider-img">
      <img src="särkitunturi.JPG" alt="" />
    </div>
  </div>
}
