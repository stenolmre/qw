import React, { Fragment } from 'react'
import Cookies from 'js-cookie'
import Head from './../components/utils/head'
import Landing from './../components/landing'
import Mobile from './../components/mobile/mobile'

export default function Index() {
  return <Fragment>
    {
      Cookies.get('lan') === 'eng'
        ? <Head title="North Season - Travel to Inspire Your Life" description="Lapland. A land in the Arctic Circle with sweeping fells and northern lights, midnight sun and polar night. A home to reindeers, elves and Santa Claus, where for half a year, the trees wear winter coats. This could be the place where your next adventure awaits!" image="https://etreeningud.ee/media/images/stenolmre/OG_IMG_2946.jpg" url="https://stenolmre.com" />
      : <Head title="North Season - Puhka Maailmas Reisides" description="Kogeda midagi erilist, näha midagi uut, teha midagi põnevat – võtame teie soovid ja mõtted ning viime need üheskoos ellu. Tule ja avasta müstilise talvemaastiku lumiseid radu või löö kaasa meie suvistel ratta- ja jalgsimatkadel." image="https://etreeningud.ee/media/images/stenolmre/OG_IMG_2946.jpg" url="https://stenolmre.com" />
    }
    <div className="desktop">
      <Landing/>
    </div>
    <div className="mobile">
      <Mobile/>
    </div>
  </Fragment>
}
