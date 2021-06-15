import React from 'react';
import ReactDOM from 'react-dom';

import {getUsers, store$} from './store/store';
import App from './App';

let render = state => {
    ReactDOM.render(
        <App state={state} getUsers={getUsers} />,
        document.getElementById('root')
    );
};

render();

store$.subscribe(state =>
{
    render(state)
});
