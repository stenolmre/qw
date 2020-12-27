import React from 'react'
import Link from 'next/link'

export default function Popular() {
  return <div className="desktop-popular">
    <div className="desktop-popular-image">
      <img src="https://etreeningud.ee/media/images/stenolmre/albums/Nordkapp/E21C46E4-4361-4DA9-98BF-D3B2937093DA.jpeg" alt="biketouring"/>
    </div>
    <div>
      <h1>Bike Tour to Nordkapp</h1>
      <p>Most nothern place in Europe waits for you. Ride through amazing lapland and beside a Northern sea to gather memories that lasts forever.</p>
      <Link href="/"><a>Show details</a></Link>
    </div>
  </div>
}
