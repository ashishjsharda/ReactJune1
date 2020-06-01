import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/App';

ReactDOM.render(
  <React.StrictMode>
    <App headerProp="This is coming from Header ...." content= "This is coming from Content ....." />
  </React.StrictMode>,
  document.getElementById('root')
);

