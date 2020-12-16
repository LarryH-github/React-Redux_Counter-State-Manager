import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { createStore } from 'redux';
import allReducers from './reducers'; //No need to include 'index.js in path (as in './reducers/index.js'),
                                      //because webpack automatically looks at 'index.js' in the folder 
import { Provider } from 'react-redux'; //Provider takes one argument, which is a store, and passes it down to all children

//Store -> Globalised State

const store = createStore(allReducers);

ReactDOM.render(
    <React.StrictMode>
        <Provider store={store}>
                <App />
        </Provider>
    </React.StrictMode>,
    document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
