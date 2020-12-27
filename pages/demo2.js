import React, { Fragment } from 'react'

export default function Demo2() {
  return <Fragment>
    <div>
      <svg viewBox="0 0 140 140" xmlns="http://www.w3.org/2000/svg">
  <path fill="#FF0066" d="M59.3,-42.9C72.3,-31,75,-6.6,67.1,10.3C59.3,27.3,40.8,36.8,21.2,47.6C1.7,58.3,-19,70.3,-38.3,66.1C-57.6,62,-75.5,41.6,-81.6,17.8C-87.8,-6.1,-82.1,-33.5,-66.5,-46C-51,-58.5,-25.5,-56,-1.2,-55.1C23.2,-54.1,46.3,-54.8,59.3,-42.9Z" transform="translate(70 70)" />
</svg>

      <h4>Book and adventure</h4>
    </div>
    <style jsx>
      {`
        div {
          width: 260px;
          height: 150px;
          display: flex;
          align-items: center;
          justify-content: center;
          position: relative;
          background: #eee;
        }

        div svg {
          width: 100%;
          height: 100%;
          position: absolute;
          z-index: 1;
          display:block;
          vertical-align:top;
        }

        h4 {
          z-index: 2;
          color: white;
          margin-left: -15px;
        }
      `}
    </style>
  </Fragment>
}
