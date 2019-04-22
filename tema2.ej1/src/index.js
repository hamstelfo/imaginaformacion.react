import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';

import FechaHora from './FechaHora';

ReactDOM.render(<div>
    <FechaHora interval="5000" message="mensaje uno" showMessage="true" />
    <FechaHora interval="10000" message="mensaje dos" showMessage="false" />
    <FechaHora interval="1000" message="mensaje tres" showMessage="true" />
    </div>, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
