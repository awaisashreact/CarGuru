import styled from 'styled-components/native';

import { BLACK, WHITE, GREEN } from '../../helper/Color';
import {SCREEN} from '../../helper/Constant';

const SignUpStyles = {
  WrapperViewVertical: styled.View`
    flex: 1;
    backgroundColor: ${BLACK.darkLight};
  `,
  WrapperViewVertical2: styled.ScrollView`
    flex: 1;
    marginTop: 40px;
  `,
  SplashImage: styled.Image`
    height: 100px;
    width: 70px;
    alignSelf: center;
    resizeMode: contain;
    marginTop: 15px;
  `,
  InputFieldWrapper: styled.View`
    height: 54px;
    width: ${SCREEN.width - 30}px;
    alignSelf: center;
    marginTop: 20px;
    backgroundColor: ${GREEN.deafult};
    borderRadius: 10px;
    flexDirection: row;
  `,
  TextInputImageWrapper: styled.View`
    height: 54px;
    width: 54px;
    backgroundColor: ${GREEN.deafult};
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
    backgroundColor: ${BLACK.light};
    borderBottomRightRadius: 10px;
    borderTopRightRadius: 10px;
    padding: 7px;
    color: ${WHITE.dark};
  `,
  RegisterButton: styled.TouchableOpacity`
    height: 54px;
    width: ${SCREEN.width -30}px;
    alignSelf: center;
    justifyContent: center;
    alignItems: center;
    backgroundColor: ${GREEN.deafult};
    marginBottom: 15px;
    borderRadius: 10px;
    marginTop: 40px;
  `,
  RememberMetext: styled.Text`
    fontSize: 17px;
    color: ${WHITE.dark};
  `,
};

export default SignUpStyles;
