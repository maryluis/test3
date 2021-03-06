import styled, { keyframes } from 'styled-components';

const rotateAnima = keyframes`
0% {
    transform: rotateZ(0deg);
}
100% {
    transform: rotateZ(360deg);
}
`;

export const ButtonAnima = styled.button`
height: 70px;
width: 70px;
border-radius:50%;
background-color: ${props => props.color || props.theme.colors.primaryDark};
color: ${props => props.color || props.theme.colors.primaryLight};
position: absolute;
top: 300px;
right: 250px;
border: 3px solid ${props => props.color || props.theme.colors.primaryLight};
&:hover {
    animation: ${rotateAnima} 1s infinite linear;
}
@media (max-width: 1050px) {
    position: static;
    margin-top: 50px;
  }
  @media (max-width: 620px) {
    margin-top: 10px;
  }
`;

export const MainArticle = styled.div`
color: white;
padding: 0px 5px;
`;
export const StyledParagraph = styled.p`
width: 100%;
font-size: 20px;
margin: 0;
line-height: 30px;
box-sixing: border-box;
max-width: 700px;
`;

export const MainWrapper = styled.div`
position: relative;
display: flex;
justify-content: ${props => props.justify || 'space-around'}; ; 
flex-direction: ${props => props.direction || 'auto'}; 
align-items: ${props => props.align || 'space-sround'}; 
padding: 20px;
box-sizing: border-box;
min-height: 400px;
background-color: ${props => props.color || props.theme.colors.primaryDark};
width: 100%;
flex-wrap: wrap;
@media (max-width: 1100px) {

  }
  @media (max-width: 400px) {
    padding:0;
  }
`;
export const StyledMain = styled.main`
min-height: calc(100vh - 40px);
display: flex;
justify-content: center;
background-color: ${props => props.color || props.theme.colors.primaryDark};
`;

export const Iframe = styled.iframe`
padding: 0px 5px 0px 0px;
@media (max-width: 500px) {
    width: 90%;
    box-sizing: border-box;
  }
`;

export const CardDiv = styled.div`
display: flex;
flex-direction: column;
width: 400px;
max-height: 400px;
background-color: ${props => props.color || props.theme.colors.primaryLight};
color: ${props => props.color || props.theme.colors.primaryDark};
margin: 30px;
padding: 10px;
align-items: center;
justify-content: space-between;
border-radius: 8px;
&:hover {
    transform: scale(1.1); 
    transition: 0.3s;
}
@media (max-width: 500px) {
    max-height: 800px;
    width: 90%;
    box-sizing: border-box;
  }
`;

export const DarkTitle = styled.h3`
color: ${props => props.color || props.theme.colors.primaryDark};
text-align: center;
`;

export const DarkText = styled.p`
color: ${props => props.color || props.theme.colors.primaryDark};
text-align: justify;
padding: 5px;
`;

export const StyledInput = styled.input`
height: 30px;
width: 300px;
margin: 5px;
border-sizing: border-box;
color: ${props => props.color || props.theme.colors.primaryDark};
@media (max-width: 430px) {
    width: 100%;
  }
`;

export const StyledTextArea = styled.textarea`
height: 200px;
width: 300px;
margin: 5px;
border-sizing: border-box;
color: ${props => props.color || props.theme.colors.primaryDark};
@media (max-width: 430px) {
    width: 100%;
  }
`;

export const StyledLabel = styled.label`
color: ${props => props.color || props.theme.colors.primaryLight};
line-height: 2.2;
margin: 5px;
@media (max-width: 430px) {
    width: 100%;
  }
`;

export const FlexDiv = styled.div`
flex-direction: ${props => props.direction || 'auto'}; 
display: flex;
@media (max-width: 430px) {
    flex-wrap: wrap;
    justify-content: center;
  }
`;

export const ButtonForm = styled.button`
background-color: ${props => props.color || props.theme.colors.primaryDark};
color: ${props => props.color || props.theme.colors.primaryLight};
height: 30px;
border-radius: 8px;
max-width: 120px;
`;
export const LightTitle = styled.h3`
color: ${props => props.color || props.theme.colors.primaryLight};
position: relative;
@media (max-width: 430px) {
    width: 90%;
    text-align: center;
  }
`;

export const FormWrapper = styled.div`
width: 500px;
display: flex;
flex-direction: column;
align-items: center;
@media (max-width: 650px) {
    width: auto;
  }
`;
