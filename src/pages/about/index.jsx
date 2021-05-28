import React from 'react';
import styled from 'styled-components';
import Menu from '../../components/Menu.jsx';

export default function index() {
    return (
        <div>
            <h1>About page</h1>
            <Image src="images/billcartoon_400x400.jpg" alt="cartoon" />
            <Menu />
        </div>
    );
}

const Image = styled.img`
    width: 250px;
`;
