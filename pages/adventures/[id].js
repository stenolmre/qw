import { Fragment, useEffect, useState } from 'react'
import Cookies from 'js-cookie'
import Head from 'next/head'
import { useRouter } from 'next/router'
import Container from './../../components/container'
import Spinner from './../../components/utils/spinner'
import Images from './../../components/adventure/images'
import Info from './../../components/adventure/info'

import { useAdventureState, useAdventureDispatch } from './../../context/adventure'
import { getAdventure } from './../../actions/adventure'

export default function Adventure() {
  const dispatchAdventure = useAdventureDispatch()
  const adventureState = useAdventureState()
  const { adventure } = adventureState
  const router = useRouter()
  const { id } = router.query
  const [radio, setRadio] = useState(false)
  const [orderData, setOrderData] = useState({ title: '', adults: 1, children: 0, date: '', time: null })
  const { adults, children, date, time, price } = orderData
  const [error, setError] = useState('')

  const totalPrice = adventureState && adventure && (((adventure.price / 100) * adults) + Math.ceil((((adventure.price * 0.7) / 100) * children))).toFixed(2)
  const childFee = adventureState && adventure && Math.ceil(adventure.price * 0.7)

  useEffect(() => {
    getAdventure(dispatchAdventure, id)
    setOrderData({ ...orderData, price: totalPrice, title: adventure && adventure.name, adultFee: adventure && adventure.price, childFee: childFee, start: adventure && adventure.location.start })
  }, [dispatchAdventure, id, totalPrice, adventure, childFee])

  function onChange(e) {
    setOrderData({ ...orderData, [e.target.name]: e.target.value })
  }

  function onClick() {
    const day = new Date(date).getUTCDay()

    if (time === null) {
      setError('Please choose the preferred time of the event.')

      setTimeout(() => {
        setError('')
      }, 5000)

      return
    }

    if (date === '') {
      setError('Please choose the preferred date of the event.')

      setTimeout(() => {
        setError('')
      }, 5000)

      return
    }

    Cookies.set('order', orderData)

    router.push('/checkout')
  }

  return <Fragment>
    <Head>
      <title>qw - adventure</title>
    </Head>
    <Container>
      <div className="adventure">
        {
          adventureState && adventure
            ? <Fragment>
                <Images adventure={adventure}/>
                <Info adventure={adventure} id={adventure._id}/>
                <div className="adventure-cart-container" id="cart">
                  <div className="adventure-cart">
                    <h3>Prices:</h3>
                    <table>
                      <tbody>
                        <tr>
                          <td>Adult:</td>
                          <td><strong>{(adventure.price / 100).toFixed(2)}</strong> €</td>
                        </tr>
                        <tr>
                          <td>Child under age of 16:</td>
                          <td><strong>{Math.ceil(((adventure.price * 0.7) / 100)).toFixed(2)}</strong> €</td>
                        </tr>
                      </tbody>
                    </table>
                    <hr/>
                    <h3>Availability:</h3>
                    <p>Every <strong style={{ textTransform: 'capitalize' }}>{adventure.availability.days.join(', ')}</strong>.</p>
                    <p>{adventure.availability.time.join(' | ')}</p>
                    <hr/>
                    <h3>Book an adventure:</h3>

                    <label>Adults:</label>{' '}

                    <span
                      onClick={() => {
                        if (adults === 0 || adults < 0) {
                          setOrderData({ ...orderData, adults: 0 })
                        } else {
                          setOrderData({ ...orderData, adults: adults - 1 })
                        }
                      }}>-</span>
                    <input
                      type="number"
                      min="0"
                      value={adults}
                      name="adults"
                      onChange={onChange}/>
                    <span
                      onClick={() => {
                        setOrderData({ ...orderData, adults: adults + 1 })
                      }}>+</span>
                    <br/>

                    <label>Children:</label>{' '}
                    <span
                      onClick={() => {
                        if (children === 0 || children < 0) {
                          setOrderData({ ...orderData, children: 0 })
                        } else {
                          setOrderData({ ...orderData, children: children - 1 })
                        }
                      }}>-</span>
                    <input
                      type="number"
                      min="0"
                      value={children}
                      name="children"
                      onChange={onChange}/>
                    <span
                      onClick={() => {
                        setOrderData({ ...orderData, children: children + 1 })
                      }}>+</span>
                    <br/>

                    <input
                      type="date"
                      name="date"
                      value={date}
                      min={new Date().toISOString().split("T")[0]}
                      onChange={onChange}/>

                    <div className="booking-times">
                      {
                        adventure.availability.time.map(clock => {
                          return <Fragment key={clock}>
                            <input
                              type="radio"
                              id={clock}
                              name="time"
                              value={clock}
                              onClick={() => setOrderData({ ...orderData, time: clock })}
                              required/>
                            <label
                              style={ time === clock ? { background: 'rgba(33, 33, 33)', color: 'white' } : null }
                              className="booking-time"
                              htmlFor={clock}>{clock}</label>
                          </Fragment>
                        })
                      }
                    </div>

                    <h4>Price: { totalPrice } €</h4>

                    <button disabled={price < 1} onClick={onClick}>Buy Now</button>
                    <br/>
                    <p style={{ color: 'red', fontWeight: '600', marginTop: '30px' }}>{ error }</p>
                  </div>
                </div>
              </Fragment>
            : <Spinner/>
        }
      </div>
    </Container>
  </Fragment>
}
