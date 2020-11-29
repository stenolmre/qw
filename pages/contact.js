import { Fragment } from 'react'
import Cookies from 'js-cookie'
import Head from './../components/utils/head'
import Container from './../components/container'
import Contact from './../components/contact'

export default function About() {
  const userLanguage = Cookies.get('lan') === 'eng'
  return <Fragment>
    <Head title={userLanguage ? "North Season - Contact with us" : "North Season - Võta meiega ühendust"} description={userLanguage ? "Lapland. A land in the Arctic Circle with sweeping fells and northern lights, midnight sun and polar night. A home to reindeers, elves and Santa Claus, where for half a year, the trees wear winter coats. This could be the place where your next adventure awaits!" : "North Season - Kogeda midagi erilist, näha midagi uut, teha midagi põnevat – võtame teie soovid ja mõtted ning viime need üheskoos ellu. Tule ja avasta müstilise talvemaastiku lumiseid radu või löö kaasa meie suvistel ratta- ja jalgsimatkadel."} image="https://etreeningud.ee/media/images/stenolmre/OG_IMG_2946.jpg" url="https://stenolmre.com/contact" />
    <Container>
      <Contact/>
    </Container>
  </Fragment>
}
