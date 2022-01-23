import React from 'react';
import { Provider } from "react-redux"
import ReactDOM from 'react-dom';
import { PersistGate } from 'redux-persist/integration/react'

import App from './App';
import { store, persistor } from "./redux/store"

ReactDOM.render(
  <Provider store={store}>
    <PersistGate loading={null} persistor={persistor}>
      <App />
    </PersistGate>
  </Provider>,
  document.getElementById('root')
);


