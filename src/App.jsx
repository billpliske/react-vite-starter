import React from 'react';
import styled from 'styled-components';
import { BrowserRouter as Router } from 'react-router-dom';
import { renderRoutes } from 'react-router-config';
import routes from 'virtual:generated-pages';

export default function App() {
    return (
        <Wrapper>
            <Router>
                {/* kick it all off with the root route */}
                {renderRoutes(routes)}
            </Router>
        </Wrapper>
    );
}

export { routes };

const Wrapper = styled.div`
    max-width: 800px;
    margin: 0 auto;
    position: relative;
`;
