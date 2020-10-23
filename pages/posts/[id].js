import { Fragment, useEffect, useState } from 'react'
import axios from 'axios'
import Head from 'next/head'
import Container from './../../components/container'
import Link from 'next/link'

export default function Posts() {
  const [post, setPost] = useState(null)

  useEffect(() => {
    const fetch = async () => {
      const { data } = await axios.get('/api/posts/get/?postId=5f92da9110c2e7e441216c74')

      setPost(data)
    }

    fetch()
  }, [fetch])

  return <Fragment>
    <Head>
      <title>qw - posts</title>
    </Head>
    <Container>
      <section className="post">
        <div className="post-image" style={{ backgroundImage: `url(${ post && post.image })` }}/>
        <div className="post-content">
          <h1>{post && post.name}</h1>
          <h4>by {post && post.author}</h4>
          <p>{post && post.content}</p>
        </div>
      </section>
    </Container>
  </Fragment>
}
