import React, { Fragment } from 'react'

export default function Demo2() {
  return <Fragment>
      <div className="loading-container" data-title=".dot-pulse">
        <img src="northseason.png" alt=""/>
        <div className="dot-pulse"></div>
      </div>
    <style jsx="jsx">
      {
        `
        .loading-container {
          height: 100vh;
          display: flex;
          flex-direction: column;
          justify-content: center;
          align-items: center;
          background: rgba(33, 33, 33, .2);
        }

        .loading-container img {
          width: 145px;
          margin-bottom: 25px;
        }

        .dot-pulse {
          position: relative;
          left: -9999px;
          width: 10px;
          height: 10px;
          border-radius: 5px;
          background-color: rgba(33, 33, 33, 1);
          color: rgba(33, 33, 33, 1);
          box-shadow: 9999px 0 0 -5px rgba(33, 33, 33, 1);
          animation: dotPulse 1.5s infinite linear;
          animation-delay: 0.25s;
        }

        .dot-pulse::after,
        .dot-pulse::before {
          content: '';
          display: inline-block;
          position: absolute;
          top: 0;
          width: 10px;
          height: 10px;
          border-radius: 5px;
          background-color: rgba(33, 33, 33, 1);
          color: rgba(33, 33, 33, 1);
        }

        .dot-pulse::before {
          box-shadow: 9984px 0 0 -5px rgba(33, 33, 33, 1);
          animation: dotPulseBefore 1.5s infinite linear;
          animation-delay: 0s;
        }

        .dot-pulse::after {
          box-shadow: 10014px 0 0 -5px rgba(33, 33, 33, 1);
          animation: dotPulseAfter 1.5s infinite linear;
          animation-delay: 0.5s;
        }

        @keyframes dotPulseBefore {
          0% {
            box-shadow: 9984px 0 0 -5px rgba(33, 33, 33, 1);
          }
          30% {
            box-shadow: 9984px 0 0 2px rgba(33, 33, 33, 1);
          }
          100%,
          60% {
            box-shadow: 9984px 0 0 -5px rgba(33, 33, 33, 1);
          }
        }

        @keyframes dotPulse {
          0% {
            box-shadow: 9999px 0 0 -5px rgba(33, 33, 33, 1);
          }
          30% {
            box-shadow: 9999px 0 0 2px rgba(33, 33, 33, 1);
          }
          100%,
          60% {
            box-shadow: 9999px 0 0 -5px rgba(33, 33, 33, 1);
          }
        }

        @keyframes dotPulseAfter {
          0% {
            box-shadow: 10014px 0 0 -5px rgba(33, 33, 33, 1);
          }
          30% {
            box-shadow: 10014px 0 0 2px rgba(33, 33, 33, 1);
          }
          100%,
          60% {
            box-shadow: 10014px 0 0 -5px rgba(33, 33, 33, 1);
          }
        }
         `
      }</style>
  </Fragment>
}
