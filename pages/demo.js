import React from 'react'
import Navbar from './../components/mobile/navbar'

export default function Demo() {
  return <section>
    <Navbar/>
    <h1>LAPLAND</h1>
    <h2>Travel to inspire your life.</h2>
    <svg viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg">
      <defs>
			<clipPath id="user-space" clipPathUnits="userSpaceOnUse">
      <path fill="#8A3FFC" d="M46.1,-72.9C59.9,-71.8,71.5,-59.9,76.6,-45.9C81.7,-32,80.4,-16,75.4,-2.9C70.4,10.3,61.9,20.5,53.4,28.7C45,36.8,36.6,42.9,27.7,50.8C18.8,58.7,9.4,68.4,-3.6,74.7C-16.6,80.9,-33.2,83.5,-46.2,78C-59.3,72.5,-68.8,58.9,-69.8,44.5C-70.9,30.1,-63.4,15.1,-64.3,-0.5C-65.1,-16,-74.1,-32,-71.7,-44C-69.3,-56.1,-55.5,-64.1,-41.6,-65.1C-27.8,-66.1,-13.9,-60.1,1.1,-62.1C16.1,-64,32.3,-73.9,46.1,-72.9Z" transform="translate(100 100)"/>
      </clipPath>
		</defs>
      <image width="100%" height="100%" preserveAspectRatio="xMinYMin slice" href="aurora.jpeg" clip-path="url(#user-space)"/>
    </svg>
    <style jsx="jsx">
      {
        `
        svg {
          width: 500px;

        }
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

        p {
          width: 325px;
          margin: 0;
          font-size: 0.875rem;
        }

        main {
          margin: 25px 15% 0 0;
          display: flex;
          align-items: center;
          justify-content: flex-end;
        }

        main img {
          min-width: 275px;
          height: 325px;
          margin: 0 10px;
        }

        h2 {
          width: 50%;
          font-size: 4.5rem;
          margin: -100px 25% 20px;

          color: rgba(113, 90, 255);
          text-align: center;
          font-weight: 900;
          text-shadow: -6px 6px 15px rgba(113, 90, 255, 0.5), 6px -6px 15px rgba(255, 255, 255, 0.8);
        }
         `
      }</style>
  </section>
}
