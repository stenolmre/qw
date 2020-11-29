import React, { Fragment } from 'react'
import Head from './../components/utils/head'
import Landing from './../components/landing'
import Mobile from './../components/mobile/mobile'

export default function Index() {
  return <Fragment>
    <Head title="North Season" description="" image="https://etreeningud.ee/media/images/stenolmre/albums/K%C3%A4tk%C3%A4tunturi_11_2020/IMG_2946.jpg" url="https://stenolmre.com" />
    <div className="desktop">
      <Landing/>
    </div>
    <div className="mobile">
      <Mobile/>
    </div>
  </Fragment>
}
