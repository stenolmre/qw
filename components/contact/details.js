import React from 'react'

const Details = () => {
  return <div className="contact_details">
    <Detail icon="fas fa-envelope" url="mailto:stenolmre@icloud.com" name="stenolmre@icloud.com"/>
    <Detail icon="fas fa-phone" url="tel:37253461027" name="+372 5346 1027"/>
  </div>
}

const Detail = ({ icon, url, name }) => {
  return <div className="contact_detail">
    <i className={icon} />
    <a href={url} rel="noreferrer" target="_blank">{name}</a>
  </div>
}

export default Details
