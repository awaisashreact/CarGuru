/* eslint-disable no-undef */
import React, {Component} from 'react';
import {bindActionCreators} from 'redux';
import {connect} from 'react-redux';

import * as Actions from '../../redux/actions';
import ProfileStyles from './ProfileStyles';

class Profile extends Component {

  componentDidMount() {
  }

  render() {
    return (
      <ProfileStyles.WrapperViewVertical>
        <ProfileStyles.SplashImage source={require('../../assets/appIcon.png')} />
      </ProfileStyles.WrapperViewVertical>
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
)(Profile);
