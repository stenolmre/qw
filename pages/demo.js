import React from 'react'
import Navbar from './../components/mobile/navbar'

export default function Demo() {
  return <section>
    <Navbar/>
    <h1>LAPLAND</h1>
    <h2>Travel to inspire your life.</h2>

    <style jsx="jsx">
      {
        `
        section {
          min-height: 100vh;
          background: #fff;
        }

        h1 {
          font-size: 10rem;
          text-align: left;
          margin: 30px 0 0 15%;
          color: #fff;
          text-shadow: -8px -8px 12px rgba(255, 255, 255, .02), 8px 8px 12px rgba(0, 0, 0, .06);
          caret-color: #262626;
          outline: none;
        }

        h2 {
          width: 50%;
          font-size: 4.5rem;
          margin: -100px 25% 20px;
          color: rgba(113, 90, 255);
          text-align: center;
          font-weight: 900;
          text-shadow: -6px 6px 15px rgba(113, 90, 255, 0.3), 6px -6px 15px rgba(255, 255, 255, 0.8);
        }
         `
      }</style>
  </section>
}
