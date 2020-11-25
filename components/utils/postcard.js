import { useRouter } from 'next/router'

export default function PostCard({ title, author, link, topicon, bottomicon }) {
  const router = useRouter()

  return <div className="postcard" onClick={() => router.push(link)}>
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
