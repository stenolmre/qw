import React, { Fragment } from 'react'
import Head from './../components/utils/head'
import Landing from './../components/landing'
import Mobile from './../components/mobile/mobile'

export default function Index() {
  return <Fragment>
    <Head title="North Season - Travel to Inspire Your Life" description="Lapland. A land in the Arctic Circle with sweeping fells and northern lights, midnight sun and polar night. A home to reindeers, elves and Santa Claus, where for half a year, the trees wear winter coats. This could be the place where your next adventure awaits!" image="https://etreeningud.ee/media/images/stenolmre/OG_IMG_2946.jpg" url="https://stenolmre.com" />
    <div className="desktop">
      <Landing/>
    </div>
    <div className="mobile">
      <Mobile/>
    </div>
  </Fragment>
}
