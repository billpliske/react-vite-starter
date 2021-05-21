import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

export default function Menu() {
    return (
        <div>
            <Title>Menu</Title>
            <ul>
                <li>
                    <Link to="/">Home</Link>
                </li>
                <li>
                    <Link to="/about">About</Link>
                </li>
                <li>
                    <Link to="/blog">Blog</Link>
                </li>
            </ul>
        </div>
    );
}

const Title = styled.h1`
    color: var(--gold);
`;
