// src/Button.js
import styled from 'styled-components';

const TextArea = styled.textarea`
  
  border: none;
  padding: 15px 32px;
  text-align: center;
  text-decoration: none;
  display: inline-block;
  font-size: 16px;
  margin: 4px 2px;
  cursor: pointer;
  border-radius: 4px;

  &:focus { 
    border: none !important;
    outline : none ;
  }
`;

export default TextArea;