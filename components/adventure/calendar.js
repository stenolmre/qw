import React, { Fragment, useState, useEffect } from 'react'
import "react-modern-calendar-datepicker/lib/DatePicker.css"
import DatePicker, { utils } from "react-modern-calendar-datepicker"
import { etLocale, enLocale } from './locale'

export default function eCalendar({ adventure, selectedDay, setSelectedDay, userLanguage }) {
  const maximumDate = adventure && adventure.availability.days[adventure.availability.days.length - 1]

  const formatInputValue = () => {
    if (!selectedDay) return '';
    return `${selectedDay.day}/${selectedDay.month}/${selectedDay.year}`;
  };

  return <Fragment>
    {
      adventure && <DatePicker
        minimumDate={adventure.availability.days[0]}
        maximumDate={maximumDate}
        disabledDays={adventure.availability.days}
        value={selectedDay}
        onChange={setSelectedDay}
        formatInputText={formatInputValue}
        colorPrimary="rgba(113, 90, 255, 1)"
        calendarClassName="responsive-calendar"
        locale={userLanguage ? enLocale : etLocale}
      />
    }
  </Fragment>
}
