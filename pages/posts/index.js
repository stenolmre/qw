import { Fragment, useEffect, useState } from 'react'
import Head from 'next/head'
import Container from './../../components/container'
import Link from 'next/link'
import Navbar from './../../components/navbar'
import Footer from './../../components/footer'
import Heading from './../../components/heading'
import Search from './../../components/search'
import PostCard from './../../components/postcard'
import Spinner from './../../components/spinner'
import { usePostState, usePostDispatch } from './../../context/post'
import { getPosts } from './../../actions/post'

export default function Posts() {
  const [search, setSearch] = useState('')
  const dispatchPost = usePostDispatch()
  const postState = usePostState()
  const { posts } = postState

  useEffect(() => {
    getPosts(dispatchPost)
  }, [dispatchPost])

  return <Fragment>
    <Head>
      <title>qw - posts</title>
    </Head>
    <Container>
      <section className="posts-container">
        <Heading name="all posts" link="Latest ↡"/>
        <Search onChange={e => setSearch(e.target.value)}/>
        <div className="posts">
          {
            postState && posts
              ? posts.filter(item => item.name.toLowerCase().includes(search.toLowerCase())).map(post => <PostCard key={post._id} link={`/posts/${post._id}`} title={post.name} author={post.author} topicon="fa-heart" bottomicon="fa-user"/>)
              : <Spinner/>
          }
        </div>
      </section>
    </Container>
  </Fragment>
}
