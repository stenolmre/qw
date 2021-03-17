import React, { Fragment } from 'react'
import cookies from 'next-cookies'
import Head from '@/utils/head'

import Layout from '@/components/layout'
import Hero from '@/components/hero'
import Sidebar from '@/components/sidebar'
import Feedback from '@/components/feedback'

const Index = ({ language }) => {
  const user_lang = language === 'eng' ? true : false

  return <Fragment>
    <Head title="North Season"/>
    <Layout>
      <div className="landing_content">
        <div className="landing_content_left">
          <Hero />
          <Feedback language={user_lang}/>
        </div>
        <Sidebar />
      </div>
    </Layout>
  </Fragment>
}

Index.getInitialProps = async ctx => {
  const { lan } = cookies(ctx)
  return { language: lan }
}

export default Index
