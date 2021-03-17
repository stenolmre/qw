import React, { Fragment } from 'react'
import { useRouter } from 'next/router'
import cookies from 'next-cookies'

import Layout from '@/components/layout'
import Adventures from '@/components/adventures'

const Index = ({ language }) => {
  const user_lang = language === 'eng' ? true : false
  const { query } = useRouter()

  return <Fragment>
    <Layout>
      <h1 className="adventures_layout_title">{user_lang ? 'Adventures' : 'Elamusmatkad'}</h1>
      <div className="adventures_layout">
        {query.search && <p className="search_result_title">{user_lang ? `Search results for the word "${query.search}"` : `Otsingutulemused sõnale "${query.search}"`}</p>}
        <Adventures />
      </div>
    </Layout>
  </Fragment>
}

Index.getInitialProps = async ctx => {
  const { lan } = cookies(ctx)
  return { language: lan }
}

export default Index
