import React from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { HeaderWrapper, HeaderLink, ButtonStyledHeader } from '.';
import { actionChangeTheme } from '../../reduxDir';

export class Header extends React.Component {
  constructor(props) {
    super(props);
    this.links = [
      { label: 'Main', link: '/' },
      { label: 'News', link: '/news' },
    ];
  }

  render() {
    return (
      <HeaderWrapper>
        <HeaderWrapper>
          {this.links.map((item) => <HeaderLink key={item.label} to={item.link}>{item.label}</HeaderLink>)}
        </HeaderWrapper>
        <ButtonStyledHeader onClick={() => this.props.changeTheme(this.props.theme)}> Change Theme </ButtonStyledHeader>
      </HeaderWrapper>
    );
  }
}
const mapStateToProps = (state) => ({
  theme: state.theme,
});

const mapDispatchToProps = (dispatch) => bindActionCreators({
  changeTheme: actionChangeTheme,
}, dispatch);

export const CHeader = connect(mapStateToProps, mapDispatchToProps)(Header);
