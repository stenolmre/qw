import React, { Fragment } from 'react'

export default function Loading() {
  return <Fragment>
      <div className="loading-container" data-title=".dot-pulse">
        <img src="../northseason_1.png" alt=""/>
        <div className="dot-pulse"></div>
      </div>
    <style jsx="jsx">
      {
        `
        .loading-container {
          width: 100%;
          height: 100vh;
          display: flex;
          flex-direction: column;
          justify-content: center;
          align-items: center;
          background: #212121;
          position: fixed;
          top: 0;
          left: 0;
        }

        .loading-container img {
          width: 145px;
        }

        .dot-pulse {
          position: relative;
          left: -9999px;
          width: 10px;
          height: 10px;
          border-radius: 5px;
          background-color: rgba(250, 250, 250, 1);
          color: rgba(250, 250, 250, 1);
          box-shadow: 9999px 0 0 -5px rgba(250, 250, 250, 1);
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
          background-color: rgba(250, 250, 250, 1);
          color: rgba(250, 250, 250, 1);
        }

        .dot-pulse::before {
          box-shadow: 9984px 0 0 -5px rgba(250, 250, 250, 1);
          animation: dotPulseBefore 1.5s infinite linear;
          animation-delay: 0s;
        }

        .dot-pulse::after {
          box-shadow: 10014px 0 0 -5px rgba(250, 250, 250, 1);
          animation: dotPulseAfter 1.5s infinite linear;
          animation-delay: 0.5s;
        }

        @keyframes dotPulseBefore {
          0% {
            box-shadow: 9984px 0 0 -5px rgba(250, 250, 250, 1);
          }
          30% {
            box-shadow: 9984px 0 0 2px rgba(250, 250, 250, 1);
          }
          100%,
          60% {
            box-shadow: 9984px 0 0 -5px rgba(250, 250, 250, 1);
          }
        }

        @keyframes dotPulse {
          0% {
            box-shadow: 9999px 0 0 -5px rgba(250, 250, 250, 1);
          }
          30% {
            box-shadow: 9999px 0 0 2px rgba(250, 250, 250, 1);
          }
          100%,
          60% {
            box-shadow: 9999px 0 0 -5px rgba(250, 250, 250, 1);
          }
        }

        @keyframes dotPulseAfter {
          0% {
            box-shadow: 10014px 0 0 -5px rgba(250, 250, 250, 1);
          }
          30% {
            box-shadow: 10014px 0 0 2px rgba(250, 250, 250, 1);
          }
          100%,
          60% {
            box-shadow: 10014px 0 0 -5px rgba(250, 250, 250, 1);
          }
        }
         `
      }</style>
  </Fragment>
}
