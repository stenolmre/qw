import React, { Fragment, useState } from 'react'
import DatePicker, { utils } from 'react-modern-calendar-datepicker';
import 'react-modern-calendar-datepicker/lib/DatePicker.css';

export default function DateTime({ userLanguage, order, setOrder, adventure }) {
  return <Fragment>
    <div>
      <label className="booking-times-label">{userLanguage ? 'Choose Date' : 'Vali Kuupäev'}*</label>
      <div className="booking-times">
        <select name="dates" id="dates" onChange={e => setOrder({ ...order, day: e.target.value })}>
          <option value="" selected disabled hidden>..</option>
          <option value="26.12.2020">26.12.2020</option>
          <option value="27.12.2020">27.12.2020</option>
          <option value="28.12.2020">28.12.2020</option>
          <option value="29.12.2020">29.12.2020</option>
        </select>
      </div>
    </div>
    <Fragment>
      <label className="booking-times-label">{userLanguage ? 'Choose Time' : 'Vali Kellaaeg'}*</label>
      <div className="booking-times">
        {
          adventure.availability.time.map(e => {
            return <Fragment key={e}>
              <input
                type="radio"
                id={e} name="time" value={e}
                onClick={() => setOrder({ ...order, time: e })}
                required/>
              <label className={ order.time === e ? 'chosen booking-time' : 'booking-time' } htmlFor={e}>{e}</label>
            </Fragment>
          })
        }
      </div>
    </Fragment>
    <br/>
    <small>*
      {
        userLanguage
          ? 'If your preferred date or time is different than what is offered, then please contact us and we try to find the best solution for you.'
          : 'Kui meie poolt pakutud kuupäev või kellaaeg ei kattu sinu omaga, siis palun võta ühendust meiega ja leiame parima lahenduse.'
      }
    </small>
    <style jsx>
      {`
        .chosen {
          background: rgba(113, 90, 255, 1);
          color: white;
        }
      `}
    </style>
  </Fragment>
}
