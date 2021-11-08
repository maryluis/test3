import { Link } from 'react-router-dom';

const { default: styled } = require('styled-components');

export const HeaderWrapper = styled.header`
display: flex;
justify-content: space-between;
align-item: center;
background-color: ${props => props.color || props.theme.colors.primaryLight};
padding: 0px 15px;
height: 40px;
margin: 0;
`;
export const HeaderSpan = styled.span`
display: flex;
justify-content: center;
line-height: 35px;
align-item: center;
`;

export const HeaderLink = styled(Link)`
text-decoration: none;
color: ${props => props.color || props.theme.colors.primaryDark};
display: flex;
justify-content: center;
line-height: 35px;
align-item: center;
margin: 0px 15px;
`;

export const ButtonStyledHeader = styled.button`
position: absolute;
right: 10px;
top: 5px;
background-color: ${props => props.color || props.theme.colors.primaryDark};
color: ${props => props.color || props.theme.colors.primaryLight};
height: 30px;
border-radius: 8px;
`;
