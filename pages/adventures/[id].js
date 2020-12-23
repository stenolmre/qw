import { Fragment, useEffect } from 'react'
import cookies from 'next-cookies'
import Head from './../../components/utils/head'
import { useRouter } from 'next/router'
import MobileAdventure from './../../components/mobile/adventure/adventure'
import { useAdventureState, useAdventureDispatch } from './../../context/adventure'
import { getAdventure } from './../../actions/adventure'

function Adventure({ language, person }) {
  const dispatchAdventure = useAdventureDispatch()
  const { adventure } = useAdventureState()
  const { query } = useRouter()
  const user_lang = language === 'eng' ? true : false
  console.log(person);
  useEffect(() => {
    getAdventure(dispatchAdventure, query.id)
  }, [dispatchAdventure, query])

  return <Fragment>
    {
      adventure && <Head title={user_lang ? 'ss' : adventure.nimi} description={user_lang ? adventure.description : adventure.kirjeldus} image={adventure.images[0]} url={`https://stenolmre.com/adventures/${adventure._id}`}/>
    }
    <MobileAdventure userLanguage={user_lang}/>
  </Fragment>
}

Adventure.getInitialProps = ctx => {
  const { lan } = cookies(ctx)

  const person = !process.env.NODE_ENV || process.env.NODE_ENV === 'development'
    ? 'Development'
    : 'Sten Olmre'

  return { language: lan || '', person: person }
}

export default Adventure
