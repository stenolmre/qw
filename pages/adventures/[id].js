import { Fragment, useEffect } from 'react'
import Head from 'next/head'
import Link from 'next/link'
import { useRouter } from 'next/router'
import Container from './../../components/container'
import Heading from './../../components/heading'
import Spinner from './../../components/spinner'
import { useAdventureState, useAdventureDispatch } from './../../context/adventure'
import { getAdventure } from './../../actions/adventure'

export default function Adventure() {
  const dispatchAdventure = useAdventureDispatch()
  const adventureState = useAdventureState()
  const { adventure } = adventureState
  const router = useRouter()
  const { id } = router.query

  useEffect(() => {
    getAdventure(dispatchAdventure, id)
  }, [dispatchAdventure, id])

  return <Fragment>
    <Head>
      <title>qw - adventure</title>
    </Head>
    <Container>
      <div className="adventure">
        {
          adventureState && adventure
            ? <Fragment>
                <div className="adventure-images">
                  {
                    adventure.images.map(image => <img src={image} alt='Illustration'/>)
                  }
                </div>
                <div className="adventure-content">
                  <Heading name={adventure.name}/>
                  <div className="adventure-first-info">
                    <p>{adventure.duration / 60}H</p>
                  </div>
                </div>
              </Fragment>
            : <Heading name="Adventure" />
        }
      </div>
    </Container>
  </Fragment>
}
