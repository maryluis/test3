import React from 'react';
import { Provider } from 'react-redux';
import { BrowserRouter as Router } from 'react-router-dom';
import { createBrowserHistory } from 'history';
import { CThemeWrapper } from './components';
import { store } from './reduxDir';

class App extends React.Component {
  render() {
    return (
      <Provider store={store}>
        <Router history={createBrowserHistory}>
          <CThemeWrapper />
        </Router>
      </Provider>
    );
  }
}

export default App;
