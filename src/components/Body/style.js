import styled from 'styled-components';

export const Container=styled.div`
width: 100%;
display: flex;
justify-content: center;
align-items: center;
height: 65%;
border-bottom: 1px solid;
`;
export const Wrapper = styled.div`
width: 70%;
height: 80%;
display: grid;
grid-template-columns: auto auto;
justify-content: space-between;
align-content: space-between;
position: relative;
`;
export const Level=styled.h2`
position: absolute;
top: 40%;
left: 40%;
z-index: 0;
`;