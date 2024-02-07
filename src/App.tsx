/* eslint-disable max-len */
/* eslint-disable jsx-a11y/control-has-associated-label */
import React, { useContext } from 'react';
import { TodoApp } from './components/TodoApp';
import { TodosContext } from './TodosContext';
import { UserWarning } from './UserWarning';

export const App: React.FC = () => {
  const { userId } = useContext(TodosContext);

  return (
    <>
      {!userId
        ? <UserWarning />
        : <TodoApp userID={userId} />}
    </>
  );
};
