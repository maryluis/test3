import React from 'react';
import { Route, Switch, Redirect } from 'react-router-dom';
import { MainPage, CNewsPage, StyledMain, CFormPage, CEditedNewsPage } from '.';

class Main extends React.Component {
  render() {
    return (
      <StyledMain>
        <Switch>
          <Route exact path="/" component={MainPage} />
          <Route path="/news" component={CNewsPage} />
          <Route path="/form" component={CFormPage} />
          <Route path="/edited" component={CEditedNewsPage} />
          <Route render={() => <Redirect to="/" />} />
        </Switch>
      </StyledMain>
    );
  }
}
export default Main;
