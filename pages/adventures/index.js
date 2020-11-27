import React, { Fragment, useEffect, useState } from 'react'
import Head from 'next/head'
import Link from 'next/link'
import Cookies from 'js-cookie'
import { useRouter } from 'next/router'
import Container from './../../components/container'
import Spinner from './../../components/utils/spinner'
import AdventureCard from './../../components/utils/adventurecard'
import categories from './../../components/arrays/categories'
import categoriesEst from './../../components/arrays/categoriesEst'
import { useAdventureState, useAdventureDispatch } from './../../context/adventure'
import { getAdventures, getAdventuresByCategory } from './../../actions/adventure'

export default function Adventures() {
  const [search, setSearch] = useState('')
  const dispatchAdventure = useAdventureDispatch()
  const adventureState = useAdventureState()
  const { adventures } = adventureState
  const router = useRouter()
  const userLanguage = Cookies.get('lan') === 'eng'

  useEffect(() => {
    if (!router.query.category || router.query.category === 'all') {
      getAdventures(dispatchAdventure)
    } else {
      getAdventuresByCategory(dispatchAdventure, router.query.category)
    }
  }, [dispatchAdventure, router.query.category])

  return <Fragment>
    <Head>
      <title>qw - adventures</title>
    </Head>
    <Container>
      <div className="adventures">

        <div className="adventure-categories">
          <h5>{userLanguage ? 'Search adventure' : 'Otsi elamusmatka'}</h5>
          <input onChange={e => setSearch(e.target.value)}/>
          <span><i className="fas fa-search"/></span>
          <h5>{userLanguage ? 'Search by category' : 'Otsi kategooria järgi'}</h5>
          <div>
          {
            userLanguage
              ? categories.map(category => <p key={category.category} style={router.query.category === category.category ? {color: '#ff4500'} : {color: 'black'}}>
                  <Link href={`/adventures?category=${category.category}`}><a>{category.name}</a></Link>
                </p>)
              : categoriesEst.map(category => <p key={category.category} style={router.query.category === category.category ? {color: '#ff4500'} : {color: 'black'}}>
                  <Link href={`/adventures?category=${category.category}`}><a>{category.name}</a></Link>
                </p>)
          }
          </div>
        </div>
        <div className="adventure-right-container">
          <Texts router={router} userLanguage={userLanguage}/>
          <div className="adventure-previews">
            {
              adventureState && adventures
                ? adventures.filter(item =>       item.name.toLowerCase().includes(search.toLowerCase())).map(adventure => <div key={adventure._id}>
                    <AdventureCard link={`/adventures/${adventure._id}`} author={adventure.location.destination} topicon="fa-star" bottomicon="fa-map-marker-alt" destination={adventure.location.destination} name={adventure.name} src={adventure.images.map(image => image).slice(0, 1)} alt={adventure.name} price={(adventure.price / 100).toFixed(2)}/>
                  </div>)
                : <Spinner/>
            }
          </div>
        </div>

      </div>
    </Container>
  </Fragment>
}

function Texts({ router, userLanguage }) {
  return <Fragment>
    {
      router.query.category === 'all' && <h3>{userLanguage ? 'Adventures' : 'Elamusmatkad'}</h3>
    }
    {
      router.query.category === 'snowshoetrekking' && <h3>{userLanguage ? 'Hiking with Snowshoes' : 'Elamusmatkad Räätsadega'}</h3>
    }
    {
      router.query.category === 'skiing' && <h3>{userLanguage ? 'Skiing' : 'Suusatamine'}</h3>
    }
    {
      router.query.category === 'all' && <p className="adventure-intro">{userLanguage ? 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.' : 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.'}</p>
    }
    {
      router.query.category === 'snowshoetrekking' && <p className="adventure-intro">{userLanguage ? 'Put on a pair of snowshoes, journey into the heart of winter and explore the peaceful charm of the Lappish landscape. Snowshoes take you beyond well-trodden trails to crunch your way over untouched snow. Climb fells, cross bogs and lakes and breathe in the quiet joy of the Lappish wilderness. Snowshoeing is safe and easy to do. It’s a great option for anyone who enjoys exercise and spending time in nature. No previous experience or complicated equipment required. Snowshoes are attached directly to your boots and snowshoeing poles will be provided upon request.' : 'Astu Lapimaa imekaunisse südamesse ja avasta talvemaastiku maagilisi radu. Lumeräätsadel rännates saad hõlpsasti kõndida ka sügavas lumes ja nautida iga sammu krõmpsuvat võlu. Matka tundrutel, ületa rabasid ja järvi ning tunne liikumisrõõmu. Räätsadel on lihtne ja turvaline kõndida. Räätsamatk sobib kõigile, kes naudivad loodust ja liikumist, ega nõua matkajalt erilisi oskusi või varustust. Räätsad kinnitatakse matkaja saabaste külge ja soovi korral saab abiks ka matkakepid.'}</p>
    }
    {
      router.query.category === 'skiing' && <p className="adventure-intro">{userLanguage ? 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.' : 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.'}</p>
    }
  </Fragment>
}
