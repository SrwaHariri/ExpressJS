// src/Button.js
import styled from 'styled-components';

const Button = styled.button`
  background-color: #4CAF50; /* Green */
  border: none;
  color: white;
  padding: 15px 32px;
  text-align: center;
  text-decoration: none;
  display: inline-block;
  font-size: 16px;
  margin: 4px 2px;
  cursor: pointer;
  border-radius: 4px;

  /* Add a hover effect */
  &:hover {
    background-color: #45a049;
  }
`;

export default Button;