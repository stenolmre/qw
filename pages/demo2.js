import React, { useState } from 'react'
import 'react-modern-calendar-datepicker/lib/DatePicker.css';
import DatePicker from 'react-modern-calendar-datepicker';
import { utils } from "react-modern-calendar-datepicker";

export default function Demo2() {
  const defaultValue = {
    year: 2020,
    month: 12,
    day: 16,
  };

  const maximumDate = {
    year: 2021,
    month: 4,
    day: 30
  }

  const disabledDays = [
    {
      year: 2020,
      month: 12,
      day: 26,
    },
    {
      year: 2020,
      month: 12,
      day: 25,
    },
    {
      year: 2021,
      month: 1,
      day: 1
    }
  ];

  const [selectedDay, setSelectedDay] = useState(defaultValue);

  const handleDisabledSelect = disabledDay => {
    console.log('Tried selecting a disabled day', disabledDay);
  };

  return <DatePicker
    value={selectedDay}
      onChange={setSelectedDay}
      disabledDays={disabledDays}
      minimumDate={utils().getToday()}
      maximumDate={maximumDate}
      onDisabledDayError={handleDisabledSelect}
      shouldHighlightWeekends
  />
}
