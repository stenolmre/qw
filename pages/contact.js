import React, { Fragment } from 'react'
import cookies from 'next-cookies'
import Head from '@/utils/head'

import Layout from '@/components/layout'
import Form from '@/components/form'
import Details from '@/components/details'
import Illustration from '@/components/illustration'

const Index = ({ language }) => {
  const user_lang = language === 'eng' ? true : false

  return <Fragment>
    <Head title={user_lang ? 'Let\'s talk' : 'Kirjuta meile'}/>
    <Layout>
      <div className="contact_layout">
        <h1>{user_lang ? 'Let\'s talk' : 'Kirjuta meile'}</h1>
        <p>{user_lang ? 'Customer satisfaction is our most important goal and we are taking great pride for giving our best to make you, as customer, feel pleased and served as best as possible. If you have any questions, recommendations or anything else please do not hesitate to send us a message via form below, via email or via phone and we will get back to you soon. Thanks!' : 'Kliendisõbralikkus on meie esimene prioriteet ja me teeme endast oleneva, et pakkuda parimat klienditeenindust. Meie peamine eesmärk on lahedada kliendil tekkinud küsimused ja/või probleemid. Kui Sul on tekkinud küsimusi või on soovid ettepanekuid teha, siis ära kahtle meile kirjutades, kas läbi alloleva vormi, emaili või telefoni teel. Vastame Sulle esimesel võimalusel. Aitäh!'}</p>
        <Form />
        <Details />
        <Illustration />
      </div>
    </Layout>
  </Fragment>
}

Index.getInitialProps = async ctx => {
  const { lan } = cookies(ctx)
  return { language: lan }
}

export default Index
