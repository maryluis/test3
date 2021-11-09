import React from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { actionGetData, actionSaveData } from '../../reduxDir';
import { MainWrapper, CardDiv, DarkText, DarkTitle, ButtonForm } from '.';

export class NewsPage extends React.Component {
  constructor(props) {
    super(props);
    this.title = 'News';
  }

  componentDidMount() {
    this.props.getData();
  }

  clickHandler(s) {
    this.props.putData(s);
    this.props.history.push('/form');
  }

  render() {
    return (
      <MainWrapper justify="center">
        {this.props.news.map((s) => (
          <CardDiv key={s.id}>
            <DarkTitle>{s.title}</DarkTitle>
            <DarkText>{ s.text}</DarkText>
            <ButtonForm onClick={() => this.clickHandler(s)}>Редактировать</ButtonForm>
          </CardDiv>
        ))}
      </MainWrapper>
    );
  }
}

const mapStateToProps = (state) => ({
  news: state.news,
  theme: state.theme,
  form: state.form,
});

const mapDispatchToProps = (dispatch) => bindActionCreators({
  getData: actionGetData,
  putData: actionSaveData,
}, dispatch);

export const CNewsPage = connect(mapStateToProps, mapDispatchToProps)(NewsPage);
