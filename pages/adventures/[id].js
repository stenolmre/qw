import { Fragment, useEffect, useState } from 'react'
import axios from 'axios'
import Cookies from 'js-cookie'
import Head from './../../components/utils/head'
import { useRouter } from 'next/router'
import Container from './../../components/container'
import Loading from './../../components/utils/loading'
import Images from './../../components/adventure/images'
import Info from './../../components/adventure/info'
import Cart from './../../components/adventure/cart'
import { useAdventureState, useAdventureDispatch } from './../../context/adventure'
import { getAdventure } from './../../actions/adventure'

function Adventure(props) {
  const dispatchAdventure = useAdventureDispatch()
  const adventureState = useAdventureState()
  const { adventure } = adventureState
  const router = useRouter()
  const { id } = router.query
  const userLanguage = Cookies.get('lan') === 'eng'

  useEffect(() => {
    getAdventure(dispatchAdventure, id)
  }, [dispatchAdventure, id])

  return <Fragment>
    <Head title={userLanguage ? `${props.data.name}` : `${props.data.nimi}`} description={userLanguage ? "Lapland. A land in the Arctic Circle with sweeping fells and northern lights, midnight sun and polar night. A home to reindeers, elves and Santa Claus, where for half a year, the trees wear winter coats. This could be the place where your next adventure awaits!" : "Kogeda midagi erilist, näha midagi uut, teha midagi põnevat – võtame teie soovid ja mõtted ning viime need üheskoos ellu. Tule ja avasta müstilise talvemaastiku lumiseid radu või löö kaasa meie suvistel ratta- ja jalgsimatkadel."} image={props.data.images[0]} url="https://stenolmre.com/adventures/1" />
    <Container>
      <div className="adventure">
        {
          adventureState && adventure
            ? <Fragment>
                <Images adventure={adventure}/>
                <Info adventure={adventure} id={adventure._id}/>
                <Cart adventure={adventure}/>
              </Fragment>
            : <Loading/>
        }
      </div>
    </Container>
  </Fragment>
}

Adventure.getInitialProps = async ({ query }) => {
  const { id } = query

  const { data } = await axios.get(`https://stenolmre.com/api/adventures/get/?adventureId=${id}`)

  return {
    data
  }
}

export default Adventure
