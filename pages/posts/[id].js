import { Fragment, useEffect, useState } from 'react'
import axios from 'axios'
import Head from 'next/head'
import Link from 'next/link'
import { useRouter } from 'next/router'
import Container from './../../components/container'
import AddRating from './../../components/addrating'
import Comments from './../../components/comments'
import { usePostState, usePostDispatch } from './../../context/post'
import { getPost, comment, rate } from './../../actions/post'

export default function Post() {
  const dispatchPost = usePostDispatch()
  const postState = usePostState()
  const { post } = postState
  const router = useRouter()
  const { id } = router.query

  useEffect(() => {
    getPost(dispatchPost, id)
  }, [dispatchPost, id])

  return <Fragment>
    <Head>
      <title>qw - posts</title>
    </Head>
    <Container>
      <section className="post">
        {
          postState && post !== null
            ? <Fragment>
                <div className="post-image" style={{ backgroundImage: `url(${ post && post.image })` }}/>
                <div className="post-content">
                  <h1>{post && post.name}</h1>
                  <h4>by {post && post.author}</h4>
                  <p>{post && post.content}</p>
                </div>
              </Fragment>
            : 'null'
        }
      </section>
      <AddRating action={rate} dispatch={dispatchPost} id={id}/>
      <Comments title="Comment this post." state={post} action={comment} dispatch={dispatchPost} id={id}/>
    </Container>
  </Fragment>
}
