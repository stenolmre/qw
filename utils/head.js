import React from 'react'
import Head from 'next/head'

const MetaTags = ({ title, description, image, url }) => <Head>
  <title>{title}</title>
  <meta name="viewport" content="width=device-width, initial-scale=1.0, maximum-scale=1.0,user-scalable=0"/>
  <meta name="description" content={description ? description : 'Eesmärgiks on alati olla rohkem, kui lihtsalt hea ning selle eesmärgi nimel olen valmis kõvasti tööd tegema, uusi teadmisi omandama ning neid oma töös rakendama.'}/>
  <meta name="image" content={image ? image : 'https://res.cloudinary.com/djz69vbsq/image/upload/v1615392398/stenolmre/image_hwkchn.jpg'}/>
  <meta name="keywords" content="Software, Developer, Web, Website"/>
  <link rel="shortcut icon" type="image/x-icon" href="icon.png" />
  <meta property="og:title" content={title}/>
  <meta property="og:description" content={description ? description : 'Eesmärgiks on alati olla rohkem, kui lihtsalt hea ning selle eesmärgi nimel olen valmis kõvasti tööd tegema, uusi teadmisi omandama ning neid oma töös rakendama.'}/>
  <meta property="og:image" content={image ? image : 'https://res.cloudinary.com/djz69vbsq/image/upload/v1615392398/stenolmre/image_hwkchn.jpg'}/>
  <meta property="og:url" content={url}/>
  <meta name="twitter:title" content={title}/>
  <meta name="twitter:description" content={description ? description : 'Eesmärgiks on alati olla rohkem, kui lihtsalt hea ning selle eesmärgi nimel olen valmis kõvasti tööd tegema, uusi teadmisi omandama ning neid oma töös rakendama.'}/>
  <meta name="twitter:image" content={image ? image : 'https://res.cloudinary.com/djz69vbsq/image/upload/v1615392398/stenolmre/image_hwkchn.jpg'}/>
  <meta name="twitter:card" content="summary_large_image"/>
</Head>

export default MetaTags
