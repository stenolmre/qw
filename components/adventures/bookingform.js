import React, { Fragment, useState } from 'react'

const Form = ({ language, adventure }) => {
  const [adults, setAdults] = useState(1)
  const [youth, setYouth] = useState(0)
  const [customerData, setCustomerData] = useState({ name: '', email: '', phone: '', message: '' })
  const { name, email, phone, message } = customerData

  const onChange = e => setCustomerData({ ...customerData, [e.target.name]: e.target.value })

  const [processing, setProcessing] = useState(false)

  const checkoutSum = ((adventure.prices[0].price * adults) / 100 + (adventure.prices[1].price * youth) / 100).toFixed(2)

  return <div className="booking_form">
    <p className="booking_form_info">{language ? 'Booking a trip in advance means that we will guarantee a spot for you. It does not mean you must take part or pay the fee right now. We will send additional information 30 days prior the trip where you must decide wether you take part or not and then we will send you your recipt to make the payment.' : 'Elamusmatka broneerimine ei kohusta sind matkast osa võtma vaid garanteerib sulle osalusvõimaluse. Kui oled end registeerinud matkale, siis saadame Sulle 30 päeva enne matka algust kinnitava emaili, kus tuleb oma osaluse kas kinnitada või ära öelda, vastavalt sellele kas saadame Sulle maksekorralduse või ootame Sind järgmistele põnevatele seiklustele.'}</p>
    <label>{language ? adventure.prices[0].name : adventure.prices[0].nimi} <span style={{ color: 'red' }}>*</span></label>
    <div className="booking_form_choose_num">
      <p className="booking_form_choose_num_btn" onClick={() => adults >= 1 ? setAdults(adults - 1) : setAdults(0)}>-</p>
      <p className="booking_form_choose_number">{adults}</p>
      <p className="booking_form_choose_num_btn" onClick={() => setAdults(adults + 1)}>+</p>
    </div>
    <label>{language ? adventure.prices[1].name : adventure.prices[1].nimi} <span style={{ color: 'red' }}>*</span></label>
    <div className="booking_form_choose_num">
      <p className="booking_form_choose_num_btn" onClick={() => youth >= 1 ? setYouth(youth - 1) : setYouth(0)}>-</p>
      <p className="booking_form_choose_number">{youth}</p>
      <p className="booking_form_choose_num_btn" onClick={() => setYouth(youth + 1)}>+</p>
    </div>
    <strong><p>{language ? 'Summary' : 'Kokku'}: {checkoutSum}€</p></strong>
    <br />
    <label>{language ? 'Name' : 'Nimi'} <span style={{ color: 'red' }}>*</span></label>
    <input name="name" value={name} onChange={onChange} autoComplete="false"/>
    <label>Email <span style={{ color: 'red' }}>*</span></label>
    <input name="email" value={email} onChange={onChange} autoComplete="false"/>
    <label>{language ? 'Phone' : 'Telefon'} <span style={{ color: 'red' }}>*</span></label>
    <input name="phone" value={phone} onChange={onChange} autoComplete="false"/>
    <label>{language ? 'Additional info or questions' : 'Küsi lisa või kirjuta oma soovidest'}</label>
    <textarea name="message" value={message} onChange={onChange} autoComplete="false"/>
    <button>{language ? processing ? 'Booking..' : 'Book' : processing ? 'Broneerin..' : 'Broneeri'}</button>
  </div>
}

export default Form
