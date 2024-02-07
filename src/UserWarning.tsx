import React, { useContext, useState } from 'react';
import { TodosContext } from './TodosContext';

export const UserWarning: React.FC = () => {
  const { setUserId } = useContext(TodosContext);
  const [inputValue, setInputValue] = useState('');

  const onSubmitHandler = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setUserId(+inputValue);
  };

  return (
    <section className="section">
      <p className="box is-size-3">
        Please get your
        {' '}
        <b> userID </b>
        {' '}
        <a href="https://mate-academy.github.io/react_student-registration">
          here
        </a>
      </p>

      <form
        method="get"
        onSubmit={onSubmitHandler}
      >
        <div className="field is-grouped">
          <p className="control is-expanded">
            <input
              type="text"
              className="input"
              placeholder="Enter your userID here"
              onChange={(e) => setInputValue(e.target.value)}
            />
          </p>
          <p className="control">
            <button type="submit" className="button is-info">
              Submit
            </button>
          </p>
        </div>
      </form>
    </section>
  );
};
