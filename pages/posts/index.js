import { Fragment } from 'react'
import Head from 'next/head'
import Container from './../../components/container'
import Link from 'next/link'
import Navbar from './../../components/navbar'
import Footer from './../../components/footer'
import Heading from './../../components/heading'
import Search from './../../components/search'
import PostCard from './../../components/postcard'

export default function Posts() {
  return <Fragment>
    <Head>
      <title>qw - posts</title>
    </Head>
    <Container>
      <section className="posts-container">
        <Heading name="all posts" link="Latest ↡"/>
        <Search/>
        <div className="posts">
          <PostCard title="Day 2 - To Nordkapp" author="Sten Olmre" topicon="fa-heart" bottomicon="fa-user"/>
          <PostCard title="Day 2 - To Nordkapp" author="Sten Olmre" topicon="fa-heart" bottomicon="fa-user"/>
          <PostCard title="Day 2 - To Nordkapp" author="Sten Olmre" topicon="fa-heart" bottomicon="fa-user"/>
        </div>
      </section>
    </Container>
  </Fragment>
}
