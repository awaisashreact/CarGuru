/* eslint-disable no-undef */
import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import Icon1 from 'react-native-vector-icons/Fontisto';
import Icon2 from 'react-native-vector-icons/AntDesign';


import * as Actions from '../../redux/actions';
import SignUpStyles from './SignUpStyles';
import { WHITE } from '../../helper/Color';
import Header from '../../component/Header';

class SignUp extends Component {

  constructor() {
    super();
    this.state = {
      selectedRemember: false,
    }
  }

  componentDidMount() {
  }

  render() {
    return (
      <SignUpStyles.WrapperViewVertical>

        <Header
          leftType={'text'}
          leftText={'Back'}
          leftPress={() => this.props.navigation.pop()}
          HeaderText={"Sign Up"}
          rightType={'text'}
        />
        <SignUpStyles.SplashImage source={require('../../assets/appIcon.png')} />
        <SignUpStyles.WrapperViewVertical2>

          <SignUpStyles.InputFieldWrapper>
            <SignUpStyles.TextInputImageWrapper>
              <Icon2 size={30} color={WHITE.dark} name={'user'} />
            </SignUpStyles.TextInputImageWrapper>
            <SignUpStyles.TextInputInner placeholder={'User name'} placeholderTextColor={WHITE.dark} />
          </SignUpStyles.InputFieldWrapper>
          <SignUpStyles.InputFieldWrapper>
            <SignUpStyles.TextInputImageWrapper>
              <Icon1 size={30} color={WHITE.dark} name={'email'} />
            </SignUpStyles.TextInputImageWrapper>
            <SignUpStyles.TextInputInner placeholder={'Email'} placeholderTextColor={WHITE.dark} />
          </SignUpStyles.InputFieldWrapper>
          <SignUpStyles.InputFieldWrapper>
            <SignUpStyles.TextInputImageWrapper>
              <Icon1 size={30} color={WHITE.dark} name={'locked'} />
            </SignUpStyles.TextInputImageWrapper>
            <SignUpStyles.TextInputInner placeholder={'Password'} placeholderTextColor={WHITE.dark} />
          </SignUpStyles.InputFieldWrapper>

          <SignUpStyles.InputFieldWrapper>
            <SignUpStyles.TextInputImageWrapper>
              <Icon1 size={30} color={WHITE.dark} name={'locked'} />
            </SignUpStyles.TextInputImageWrapper>
            <SignUpStyles.TextInputInner placeholder={'re-Password'} placeholderTextColor={WHITE.dark} />
          </SignUpStyles.InputFieldWrapper>

          <SignUpStyles.InputFieldWrapper>
            <SignUpStyles.TextInputImageWrapper>
              <Icon2 size={30} color={WHITE.dark} name={'phone'} />
            </SignUpStyles.TextInputImageWrapper>
            <SignUpStyles.TextInputInner placeholder={'Phone number'} placeholderTextColor={WHITE.dark} />
          </SignUpStyles.InputFieldWrapper>

          <SignUpStyles.RegisterButton onPress={() => this.props.navigation.navigate('HomeMain')}>
            <SignUpStyles.RememberMetext>
              Register
          </SignUpStyles.RememberMetext>
          </SignUpStyles.RegisterButton>
        </SignUpStyles.WrapperViewVertical2>
      </SignUpStyles.WrapperViewVertical>
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
)(SignUp);
