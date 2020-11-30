import { Fragment, useEffect } from 'react'
import Link from 'next/link'
import Cookies from 'js-cookie'
import Head from './../../components/utils/head'
import Container from './../../components/container'
import Heading from './../../components/utils/heading'
import Spinner from './../../components/utils/spinner'
import { useAlbumState, useAlbumDispatch } from './../../context/album'
import { getAlbums } from './../../actions/album'

export default function Albums() {
  const dispatchAlbum = useAlbumDispatch()
  const albumState = useAlbumState()
  const { albums } = albumState
  const userLanguage = Cookies.get('lan') === 'eng'

  useEffect(() => {
    getAlbums(dispatchAlbum)
  }, [dispatchAlbum])

  return <Fragment>
    <Head title={userLanguage ? 'North Season - Gallery' : 'North Season - Galerii'} description={userLanguage ? "Lapland. A land in the Arctic Circle with sweeping fells and northern lights, midnight sun and polar night. A home to reindeers, elves and Santa Claus, where for half a year, the trees wear winter coats. This could be the place where your next adventure awaits!" : "Kogeda midagi erilist, näha midagi uut, teha midagi põnevat – võtame teie soovid ja mõtted ning viime need üheskoos ellu. Tule ja avasta müstilise talvemaastiku lumiseid radu või löö kaasa meie suvistel ratta- ja jalgsimatkadel."} image="https://etreeningud.ee/media/images/stenolmre/OG_IMG_2946.jpg" url="https://stenolmre.com/albums" />
    <Container>
      <div className="gallery">
        <div className="album-previews">
          {
            albumState && albums
              ? albums.map(album => <Link key={album._id} href={`/albums/${album._id}`}><a>
                  <div className="album-preview">
                    {
                      album.thumbnails.map(image => <div key={image} className="album-preview-image" style={{ backgroundImage: `url(${image})`}}/>)
                    }
                    <div className="album-overlay">
                      <h2>+{album.images.length - 3}</h2>
                    </div>
                  </div>
                  <h4>{userLanguage ? album.name : album.nimi}</h4>
                </a></Link>)
              : <Spinner/>
          }
        </div>
      </div>
    </Container>
  </Fragment>
}
