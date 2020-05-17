/* eslint-disable no-undef */
import React, {Component} from 'react';
import {bindActionCreators} from 'redux';
import {connect} from 'react-redux';

import * as Actions from '../../redux/actions';
import SplashStyles from './SplashStyles';

class Login extends Component {

  componentDidMount() {
    setTimeout(() => {
      this.props.navigation.navigate('SignIn');
    }, 3000);
  }

  render() {
    return (
      <SplashStyles.WrapperViewVertical>
        <SplashStyles.SplashImage source={require('../../assets/appIcon.png')} />
      </SplashStyles.WrapperViewVertical>
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
)(Login);
