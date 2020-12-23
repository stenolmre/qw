import { Fragment } from 'react'
import Cookies from 'js-cookie'
import Head from 'next/head'

export default function PaymentAccepted() {
  const order = Cookies.get('order')
    ? JSON.parse(Cookies.get('order'))
    : null
  const eventDate = order && `${order.date.slice(8, 10)}.${order.date.slice(5, 7)}.${order.date.slice(0, 4)}`

  return <Fragment>
    <Head>
      <title>qw - order</title>
    </Head>
      <div className="order-container">
        <div className="order">
          <div className="order-header">
            <h2>INVOICE - PAYMENT ACCEPTED</h2>
            <img src="northseason.png" alt="northseason"/>
          </div>
          <div className="space"/>
          <h3>{order && order.title}</h3>
          <table>
            {
              order && <tbody>
                  <tr>
                    <td>Adults:
                    </td>
                    <td>{order.adults} x {(order.adultFee / 100).toFixed(2)}€</td>
                  </tr>
                  <tr>
                    <td>Children:
                    </td>
                    <td>{order.children} x {Math.ceil((order.childFee / 100)).toFixed(2)}€</td>
                  </tr>
                  <tr>
                    <td></td>
                    <td></td>
                  </tr>
                  <tr>
                    <td>Date:
                    </td>
                    <td>{eventDate}</td>
                  </tr>
                  <tr>
                    <td>Time:
                    </td>
                    <td>{order.time}</td>
                  </tr>
                  <tr>
                    <td>Start:</td>
                    <td>{order.start}</td>
                  </tr>
                  <tr>
                    <td></td>
                    <td></td>
                  </tr>
                  <tr>
                    <td>Tax:</td>
                    <td>No additional Tax</td>
                  </tr>
                  <tr>
                    <td>Total Price:
                    </td>
                    <td><strong>{order.price}€</strong></td>
                  </tr>
                </tbody>
            }
          </table>
          <p className="payment-accepted-info">NB! If you have any questions or complications regarding your order, payment, or the event you have purchased then please contact us via email. Furthermore, we will send a proper invoice in the email provided for us. Thank you for your order!</p>
        </div>
      </div>
  </Fragment>
}
