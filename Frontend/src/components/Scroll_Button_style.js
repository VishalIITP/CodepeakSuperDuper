import styled from 'styled-components';

export const Heading = styled.h1`
text-align: center;
color: green;
`;

export const Content = styled.div`
overflowY: scroll;
height: 2500px;
`;

export const Button = styled.div`
position: fixed;
width: 100%;
bottom: 50px;
height: 20px;
font-size: 3rem;
z-index: 4;   //to be visible in signup page as it contains items upto z index 3
cursor: pointer;
color: white;
`;
