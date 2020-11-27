import React, { Fragment } from 'react'
import Link from 'next/link'
import Cookies from 'js-cookie'
import Sidebar from './sidebar'
import Navbar from './navbar'
import Footer from './footer'

export default function Demo() {
  const language = Cookies.get('lan') === 'eng'
  return <Fragment>
    <img className="front-cover" src="https://etreeningud.ee/media/images/stenolmre/albums/K%C3%A4tk%C3%A4tunturi_11_2020/IMG_2946.jpg" alt="aurora-light" />
    <div className="front-cover-overlay"/>
    <div className="front-page-container">
      <div>
        <Navbar />
        <div className="front-page">
          {
            language
              ? <Fragment>
                  <h1>Travel to inspire your life</h1>
                  <p>Lapland. A land in the Arctic Circle with sweeping fells and northern lights, midnight sun and polar night. A home to reindeers, elves and Santa Claus, where for half a year, the trees wear winter coats. This could be the place where your next adventure awaits!</p>
                </Fragment>
              : <Fragment>
                  <h1>Puhka Maailmas Reisides</h1>
                  <p>Kogeda midagi erilist, näha midagi uut, teha midagi põnevat – võtame teie soovid ja mõtted ning viime need üheskoos ellu. Tule ja avasta müstilise talvemaastiku lumiseid radu või löö kaasa meie suvistel ratta- ja jalgsimatkadel.</p>
                </Fragment>
          }
          <div className="">
            <hr/>
            <Link href="/adventures?category=all"><a>{language ? 'Show all experiences' : 'Vaata elamusmatku'}</a></Link>
          </div>
        </div>
        <Footer />
      </div>
      <Sidebar />
    </div>
  </Fragment>
}
