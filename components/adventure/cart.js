import React, { Fragment, useState, useEffect } from 'react'
import Cookies from 'js-cookie'
import { useRouter } from 'next/router'
import Calendar from './calendar'
import { useAdventureDispatch, useAdventureState } from './../../context/adventure'
import { getAdventure } from './../../actions/adventure'

export default function Cart() {
  const user_lang = Cookies.get('lan') === 'eng' ? true : false
  const { query } = useRouter()

  const dispatchAdventure = useAdventureDispatch()
  const { adventure } = useAdventureState()

  useEffect(() => { getAdventure(dispatchAdventure, query.id) }, [dispatchAdventure, query])

  const [people, setPeople] = useState({ adult: 1, youth: 0, child: 0 })
  const [selectedDay, setSelectedDay] = useState(null)
  const [chosenTime, setChosenTime] = useState('')
  const [error, setError] = useState({ date: '', time: '' })

  const onChange = e => setPeople({ ...people, [e.target.name]: e.target.value })

  const placeOrder = e => {
    e.preventDefault()

    if (people.adult < 1 && people.youth < 1 && people.child < 1) return console.log('How many?')
    if (selectedDay === null || chosenTime === '') return console.log('When?')

    console.log({
      id: query.id,
      adult: people.adult,
      youth: people.youth,
      child: people.child,
      date: selectedDay,
      time: chosenTime
    });
  }

  const calculatePrice = (value, person) => adventure && (adventure.prices[value].price * person / 100)

  return <Fragment>
    {
      adventure && <form className="adventure-cart-form" onSubmit={placeOrder}>
        <label>{user_lang ? 'Adult' : 'Täiskasvanu'}</label><br/>
        <div style={{ display: 'flex' }}>
          <div className="adventure-form-people-button" onClick={() => people.adult < 1 ? setPeople({ ...people, adult: 0 }) : setPeople({ ...people, adult: people.adult - 1 })}>-</div>
          <input type="number" name="adult" value={people.adult} onChange={onChange}/>
          <div className="adventure-form-people-button" onClick={() => setPeople({ ...people, adult: Number(people.adult) + 1 })}>+</div>
        </div>

        <label>{user_lang ? 'Youth' : 'Nooruk'}</label><br/>
        <div style={{ display: 'flex' }}>
          <div className="adventure-form-people-button" onClick={() => people.youth < 1 ? setPeople({ ...people, youth: 0 }) : setPeople({ ...people, youth: people.youth - 1 })}>-</div>
          <input type="number" name="youth" value={people.youth} onChange={onChange}/>
          <div className="adventure-form-people-button" onClick={() => setPeople({ ...people, youth: Number(people.youth) + 1 })}>+</div>
        </div>

        <label>{user_lang ? 'Child' : 'Laps'}</label><br/>
        <div style={{ display: 'flex' }}>
          <div className="adventure-form-people-button" onClick={() => people.child < 1 ? setPeople({ ...people, child: 0 }) : setPeople({ ...people, child: people.child - 1 })}>-</div>
          <input type="number" name="child" value={people.child} onChange={onChange}/>
          <div className="adventure-form-people-button" onClick={() => setPeople({ ...people, child: Number(people.child) + 1 })}>+</div>
        </div>

        <label>{user_lang ? 'Choose Date' : 'Vali Kuupäev'}</label><br/>
        <Calendar adventure={adventure} selectedDay={selectedDay} setSelectedDay={setSelectedDay}/><br/>
        <label>{user_lang ? 'Choose Time' : 'Vali Kellaaeg'}</label><br/>
        <div className="adventure-cart-form-times">
          {
            adventure.availability.time.map(e => <div onClick={() => setChosenTime(e)} key={e} className={chosenTime === e ? 'chosenTime' : 'adventure-cart-form-time'}>
              {e}
            </div>)
          }
        </div>
        <h5>{user_lang ? 'Total' : 'Kokku'}: {(calculatePrice(0, people.adult) + calculatePrice(1, people.youth) + calculatePrice(2, people.child)).toFixed(2)}€</h5>
        <button>{user_lang ? 'Checkout' : 'Kassa'}</button>
      </form>
    }
  </Fragment>
}
