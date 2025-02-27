import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { clearPersonData } from '../store/actions';

const Footer = () => {
  const dispatch = useDispatch();


  return (
    <footer>
      <button onClick={() => dispatch(clearPersonData())}>
        Clear Data
      </button>
    </footer>
  );
};

export default Footer;
