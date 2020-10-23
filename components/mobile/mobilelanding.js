import Link from 'next/link'
import Navbar from './../navbar'
import Footer from './../footer'
import Heading from './../heading'
import PostCard from './../postcard'
import Landing from './../landing'
import Contact from './../contact'

export default function MobileLanding() {
  return <div className="mobile-container">
    <LandingMobile/>
    <br/>
    <Heading name="top rated picks" link="see all"/>
    <div className="slider">
      <PostCard title="Snowshoe trekking" author="Kätkatunturi" topicon="fa-star" bottomicon="fa-map-marker-alt"/>
      <PostCard title="Aurora Hike" author="Levitunturi" topicon="fa-star" bottomicon="fa-map-marker-alt"/>
    </div>
    <Heading name="all adventures" span="by category" link="see all"/>
    <div className="category-card-container">
      <CategoryCard name="snowshoe trekking" icon="fa-hiking"/>
      <CategoryCard name="hiking" icon="fa-hiking"/>
      <CategoryCard name="skiing" icon="fa-skiing-nordic"/>
      <CategoryCard name="fatbike adventures" icon="fa-biking"/>
    </div>
    <Heading name="all posts" href="/posts" link="see all"/>
    <div className="slider">
      <PostCard title="Day 2 - To Nordkapp" author="Sten Olmre" topicon="fa-heart" bottomicon="fa-user"/>
      <PostCard title="Day 2 - To Nordkapp" author="Sten Olmre" topicon="fa-heart" bottomicon="fa-user"/>
      <PostCard title="Day 2 - To Nordkapp" author="Sten Olmre" topicon="fa-heart" bottomicon="fa-user"/>
    </div>
    <Heading name="gallery"/>
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
