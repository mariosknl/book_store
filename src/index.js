import React from 'react';
import ReactDOM from 'react-dom';
import thunk from 'redux-thunk';
import { createStore, applyMiddleware, compose } from 'redux';
import { v4 as uuidv4 } from 'uuid';
import { Provider } from 'react-redux';
import App from './components/App';
import rootReducer from './reducers/index';
import Navbar from './components/Navbar';

const initialState = {
  books: [
    {
      id: uuidv4(),
      title: 'Lords of the Rings',
      category: 'Sci-Fi',
    },
    {
      id: uuidv4(),
      title: 'Harry Poter',
      category: 'Sci-Fi',
    },
    {
      id: uuidv4(),
      title: 'Unfuck Yourself',
      category: 'Learning',
    },
  ],
  filter: { current: 'All', categories: ['Action', 'Biography', 'History', 'Horror', 'Kids', 'Learning', 'Sci-Fi'] },
};

const composeEnhancers = typeof window === 'object' && window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ ? window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__({ }) : compose;
const middleware = [thunk];
const enhancer = composeEnhancers(
  applyMiddleware(...middleware),
);

const store = createStore(rootReducer, initialState, enhancer);

ReactDOM.render(
  <Provider store={store}>
    <Navbar />
    <App />
  </Provider>,
  document.getElementById('root'),
);
