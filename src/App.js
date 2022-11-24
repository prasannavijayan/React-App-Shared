import React, { useState } from "react";
import Calendar from "react-calendar";
import Moment from 'react-moment';
import './App.scss';
import 'react-calendar/dist/Calendar.css';

const App = () => {

  const [value, onChange] = useState(new Date());

  const onDateChange = (val) => {
    onChange(val);
  }
  
  return (
    <>
      <Calendar onChange={onDateChange} value={value} />
      <div className="datetime">
        <Moment format="D MMM YYYY" date={value.valueOf()} withTitle />
      </div>
    </>
  )
};

export default App;