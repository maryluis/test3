import React from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { MainWrapper, LightTitle, CardDiv, DarkTitle, DarkText, FormWrapper } from '.';

export class EditedNewsPage extends React.Component {
  constructor(props) {
    super(props);
    this.isEmpty = Object.keys(this.props.data).length === 0;
    this.title = this.isEmpty ? 'Не найдено' : 'Новая новость выглядит так';
  }

  render() {
    return (
      <MainWrapper direction="column" align="center" justify="auto">
        <LightTitle>{this.title}</LightTitle>
        <FormWrapper>
          {!this.isEmpty && (
            <CardDiv>
              <DarkTitle>{this.props.data.title}</DarkTitle>
              <DarkText>{this.props.data.text}</DarkText>
            </CardDiv>
          )}
        </FormWrapper>
      </MainWrapper>
    );
  }
}

const mapStateToProps = (state) => ({
  data: state.edited,
});

const mapDispatchToProps = (dispatch) => bindActionCreators({
}, dispatch);

export const CEditedNewsPage = connect(mapStateToProps, mapDispatchToProps)(EditedNewsPage);
