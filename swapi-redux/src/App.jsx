import React from 'react';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import { thunk } from 'redux-thunk';
import { personReducer } from './store/reducer';
import PersonInfo from './components/PersonInfo';
import Footer from './components/footer';

const store = createStore(
  personReducer, applyMiddleware(thunk)
);
const App = () => {
  return(
    <Provider store={store}>
      <div className='app'>
        <PersonInfo/>
        <Footer/>
      </div>
    </Provider>
  );
};

export default App;