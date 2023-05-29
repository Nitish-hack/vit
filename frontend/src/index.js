import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App'
import {AppProvider} from "./context/eventcontext.jsx"
import {FilterContextProvider} from "./context/filter_context.jsx"

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <AppProvider>
  <FilterContextProvider>
    <App />
      </FilterContextProvider>
    </AppProvider>
 
);

