import React, { Suspense } from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
// import { BrowserRouter } from "react-router-dom";

// redux
import rootReducer from './context/index';
import { legacy_createStore as createStore } from "redux"
import { Provider } from "react-redux"

// redux-persist - localStorage bn iwlaw
import { persistStore, persistReducer } from 'redux-persist'
import storage from 'redux-persist/lib/storage'
import { PersistGate } from 'redux-persist/integration/react'

const persistConfig = {
  key: 'root',
  storage,
  whitelist: [''],
  blacklist: ['']
}

const persistedReducer = persistReducer(persistConfig, rootReducer)
let store = createStore(persistedReducer)
let persistor = persistStore(store)

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(

  <React.StrictMode>
    {/* <BrowserRouter> */}
    <Suspense fallback={<h3>Loading...</h3>}>
      <Provider store={store}>
        <PersistGate persistor={persistor}>
          <App />
        </PersistGate>
      </Provider>
    </Suspense>
    {/* </BrowserRouter> */}
  </React.StrictMode>


);

