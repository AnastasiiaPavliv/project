import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import {App} from './App';
import {setupStore} from "./redux";
import {Provider} from "react-redux";
import {BrowserRouter} from "react-router-dom";


const root = ReactDOM.createRoot(document.getElementById('root'));

const store=setupStore();

root.render(
  <Provider store={store}>
      {/*<QueryClientProvider client={queryClient}>*/}
      <BrowserRouter>
          <App />
      </BrowserRouter>
      {/*</QueryClientProvider>*/}
  </Provider>
);

