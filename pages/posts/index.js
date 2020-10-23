import { Fragment } from 'react'
import Link from 'next/link'
import Navbar from './../../components/navbar'
import Footer from './../../components/footer'
import { BlogCard } from './../../components/mobilelanding'

export default function Posts() {
  return <Fragment>
    <Navbar style={{ color: 'black', boxShadow: '0 0 7px rgba(33, 33, 33, .2)' }}/>
    <br/>
    <div className="mobile-landing-header">
      <h1 style={{color: 'black'}}>All posts</h1>
    </div>
    <div className="mobile-search">
      <input placeholder="Search" onChange={e => e.target.name = e.target.value}/>
      <span><i className="fas fa-search"/></span>
    </div>
    <br/>
    <div className="posts">
      <BlogCard title="Day 2 - To Nordkapp" author="Sten Olmre"/>
      <BlogCard title="Day 1 - To Nordkapp" author="Sten Olmre"/>
      <BlogCard title="Day 1 - To Nordkapp" author="Sten Olmre"/>
    </div>
    <Footer style={{ background: 'white', color: 'black', boxShadow: '0 0 7px rgba(33, 33, 33, .2)' }}/>
  </Fragment>
}
