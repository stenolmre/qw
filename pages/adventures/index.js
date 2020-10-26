import { Fragment, useEffect } from 'react'
import Head from 'next/head'
import Link from 'next/link'
import { useRouter } from 'next/router'
import Container from './../../components/container'
import Heading from './../../components/heading'
import PostCard from './../../components/postcard'
import Spinner from './../../components/spinner'
import AdventureCard from './../../components/adventurecard'
import categories from './../../components/utils/categories'
import { useAdventureState, useAdventureDispatch } from './../../context/adventure'
import { getAdventures, getAdventuresByCategory } from './../../actions/adventure'

export default function Adventures() {
  const dispatchAdventure = useAdventureDispatch()
  const adventureState = useAdventureState()
  const { adventures } = adventureState
  const router = useRouter()

  useEffect(() => {
    if (!router.query.category) {
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
          <div onClick={() => router.push('/adventures')}>
            <i className="fas fa-grip-horizontal"/>
            <h4>adventures</h4>
          </div>
          {
            categories.map(category => <div key={category.category} onClick={() => router.push(`/adventures?category=${category.category}`)}>
              <i className={category.icon}/>
              <h4>{category.name}</h4>
            </div>)
          }
        </div>
        <div className="adventure-previews">
          {
            adventureState && adventures
              ? adventures.map(adventure => <div key={adventure._id}>
                  <AdventureCard link={`/adventures/${adventure._id}`} author={adventure.location.destination} topicon="fa-star" bottomicon="fa-map-marker-alt" destination={adventure.location.destination} name={adventure.name} src={adventure.images.map(image => image).slice(0, 1)} alt={adventure.name} price={(adventure.price / 100).toFixed(2)}/>
                </div>)
              : <Spinner/>
          }
        </div>
      </div>
    </Container>
  </Fragment>
}
