import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import {SnackbarProvider} from "notistack";
import {BrowserRouter} from "react-router-dom";
import store from "./redux/app/store";
import {Provider} from "react-redux";
import 'react-vertical-timeline-component/style.min.css';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
      <Provider store={store}>
          <BrowserRouter>
              <SnackbarProvider
                  autoHideDuration={2000}
                  anchorOrigin={{vertical: 'top', horizontal: 'left'}}
                  maxSnack={5}>
                  <App/>
              </SnackbarProvider>
          </BrowserRouter>
      </Provider>
  </React.StrictMode>
);

reportWebVitals();
