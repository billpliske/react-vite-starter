import React from 'react';
import Menu from '../components/Menu';
import styled from 'styled-components';

export default function index() {
    return (
        <Wrapper>
            <header className="App-header">
                <h1>Hello Vite + React!!</h1>
            </header>
            <Menu />
        </Wrapper>
    );
}

const Wrapper = styled.div`
    max-width: 800px;
    margin: 0 auto;
    position: relative;
`;
