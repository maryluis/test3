import React from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { MainWrapper, LightTitle, ButtonForm, FlexDiv, StyledInput, StyledTextArea, StyledLabel } from '.';
import { actionDeleteData, actionTakeData } from '../../reduxDir';

export class FormPage extends React.Component {
  constructor(props) {
    super(props);
    this.isEmpty = Object.keys(this.props.form).length === 0;
    this.state = { title: this.props.form.title || '', text: this.props.form.text || '' };
    this.handleChanges = this.handleChanges.bind(this);
  }

  componentWillUnmount() {
    this.props.removeData();
  }

  handleChanges(e, type) {
    this.setState({ [type]: e.target.value });
  }

  clickHandler(data) {
    this.props.editData(data);
    this.props.history.push('/edited');
  }

  render() {
    return (
      <MainWrapper direction="column" align="center">
        <LightTitle left="50px">{this.isEmpty ? 'Создание' : 'Редактирование'} новости</LightTitle>
        <FlexDiv>
          <StyledLabel to="Title"> Название </StyledLabel>
          <StyledInput onChange={(e) => this.handleChanges(e, 'title')} placeholder="title" id="Title" value={this.state.title} />
        </FlexDiv>
        <FlexDiv>
          <StyledLabel to="Text"> Описание</StyledLabel>
          <StyledTextArea onChange={(e) => this.handleChanges(e, 'text')} placeholder="text" value={this.state.text} />
        </FlexDiv>
        <ButtonForm disabled={!this.state.title || !this.state.text} onClick={() => this.clickHandler(this.state)}> Сохранить </ButtonForm>
      </MainWrapper>
    );
  }
}
const mapStateToProps = (state) => ({
  form: state.form,
});

const mapDispatchToProps = (dispatch) => bindActionCreators({
  removeData: actionDeleteData,
  editData: actionTakeData,
}, dispatch);

export const CFormPage = connect(mapStateToProps, mapDispatchToProps)(FormPage);
