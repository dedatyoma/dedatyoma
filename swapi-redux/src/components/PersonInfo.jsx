import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchPerson } from '../store/actions';

const PersonInfo = () => {
  const dispatch = useDispatch();
  const person = useSelector(state => state.person);
  const loading = useSelector(state => state.loading);
  const error = useSelector(state => state.error);

  useEffect(() => {
    dispatch(fetchPerson(1));
  }, [dispatch]);

  if (loading) return <div>Loading...</div>;
  if (error) return <div>Error: {error}</div>;
  if (!person) return <div>No data available</div>;

  return (
    <div>
      <h2>{person.name}</h2>
      <p>Height: {person.height}</p>
      <p>Mass: {person.mass}</p>
      <p>Hair Color: {person.hair_color}</p>
      <p>Eye Color: {person.eye_color}</p>
    </div>
  );
};

export default PersonInfo;