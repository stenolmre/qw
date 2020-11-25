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

        <div className="adventure-previews">
          {
            adventureState && adventures
              ? adventures.filter(item => item.name.toLowerCase().includes(search.toLowerCase())).map(adventure => <div key={adventure._id}>
                  <AdventureCard link={`/adventures/${adventure._id}`} author={adventure.location.destination} topicon="fa-star" bottomicon="fa-map-marker-alt" destination={adventure.location.destination} name={adventure.name} src={adventure.images.map(image => image).slice(0, 1)} alt={adventure.name} price={(adventure.price / 100).toFixed(2)}/>
                </div>)
              : <Spinner/>
          }
        </div>
      </div>
    </Container>
  </Fragment>
}
