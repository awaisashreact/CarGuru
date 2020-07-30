import styled from 'styled-components/native';

import { BLACK, WHITE, ORANGE, GREEN } from '../../helper/Color';
import {SCREEN} from '../../helper/Constant';

const SignInStyles = {
  WrapperViewVertical: styled.View`
    flex: 1;
    backgroundColor: ${WHITE.dark};
  `,
  WrapperViewVertical2: styled.View`
    flex: 1;
  `,
  SplashImage: styled.Image`
    height: 150px;
    width: 120px;
    alignSelf: center;
    resizeMode: contain;
    marginTop: 15px;
  `,
  InputFieldWrapper: styled.View`
    height: 54px;
    width: ${SCREEN.width - 30}px;
    alignSelf: center;
    marginTop: 20px;
    backgroundColor: ${WHITE.dark};
    flexDirection: row;
    shadowColor: #000;
    shadowOffset: {
      width: 0,
      height: 1,
    };
   shadowOpacity: 0.19px;
   shadowRadius: 8px;
   elevation: 7;
  `,
  TextInputImageWrapper: styled.View`
    height: 54px;
    width: 54px;
    backgroundColor: ${WHITE.dark};
    justifyContent: center;
    alignItems: center;
    borderBottomLeftRadius: 10px;
    borderTopLeftRadius: 10px;
  `,
  ImageTextInput: styled.Image`
    height: 40px;
    width: 40px;
    resizeMode: contain;
  `,
  TextInputInner: styled.TextInput`
    height: 54px;
    width: ${SCREEN.width - 84}px;
    backgroundColor: ${WHITE.dark};
    borderBottomRightRadius: 10px;
    borderTopRightRadius: 10px;
    padding: 7px;
    color: ${WHITE.dark};
  `,
  RememberMeWrapper: styled.View`
    height: 54px;
    width: ${SCREEN.width - 30}px;
    alignSelf: center;
    alignItems: center;
    flexDirection: row;
    marginTop: 15px;
  `,
  RemeberMeView: styled.View`
    flex: 0.65;
    flexDirection: row;
    alignItems: center;
  `,
  ToggleView: styled.TouchableOpacity`
    height: 20px;
    width: 20px;
    borderWidth: 1px;
    backgroundColor: ${GREEN.deafult};
    justifyContent: center;
    alignItems: center;
    marginLeft: 5px;
  `,
  RememberMetext: styled.Text`
    fontSize: 12px;
    color: ${BLACK.dark};
  `,
  LoginButtonWrapper: styled.View`
    flex: 0.35;
    justifyContent: center;
    alignItems: center;
  `,
  LoginButton: styled.TouchableOpacity`
    height: 54px;
    width: ${SCREEN.width / 3.5}px;
    justifyContent: center;
    alignItems: center;
    backgroundColor: ${GREEN.deafult};
    borderRadius: 10px;
  `,
  ForgotView: styled.View`
    height: 40px;
    width: ${SCREEN.width - 30}px;
    alignSelf: center;
    alignItems: flex-end;
    paddingRight: 5px;
    marginTop: 15px;
  `,
  ForgotText: styled.Text`
    fontSize: 15px;
    color: ${WHITE.dark};
  `,
  RegisterButton: styled.TouchableOpacity`
    height: 54px;
    width: ${SCREEN.width -30}px;
    alignSelf: center;
    justifyContent: center;
    alignItems: center;
    backgroundColor: ${BLACK.placeholder};
    marginBottom: 15px;
    borderRadius: 10px;
  `,
};

export default SignInStyles;
