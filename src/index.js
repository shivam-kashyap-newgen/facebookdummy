import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Apps from './App';
import registerServiceWorker from './registerServiceWorker';

ReactDOM.render( < Apps / > , document.getElementById('root'));
registerServiceWorker();