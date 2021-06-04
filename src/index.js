import React from 'react';
import ReactDOM from 'react-dom';

import { addCounter, store$ } from './store/store';
import App from './App';

let render = state => {
    ReactDOM.render(
        <App state={state} addCounter={addCounter}/>,
        document.getElementById('root')
    );
};

render();

store$.subscribe(state => {
        render(state)
    }
);

