import React, {Suspense} from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import Loading from './components/loading/loading'
import {
    isMobile
  } from "react-device-detect";

ReactDOM.render(<Suspense fallback={<Loading/>} >
    {isMobile ? <div>
        <h1>Sorry, I'm Building the Mobile Version</h1>
        <h2>Acess it from computer Browser</h2>
        <Loading/> 
    </div> :  <App />}
</Suspense>
, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
