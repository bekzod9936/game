import styled from 'styled-components';
export const Container=styled.div`
width: 100%;
height: 100%;
display: flex;
justify-content: center;
`;


export const Start=styled.div`
  position: absolute;
  width: 100%;
  height: 100%;
  top: 0;
  left: 0;
  background-color: white;
  display: ${props => props.dis===true ? 'flex' : 'none'};
  justify-content: center;
  align-items: center;
`;

