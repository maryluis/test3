import React from 'react';
import { ThemeProvider } from 'styled-components';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { CHeader, Main } from '.';
import { PrimaryTheme, SecondaryTheme } from './styles';

export class ThemeWrapper extends React.Component {
  constructor(props) {
    super(props);
    this.title = 'title';
  }

  render() {
    return (
      <ThemeProvider theme={this.props.theme === 'YELLOW' ? PrimaryTheme : SecondaryTheme}>
        <CHeader />
        <Main />
      </ThemeProvider>
    );
  }
}

const mapStateToProps = (state) => ({
  theme: state.theme,
});

const mapDispatchToProps = (dispatch) => bindActionCreators({
}, dispatch);

export const CThemeWrapper = connect(mapStateToProps, mapDispatchToProps)(ThemeWrapper);
