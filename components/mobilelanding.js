import Link from 'next/link'
import Navbar from './navbar'
import Footer from './footer'

export function MobileLanding() {
  return <div className="mobile-landing-container">
    <div className="mobile-landing">
      <img src="aurora.jpeg" alt="aurora-lights"/>
      <div className="mobile-overlay-header"/>
      <div className="landing-content">
        <Navbar/>
        <div className="container">
          <h1>Travel to inspire your life</h1>
          <p>Visit magical lapland and gather amazing experiences that last forever. We are made to give you a taste of artic nature.</p>
          <div className="heading-read-more">
            <hr/>
            <Link href="/"><a>Show all experiences</a></Link>
          </div>
        </div>
      </div>
    </div>
    <br/>
    <div className="mobile-landing-header">
      <h1>Top rated picks</h1>
      <Link href="/"><a>See all</a></Link>
    </div>
    <div className="mobile-experience-container">
      <ExperienceCard name="Snowshoe Trekking" place="Kätkatunturi"/>
      <ExperienceCard name="Aurora Hike" place="Levitunturi"/>
    </div>
    <br/>
    <div className="mobile-landing-header">
      <h1>All adventures<br/><span>by category</span></h1>
    </div>
    <div className="category-card-container">
      <CategoryCard name="snowshoe trekking" icon="fa-hiking"/>
      <CategoryCard name="hiking" icon="fa-hiking"/>
      <CategoryCard name="skiing" icon="fa-skiing-nordic"/>
      <CategoryCard name="fatbike adventures" icon="fa-biking"/>
    </div>
    <br/>
    <div className="mobile-landing-header">
      <h1>latest posts</h1>
      <Link href="/posts"><a>See all</a></Link>
    </div>
    <div className="mobile-experience-container">
      <BlogCard title="Day 2 - To Nordkapp" author="Sten Olmre"/>
      <BlogCard title="Day 1 - To Nordkapp" author="Sten Olmre"/>
    </div>
    <br/>
    <div className="mobile-landing-header">
      <h1>Gallery</h1>
      <Link href="/"><a>See all</a></Link>
    </div>
    <ImageSlider/>
    <div className="mobile-contact">
      <div className="mobile-landing-header">
        <h1>Our Location</h1>
      </div>
      <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d362.71851578978425!2d24.80773896521732!3d67.80406628103867!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x45d24d51b880851b%3A0x9e1d3e75ebfb4e6f!2sOy%20Levi%20Ski%20Resort!5e0!3m2!1sen!2sfi!4v1603366555120!5m2!1sen!2sfi" frameBorder="0" allowFullScreen="" ariaHidden="false" tabIndex="0"></iframe>
      <br/><br/>
      <div className="mobile-landing-header">
        <h1>Contact</h1>
      </div>
      <p>tel: +372 5346 1027</p>
      <p>email: stenolmre@icloud.com</p>
      <p>location: Levi, Lapland</p>
      <br/>
      <div className="mobile-landing-header">
        <h1>Write to us</h1>
      </div>
      <form>
        <input placeholder="Name" />
        <input placeholder="Email" />
        <textarea placeholder="Please write your questions, recommendations or requests here and we will get back to you during the day." /><br/>
        <button>Send</button>
      </form>
    </div>
    <Footer/>
  </div>
}

function ExperienceCard({ name, place }) {
  return <div className="mobile-experience-preview">
    <img src="särkitunturi.JPG" alt="hiking"/>
    <div className="mobile-overlay"/>
    <div className="top-rated-icon">
      <i className="fas fa-star"/>
    </div>
    <div className="mobile-experience-info">
      <h3>{ name }</h3>
      <p><i className="fas fa-map-marker-alt"/> { place }</p>
    </div>
  </div>
}

function CategoryCard({ name, icon }) {
  return <div className="category-card">
    <i className={`fas ${ icon } icon`}/>
    <p>{ name }</p>
  </div>
}

export function BlogCard({ title, author }) {
  return <div className="mobile-experience-preview">
    <img src="särkitunturi.JPG" alt="hiking"/>
    <div className="mobile-overlay"/>
    <div className="top-rated-icon">
      <i className="fas fa-heart"/>
    </div>
    <div className="mobile-experience-info">
      <h3>{ title }</h3>
      <p><i className="fas fa-user"/> { author }</p>
    </div>
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
