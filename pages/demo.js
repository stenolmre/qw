import React, { Fragment } from 'react'

export default function Demo() {
  return <Fragment>
    <div className="demo-container">
      <p><i className="fas fa-route"/>&nbsp; NorthSeason</p>
      <div className="demo">
        <img src="https://etreeningud.ee/media/images/stenolmre/albums/Front_Page/IMG_0002.jpg" alt=""/>
      </div>
      <div className="text">Travel to inspire your life.</div>
    </div>
    <style jsx>
      {`
        .demo-container {
          width: 100%;
          height: calc(100vh - 20px);
          padding: 20px 0 0 0;
          background: linear-gradient(145deg, #B3BACA, #F2FCFF);
        }

        .demo {
          width: calc(100% - 40px);
          height: 350px;
          margin: 0 20px;
          background: linear-gradient(145deg, #FFFFFF, rgba(113, 90, 255));
          border-radius: 100%;
          box-shadow: 18.02px 18.02px 28px rgba(113, 90, 255, .6), -18.02px -18.02px 28px #F5FFFF;
          overflow: hidden;
        }

        .demo img {
          width: 96%;
          height: 96%;
          margin: 2%;
          border-radius: 100%;
          object-fit: cover;
          object-position: center;
        }

        .text {
          width: 80%;
          margin: 50px 0 0 10%;
	        color: rgba(113, 90, 255);
          text-align: center;
	        font-size: 3rem;
	        font-weight: 900;
	        text-shadow: -6px 6px 15px rgba(113, 90, 255, 0.5), 6px -6px 15px rgba(255, 255, 255, 0.8);
	        position: relative;
        }

        p {
          width: 80%;
          margin: 10px 0 50px 10%;
	        color: #fafafa;
          text-align: center;
	        font-size: 1rem;
	        font-weight: bold;
	        font-family: sans-serif;
	        text-shadow: -6px 6px 15px rgba(33, 33, 33, 1), 6px -6px 15px rgba(255, 255, 255, 0.8);
	        position: relative;
        }
      `}
    </style>
  </Fragment>
}
