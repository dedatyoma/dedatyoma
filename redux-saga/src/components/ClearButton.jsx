import React from 'react';
import { useDispatch } from 'react-redux';
import { clearTodos } from '../redux/actions/todoActions';

const ClearButton = () => {
  const dispatch = useDispatch();

  return (
    <button onClick={() => dispatch(clearTodos())}>Clear All</button>
  );
};

export default ClearButton;