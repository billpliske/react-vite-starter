import React from 'react';
import ReactDOM from 'react-dom';

import { GlobalStyle } from './DefaultStyles';
import App from './App';

ReactDOM.render(
    <>
        <GlobalStyle />
        <App />
    </>,
    document.getElementById('root')
);
