export default function PostCard({ title, author, topicon, bottomicon }) {
  return <div className="postcard">
    <img src="särkitunturi.JPG" alt="hiking"/>
    <div className="postcard-overlay"/>
    <div className="icon">
      <i className={`fas ${ topicon }`}/>
    </div>
    <div className="postcard-add-info">
      <h3>{ title }</h3>
      <p><i className={`fas ${ bottomicon }`}/> { author }</p>
    </div>
  </div>
}
