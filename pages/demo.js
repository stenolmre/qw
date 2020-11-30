import React, { Fragment, useState, useEffect } from 'react'
import DatePicker from 'react-datepicker'
import "react-datepicker/dist/react-datepicker.css"
import Cookies from 'js-cookie'
import { useAdventureState, useAdventureDispatch } from './../context/adventure'
import { getAdventure } from './../actions/adventure'

export default function MyComponent() {
  const dispatchAdventure = useAdventureDispatch()
  const adventureState = useAdventureState()
  const { adventure } = adventureState
  const [data, setData] = useState({ date: null })

  function onSubmit() {
    Cookies.set('demo', data)
    location.reload()
  }

  const output = Cookies.get('demo') ? JSON.parse(Cookies.get('demo')) : 'undefined'
  console.log(output);

  const array = ['2020-12-29T00:00:00', '2020-12-27T00:00:00', '2020-12-25T00:00:00']

  useEffect(() => {
    getAdventure(dispatchAdventure, '5fc12fd284b90d619bed7f4e')
  }, [dispatchAdventure, '5fc12fd284b90d619bed7f4e'])

  const myDate = new Date('2020-12-31T00:00:00')
  const ii = new Date(output.date)

  console.log(ii);

  return <Fragment>
    {
      adventureState && adventure
        ? <Fragment>
            <DatePicker
              dateFormat="dd/MM/yyyy" selected={data.date}
              onChange={x => setData({ ...data, date: x })}
              includeDates={array.map(x => new Date(x))}
            />
            <button onClick={onSubmit}>Submit</button>
            <p style={{ color: 'black', fontSize: '.75rem' }}>Hello Fucker - {ii.toLocaleDateString()}</p>
        </Fragment>
        : null
    }
  </Fragment>
}

// includeDates={adventure.availability.days.map(date => new Date(date))}
