import React, { useContext, useState } from 'react';
import { TodosContext } from './TodosContext';

export const UserWarning: React.FC = () => {
  const {setUserId} = useContext(TodosContext)
  const [inputValue, setInputValue] = useState('')

  const handleSubmit = () => {
    const idNumber = +inputValue;
    setUserId(idNumber)
  }
  return (
    <section className="section">
      <p className="box is-size-3">
        Please get your
        {' '}
        <b> userId </b>
        {' '}
        <a href="https://mate-academy.github.io/react_student-registration">
          here
        </a>
        <b> userId.</b>
      </p>
        <input
          type="text"
          placeholder="Enter your userId"
          onChange={(e) => setInputValue(e.target.value)}
        />
        <button type='submit' onClick={handleSubmit}>Submit</button>
    </section>
  );
}
