import Link from 'next/link'

export default function Sidebar() {
  return <div className="sidebar">
    <div className="sidebar-content">
      <div className="sidebar-posts-container">
        <div className="search">
          <input placeholder="Search" onChange={e => e.target.name = e.target.value}/>
          <span>S</span>
        </div>
        <div className="sidebar-posts">
          <div className="sidebar-post">
            <h3><span>01</span> Day One</h3>
            <p>This is some random text to describe this post.</p>
          </div>
          <div className="sidebar-post">
            <h3><span>01</span> Day One</h3>
            <p>This is some random text to describe this post.</p>
          </div>
        </div>
      </div>
      <div className="sidebar-media-container">
        <div className="sidebar-media">
          <Link href="/" className="sidebar-media-button"><a>+</a></Link>
          <div className="sidebar-media-images"><img src="https://etreeningud.ee/media/images/stenolmre/stenolmre.jpeg" alt=""/></div>
          </div>
          </div>
      <div className="sidebar-button">
        <Link href="/"><a>See all post ↠</a></Link>
      </div>
    </div>
  </div>
}
