import styled, { keyframes } from "styled-components";


const clockwise = keyframes `

    0% { top: -5px; left: 0; }
    12% { top: -2px; left: 2px; }
    25% { top: 0; left: 5px; }
    37% { top: 2px; left: 2px; }
    50% { top: 5px; left: 0; }
    62% { top: 2px; left: -2px; }
    75% { top: 0; left: -5px; }
    87% { top: -2px; left: -2px; }
    100% { top: -5px; left: 0; }
    `;

    const counterclockwise = keyframes`
    0% { top: -5px; right: 0; }
    12% { top: -2px; right: 2px; }
    25% { top: 0; right: 5px; }
    37% { top: 2px; right: 2px; }
    50% { top: 5px; right: 0; }
    62% { top: 2px; right: -2px; }
    75% { top: 0; right: -5px; }
    87% { top: -2px; right: -2px; }
    100% { top: -5px; right: 0; }
    `;

const AnimatedDiv = styled.div`

    display: flex;
    align-items: center;
    justify-content: center;
    position: relative;
    margin: 20px auto;
    width: 250px;
    height: 250px;
    background: white;
    border-radius: 55px;
    font-family: 'Montserrat', sans-serif;
    font-size: 20px;
    font-weight: lighter;
    letter-spacing: 2px;
    transition: 1s box-shadow;

    
  
  &:hover {
    box-shadow: 0 5px 35px 0px rgba(0,0,0,.1);
  }
  
  &::before,
  &::after {
    display: block;
    content: '';
    position: absolute;
    width: 250px;
    height: 250px;
    background: #FDA8CF;
    border-radius: 75px;
    z-index: -1;
  }
  &::before {
    background: #FDA8CF;
    animation: ${clockwise} 1s infinite;
  }
  &::after {
    background: #F3CE5E;
    animation: ${counterclockwise} 2s infinite;
  }
  `;

    export default AnimatedDiv;
