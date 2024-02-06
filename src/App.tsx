/* eslint-disable max-len */
/* eslint-disable jsx-a11y/control-has-associated-label */
import React, { useContext, useState } from 'react';
import { TodoApp } from './components/TodoApp';
import { ContextProvider, TodosContext } from './TodosContext';
// import { UserWarning } from './UserWarning';

export const App: React.FC = () => {
  const { userId, setUserId } = useContext(TodosContext);
  const [inputValue, setInputValue] = useState('');

  const handleSubmit = () => {
    const idNumber = +inputValue;

    setUserId(idNumber);
  };

  if (!userId) {
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
        <button type="submit" onClick={handleSubmit}>Submit</button>
      </section>
    );
  }

  return (
    <ContextProvider>
      <TodoApp userID={userId} />
    </ContextProvider>
  );
};
