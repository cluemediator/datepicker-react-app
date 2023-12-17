import { useState } from 'react'
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';

function App() {
  const [selectedDate, setSelectedDate] = useState(null);

  return (
    <div>
      <h2>How to implement a date picker in React - <a href="https://www.cluemediator.com" target='_blank'>Clue Mediator</a></h2>
      <DatePicker
        selected={selectedDate}
        onChange={(date) => setSelectedDate(date)}
        placeholderText="Select a date"
        className='dp-style'
        dateFormat="MMMM d, yyyy"
      />
      <h4>Date: {selectedDate?.toLocaleDateString("en-US") || '-'}</h4>
    </div>
  )
}

export default App
