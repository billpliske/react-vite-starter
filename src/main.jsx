import React from 'react';
import { hydrate, render } from 'react-dom';
import { GlobalStyle } from './DefaultStyles';
import App from './App';

const rootElement = document.getElementById('root');

if (rootElement.hasChildNodes()) {
    hydrate(
        <>
            <GlobalStyle />
            <App />
        </>,
        rootElement
    );
} else {
    render(
        <>
            <GlobalStyle />
            <App />
        </>,
        rootElement
    );
}
