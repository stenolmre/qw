import React, { Fragment, useState } from 'react'
import cookies from 'next-cookies'
import Head from './../../components/utils/head'
import Adv_Layout from './../../components/adventures/layout'
import AdventureCard from './../../components/utils/adventurecard'
import { useAdventureState } from './../../context/adventure'
import { snowshoeing_ad_eng, snowshoeing_ad_est } from './../../components/texts/adventures'
import { landingeng, landingest } from './../../components/texts/landing'

function Skiing({ language }) {
  const user_lang = language === 'eng' ? true : false
  const { adventures, loading } = useAdventureState()
  const [search, setSearch] = useState('')

  const content = () => {
    return {__html: `${user_lang ? snowshoeing_ad_eng : snowshoeing_ad_est}`};
  }

  return <Fragment>
    <Head title={user_lang ? "Skiing Adventures" : "Elamusmatkad Suuskadel"} description={user_lang ? landingeng : landingest} image="https://etreeningud.ee/media/images/stenolmre/OG_IMG_2946.jpg" url="https://stenolmre.com/adventures/skiing" />
      <Adv_Layout userLanguage={user_lang} onChange={e => setSearch(e.target.value)}>
        <div className="adventure-right-container">
          <h3>{user_lang ? 'Snowshoeing' : 'Räätsamatkad'}</h3>
          <div className="adventure-intro" dangerouslySetInnerHTML={content()}/>
          <div className="adventure-previews">
            {
              adventures && adventures.map(e => <AdventureCard
                key={e._id}
                link={`/adventures/${e._id}`}
                name={user_lang ? e.name : e.nimi}
                src={e.images.map(image => image).slice(0, 1)}
                topicon="fa-star"
                destination={e.location.start}
                price={(e.prices[0].price / 100).toFixed(2)}
              />)
            }
          </div>
        </div>
      </Adv_Layout>
  </Fragment>
}

Skiing.getInitialProps = async ctx => {
  const { lan } = cookies(ctx)
  return { language: lan }
}

export default Skiing
