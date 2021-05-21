import { createGlobalStyle } from 'styled-components';
import styled from 'styled-components';
import '@fontsource/poppins/200.css';
import '@fontsource/poppins/200-italic.css';
import '@fontsource/poppins/400.css';
import '@fontsource/poppins/400-italic.css';
import '@fontsource/poppins/600.css';
import '@fontsource/poppins/600-italic.css';
import '@fontsource/poppins/800.css';
import '@fontsource/poppins/800-italic.css';

document.documentElement.style.setProperty('--vh', `${window.innerHeight / 100}px`);
function setDocHeight() {
    document.documentElement.style.setProperty('--vh', `${window.innerHeight / 100}px`);
}

window.addEventListener('resize', function () {
    setDocHeight();
});
window.addEventListener('orientationchange', function () {
    setDocHeight();
});

setDocHeight();

export const GlobalStyle = createGlobalStyle`

body {
  margin: 0;
  font-family: "Poppins", Arial, Helvetica, sans-serif;
}

:root {
    --light-purple: gold;
}
`;

export const ExampleStyle = styled.div`
    bottom: -35px;
    left: 0;
    position: absolute;
    right: 0;
    z-index: 3;
`;
