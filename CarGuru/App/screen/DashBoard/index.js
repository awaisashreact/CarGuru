/* eslint-disable no-undef */
import React, {Component} from 'react';
import {bindActionCreators} from 'redux';
import {connect} from 'react-redux';

import * as Actions from '../../redux/actions';
import DashBoardStyles from './DashBoardStyles';

class DashBoard extends Component {

  componentDidMount() {
  }

  render() {
    return (
      <DashBoardStyles.WrapperViewVertical>
        <DashBoardStyles.SplashImage source={require('../../assets/appIcon.png')} />
      </DashBoardStyles.WrapperViewVertical>
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
)(DashBoard);
