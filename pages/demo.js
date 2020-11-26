import React from 'react'

export default function MyComponent() {
  return <div className="parent">
    <img src="northseason.png" alt="logo"/>
    <div className="child"/>
    <style jsx="jsx">
      {
        ` .parent {
          width: 100%;
          height: 100vh;
          display: flex;
          align-items: center;
          justify-content: center;
          background: black;
          font-size: 4rem;
        }

        .parent img {
          width: 125px;
        }

        .child {
          width: 0px;
          margin: 45px 0 0 0;
        }

        .child:after {
          content: ' .';
          animation: dots 1s steps(5, end) infinite;
        }

        @keyframes dots {
          0%,
          20% {
            color: rgba(0,0,0,0);
            text-shadow: 0.25em 0 0 rgba(0,0,0,0), 0.5em 0 0 rgba(0,0,0,0);
          }
          40% {
            color: white;
            text-shadow: 0.25em 0 0 rgba(0,0,0,0), 0.5em 0 0 rgba(0,0,0,0);
          }
          60% {
            text-shadow: 0.25em 0 0 white, 0.5em 0 0 rgba(0,0,0,0);
          }
          100%,
          80% {
            text-shadow: 0.25em 0 0 white, 0.5em 0 0 white;
          }
        }
         `}</style>
  </div>
}
