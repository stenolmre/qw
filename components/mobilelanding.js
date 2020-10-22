import Link from 'next/link'

export default function MobileLanding() {
  return <div className="mobile-landing">
    <div className="mobile-landing-header">
      <h1>Top rated picks</h1>
      <Link href="/"><a>See all</a></Link>
    </div>
    <div className="mobile-experience-container">
      <ExperienceCard name="Snowshoe Trekking" place="Kätkatunturi"/>
      <ExperienceCard name="Aurora Hike" place="Levitunturi"/>
    </div>
    <div className="overflow" />
    <div className="mobile-landing-header">
      <h1>latest posts</h1>
      <Link href="/"><a>See all</a></Link>
    </div>
    <div className="mobile-experience-container">
      <ExperienceCard name="Snowshoe Trekking" place="Kätkatunturi"/>
      <ExperienceCard name="Aurora Hike" place="Levitunturi"/>
    </div>
    <br/>
    <div className="mobile-landing-header">
      <h1>Gallery</h1>
      <Link href="/"><a>See all</a></Link>
    </div>
    <ImageSlider/>
  </div>
}

function ExperienceCard({ name, place }) {
  return <div className="mobile-experience-preview">
    <img src="särkitunturi.JPG" alt="hiking"/>
    <div className="mobile-overlay"/>
    <div className="mobile-experience-info">
      <h3>{ name }</h3>
      <p><i className="fas fa-map-marker-alt"/> { place }</p>
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
