import React, { useState, useEffect } from 'react'
import DatePicker from 'react-datepicker'
import "react-datepicker/dist/react-datepicker.css"

export default function MyComponent() {
  const [startDate, setStartDate] = useState(null)

  const array = [
    '2020-12-2', '2020-12-4', '2020-12-6'
  ]

  useEffect(() => {
    setStartDate(new Date(array[0]))
  }, [])

  const days = () => array.map(date => new Date(date))

  return <div>
    <DatePicker
      dateFormat="dd/MM/yyyy"
      selected={startDate}
      onChange={date => setStartDate(date)}
      includeDates={days()}
    />

  <style jsx>{`
      div {
        width: 100%;
        height: 100vh;
        display: flex;
        align-items: center;
        justify-content: center;
        color: black;
      }
  `}</style>
  </div>
}
