import React from 'react'

export default function Footer({ style }) {
  return <footer style={style}>
    <p>Copyright @ 2020 by North Season</p>
    <div>
      <a href="https://instagram.com/me_and_olmre" rel="noopener" target="_blank"><i className="fab fa-instagram"/></a>
      <a href="mailto:stenolmre@icloud.com"><i className="fas fa-envelope"/></a>
    </div>
  </footer>
}
