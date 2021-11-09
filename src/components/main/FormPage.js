import React from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { MainWrapper, FormWrapper, LightTitle, ButtonForm, FlexDiv, StyledInput, StyledTextArea, StyledLabel } from '.';
import { postNew, URL_NEWS, editNews, makeIdUrl } from '../../tools';
import { actionDeleteData } from '../../reduxDir';

export class FormPage extends React.Component {
  constructor(props) {
    super(props);
    this.isEmpty = Object.keys(this.props.form).length === 0;
    this.state = { title: this.props.form.title || '', text: this.props.form.text || '', id: this.props.form.id || Date.now() };
    this.handleChanges = this.handleChanges.bind(this);
  }

  componentWillUnmount() {
    this.props.removeData();
  }

  handleChanges(e, type) {
    this.setState({ [type]: e.target.value });
  }

  async clickHandler(id, data) {
    if (this.isEmpty) {
      await postNew(URL_NEWS, this.state);
    } else {
      await editNews(makeIdUrl(id), data);
    }
    this.props.history.push('/news/');
  }

  render() {
    return (
      <MainWrapper direction="column" align="center">
        <FormWrapper>
          <LightTitle left="50px">{this.isEmpty ? 'Создание' : 'Редактирование'} новости</LightTitle>
          <FlexDiv>
            <StyledLabel to="Title"> Название </StyledLabel>
            <StyledInput onChange={(e) => this.handleChanges(e, 'title')} placeholder="title" id="Title" value={this.state.title} />
          </FlexDiv>
          <FlexDiv>
            <StyledLabel to="Text"> Описание</StyledLabel>
            <StyledTextArea onChange={(e) => this.handleChanges(e, 'text')} placeholder="text" value={this.state.text} />
          </FlexDiv>
          <ButtonForm
            disabled={!this.state.title || !this.state.text}
            onClick={() => this.clickHandler(this.state.id, this.state)}
          > Сохранить
          </ButtonForm>
        </FormWrapper>
      </MainWrapper>
    );
  }
}
const mapStateToProps = (state) => ({
  form: state.form,
});

const mapDispatchToProps = (dispatch) => bindActionCreators({
  removeData: actionDeleteData,
}, dispatch);

export const CFormPage = connect(mapStateToProps, mapDispatchToProps)(FormPage);
