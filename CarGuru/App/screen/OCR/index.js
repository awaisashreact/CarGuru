/* eslint-disable no-undef */
import React, {Component} from 'react';
import {bindActionCreators} from 'redux';
import {connect} from 'react-redux';

import * as Actions from '../../redux/actions';
import OCRStyles from './OCRStyles';

class OCR extends Component {

  componentDidMount() {
  }

  render() {
    return (
      <OCRStyles.WrapperViewVertical>
        <OCRStyles.SplashImage source={require('../../assets/appIcon.png')} />
      </OCRStyles.WrapperViewVertical>
    );
  }
}

function mapStateToProps(state, props) {
  return {
    userDetail: state.user.userDetail,
    userToken: state.user.userToken,
  };
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators(Actions, dispatch);
}

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(OCR);
