import React, { Fragment, useEffect, useState } from 'react'
import cookies from 'next-cookies'
import axios from 'axios'
import Head from '@/utils/head'

import Layout from '@/components/layout'
import Adventure from '@/components/adventure'

const Index = ({ language, adventure }) => {
  const user_lang = language === 'eng' ? true : false

  return <Fragment>
    <Head title={user_lang ? adventure.name : adventure.nimi}/>
    <Layout>
      <div className="adventure_layout">
        <Adventure language={user_lang} adventure={adventure}/>
      </div>
    </Layout>
  </Fragment>
}

Index.getInitialProps = async ctx => {
  const { lan } = cookies(ctx)

  const id = ctx.query.id

  const { data } = !process.env.NODE_ENV || process.env.NODE_ENV === 'development'
    ? await axios.get(`http://localhost:3000/api/adventures/get?adventureId=${id}`)
    : await axios.get(`https://qw-kappa.vercel.app/api/adventures/get?adventureId=${id}`)

  return { language: lan, adventure: data }
}

export default Index
