/* eslint-disable no-undef */
import React, {Component} from 'react';
import {bindActionCreators} from 'redux';
import {connect} from 'react-redux';
import Icon1 from 'react-native-vector-icons/Fontisto';
import Icon2 from 'react-native-vector-icons/AntDesign';


import * as Actions from '../../redux/actions';
import SignInStyles from './SignInStyles';
import { WHITE } from '../../helper/Color';

class SignIn extends Component {

  constructor() {
    super();
    this.state={
      selectedRemember: false,
    }
  }

  componentDidMount() {
    setTimeout(() => {
      this.props.navigation.navigate('SignIn');
    }, 3000);
  }

  render() {
    return (
      <SignInStyles.WrapperViewVertical>
        <SignInStyles.SplashImage source={require('../../assets/appIcon.png')} />
        <SignInStyles.WrapperViewVertical2 style={{justifyContent: 'center'}}>
          <SignInStyles.InputFieldWrapper>
            <SignInStyles.TextInputImageWrapper>
              <Icon1 size={30} color={WHITE.dark} name={'email'}/>
            </SignInStyles.TextInputImageWrapper>
            <SignInStyles.TextInputInner />
          </SignInStyles.InputFieldWrapper>
          <SignInStyles.InputFieldWrapper>
            <SignInStyles.TextInputImageWrapper>
              <Icon1 size={30} color={WHITE.dark} name={'locked'}/>
            </SignInStyles.TextInputImageWrapper>
            <SignInStyles.TextInputInner />
          </SignInStyles.InputFieldWrapper>
          <SignInStyles.RememberMeWrapper>
            <SignInStyles.RemeberMeView>
              <SignInStyles.ToggleView onPress={() => this.setState({selectedRemember : !this.state.selectedRemember})}>
                {this.state.selectedRemember && <Icon2 name = {'check'} color = {WHITE.dark} size = {18} />}
              </SignInStyles.ToggleView>
              <SignInStyles.RememberMetext style={{marginLeft: 10}}>
                Remember me
              </SignInStyles.RememberMetext>
            </SignInStyles.RemeberMeView>
            <SignInStyles.LoginButtonWrapper>
              <SignInStyles.LoginButton onPress={() => this.props.navigation.navigate('HomeMain')}>
                <SignInStyles.RememberMetext>
                  Sign In
                </SignInStyles.RememberMetext>
              </SignInStyles.LoginButton>
            </SignInStyles.LoginButtonWrapper>
          </SignInStyles.RememberMeWrapper>
          <SignInStyles.ForgotView>
            <SignInStyles.ForgotText>
              Forgot password?
            </SignInStyles.ForgotText>
          </SignInStyles.ForgotView>
        </SignInStyles.WrapperViewVertical2>
        <SignInStyles.RegisterButton>
          <SignInStyles.RememberMetext>
            Register
          </SignInStyles.RememberMetext>
        </SignInStyles.RegisterButton>
      </SignInStyles.WrapperViewVertical>
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
)(SignIn);
