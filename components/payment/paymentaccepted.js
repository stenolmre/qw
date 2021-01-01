import React, { Fragment } from 'react'
import Cookies from 'js-cookie'
import OrderDetails from './orderdetails'

export default function PaymentAccepted({ adventure, loading }) {
  const user_lang = Cookies.get('lan') === 'eng' ? true : false
  const order = Cookies.get('cus_order') ? JSON.parse(Cookies.get('cus_order')) : null

  return <Fragment>
    <h1 className="desktop-page-heading">{user_lang ? 'Payment Accepted' : 'Makse Õnnestus'}</h1>
    <h4>{user_lang ? 'Order Details' : 'Tellimuse Info'}</h4>
    <OrderDetails accepted userLanguage={user_lang} adventure={adventure} loading={loading} order={order}/>
    <h4>{user_lang ? 'Payment Details' : 'Makse Info'}</h4>
    <div className="desktop-order-details-table">
      <div>
        <p>{user_lang ? 'Customer' : 'Ostja Nimi'}</p>
        <p></p>
        <p>{order.order_date.slice(8, 10)}/{order.order_date.slice(5, 7)}/{order.order_date.slice(0, 4)}</p>
      </div>
      <div style={{ margin: '0 0 25px 0' }}>
        <p>{user_lang ? 'Customer\'s Email' : 'Ostja Email'}</p>
        <p></p>
        <p>{order.order_date.slice(8, 10)}/{order.order_date.slice(5, 7)}/{order.order_date.slice(0, 4)}</p>
      </div>
      <div>
        <p>{user_lang ? 'Date of Payment' : 'Maksmise Kuupäev'}</p>
        <p></p>
        <p>{order.order_date.slice(8, 10)}/{order.order_date.slice(5, 7)}/{order.order_date.slice(0, 4)}</p>
      </div>
      <div>
        <p>{user_lang ? 'Paid With' : 'Makseviis'}</p>
        <p></p>
        <p>{order.order_date.slice(8, 10)}/{order.order_date.slice(5, 7)}/{order.order_date.slice(0, 4)}</p>
      </div>
      <div>
        <p>{user_lang ? 'Currency' : 'Valuuta'}</p>
        <p></p>
        <p>{order.order_date.slice(8, 10)}/{order.order_date.slice(5, 7)}/{order.order_date.slice(0, 4)}</p>
      </div>
      <div>
        <p>{user_lang ? 'Amount' : 'Summa'}</p>
        <p></p>
        <p>{order.order_date.slice(8, 10)}/{order.order_date.slice(5, 7)}/{order.order_date.slice(0, 4)}</p>
      </div>
    </div>
    <p className="payment-accepted-info">NB! If you have any questions or complications regarding your order, payment, or the event you have purchased then please contact us via email. Furthermore, we will send a proper invoice in the email provided for us. Thank you for your order!</p>
  </Fragment>
}
