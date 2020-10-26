import { Fragment, useState, useEffect } from 'react'
import Link from 'next/link'
import Search from './search'
import Spinner from './spinner'
import { usePostState, usePostDispatch } from './../context/post'
import { getPosts } from './../actions/post'

export default function Sidebar() {
  const [search, setSearch] = useState('')
  const dispatchPost = usePostDispatch()
  const postState = usePostState()
  const { posts } = postState

  useEffect(() => {
    getPosts(dispatchPost)
  }, [dispatchPost])

  return <Fragment>
    <div className="sidebar">
      <div className="sidebar-content">
        <div className="sidebar-posts-container">
          <Search onChange={e => setSearch(e.target.value)}/>
          <div className="sidebar-posts">
            {
              postState && posts
                ? posts.filter(item => item.name.toLowerCase().includes(search.toLowerCase())).map((post, i) => <div className="sidebar-post" key={i}>
                    <Link href={`/posts/${post._id}`}><a><h3><span>0{i + 1}</span> { post.name }</h3></a></Link>
                    <p>This is some random text to describe this post.</p>
                  </div>).slice(0, 2)
                : null
            }
          </div>
        </div>
        <div className="sidebar-media-container">
          <div className="sidebar-media">
            <Link href="/albums" className="sidebar-media-button"><a>+</a></Link>
            <div className="sidebar-media-images">
              <img src="särkitunturi.JPG" alt=""/>
            </div>
          </div>
        </div>
        <div className="sidebar-button">
          <Link href="/posts"><a>See all posts ↠</a></Link>
        </div>
      </div>
    </div>
  </Fragment>
}
