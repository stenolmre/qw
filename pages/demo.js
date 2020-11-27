import React, { Fragment, useState } from 'react'

export default function Demo() {
  const [open, setOpen] = useState(false)
  return <Fragment>
    <div className={!open ? '' : 'show-div'}>
      <a className={!open ? '' : 'show-a'}>Hello</a>
      <a className={!open ? '' : 'show-a'}>Hello</a>
      <a className={!open ? '' : 'show-a'}>Hello</a>
    </div>
    <button onClick={() => setOpen(!open)}>{!open ? 'Open' : 'Close'}</button>
      <style jsx>{`
        div {
          width: 100%;
          height: 100px;
          display: flex;
          align-items: center;
          justify-content: center;
          background: #eee;
          box-shadow: 1px 2px 11px rgba(33, 33, 33, .3);
        }

        a {
          margin: 0 25px;
          text-transform: uppercase;
        }

        button {
          display: none;
        }

        @media (max-width: 1000px) {
          div {
            width: 300px;
            height: 90vh;
            margin-left: -300px;
            transition: .4s ease-out;
            flex-direction: column;
          }

          .show-div {
            position: fixed;
            top: 0;
            left: 0;
            margin: 0;
            transition: .7s ease-out;
          }

          a {
            opacity: 0;
          }

          .show-a {
            opacity: 1;
            transition: .4s ease-out;
          }

          button {
            display: block;
            position: absolute;
            left: 0;
            bottom: 5vh;
          }
        }
      `}</style>
  </Fragment>
}
