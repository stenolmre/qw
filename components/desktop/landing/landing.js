import React, { Fragment } from 'react'
import DesktopLayout from './../layout'
import Popular from './popular'
import Activities from './activities'
import AlbumSidebar from './../sidebars/albumsidebar'

export default function Landing({ userLanguage }) {
  return <DesktopLayout sidebar={<AlbumSidebar/>}>
    <Popular userLanguage={userLanguage}/>
    <Activities userLanguage={userLanguage}/>
  </DesktopLayout>
}
