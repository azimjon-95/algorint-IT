import React, { Suspense } from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import { BrowserRouter } from 'react-router-dom';

import { StateProvider } from "./Context";
import reducer, { initialState } from './Context/reducer'

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(

  <React.StrictMode>
    <StateProvider initialState={initialState} reducer={reducer}>
      <Suspense fallback={<h3>Loading...</h3>}>
        <BrowserRouter>
          <App />
        </BrowserRouter>
      </Suspense>
    </StateProvider>

  </React.StrictMode>


);

