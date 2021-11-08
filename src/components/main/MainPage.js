import React from 'react';
import { ButtonAnima, MainArticle, StyledParagraph, MainWrapper, Iframe } from '.';

class MainPage extends React.Component {
  render() {
    return (
      <MainWrapper>
        <MainArticle>
          <StyledParagraph> It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using Content here, content here, making it look like readable English. Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for lorem ipsum will uncover many web sites still in their infancy. Various versions have evolved over the years, sometimes by accident, sometimes on purpose (injected humour and the like).
          </StyledParagraph>
        </MainArticle>
        <Iframe width="300" muted="muted" height="250" src="https://www.youtube.com/embed/setIp4w0jAs" title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen />
        <ButtonAnima onClick={() => this.props.history.push('/form')}> Go </ButtonAnima>
      </MainWrapper>
    );
  }
}

export default MainPage;
