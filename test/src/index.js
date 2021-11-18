import React from 'react';
import ReactDOM from 'react-dom';
import App from './componentes/App';
import "bootstrap/dist/css/bootstrap.min.css"
import './firebase'

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);

