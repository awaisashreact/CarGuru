import styled from 'styled-components/native';
import { BLACK, WHITE, GREEN } from '../../helper/Color';
import { SCREEN } from '../../helper/Constant';

const ProfileStyles = {
  WrapperViewVertical: styled.View`
    flex: 1;
    backgroundColor: ${WHITE.dark};
  `,
  SplashImage: styled.Image`
    height: 150px;
    width: 100px;
    alignSelf: center;
    resizeMode: contain;
  `,
  ImageWrapperView: styled.TouchableOpacity`
    height: 80px;
    width: 80px;
    borderRadius: 40px;
    alignSelf: center;
    marginTop: 40px;
    justifyContent: center;
    backgroundColor: ${GREEN.deafult};
    borderColor: ${WHITE.off};
    borderWidth: 0.5px;
  `,
  InnerImage: styled.Image`
    height: 80px;
    width: 80px;
    alignSelf: center;
    borderRadius: 40px;
  `,
  DetailWrapper: styled.View`
  height: 50px;
  width: ${SCREEN.width - 20}px;
  alignSelf: center;
  backgroundColor: ${WHITE.dark};
  flexDirection: row;
  marginTop: 10px;
  borderColor: ${BLACK.light_grey};
  borderWidth: 0.5px;
  alignItems: center;
  paddingLeft: 5px;
  `,
  TitleTextView: styled.View`
  flex: 0.3;
  justifyContent: center;
  borderRightWidth: 0.5px;
  borderColor: ${WHITE.dark};
  paddingLeft: 5px;
  `,
  TitleText: styled.Text`
  fontSize: 15px;
  alignSelf: center;
  color: ${BLACK.dark};
  fontFamily: Helvetica;
  `,
  DescriptionView: styled.View`
  flex: 0.7;
  justifyContent: center;
  paddingLeft: 10px;
`,
DescriptionText: styled.Text`
fontSize: 12px;
color: ${BLACK.light};
fontFamily: Helvetica;
`,
ServiceFeeDetail: styled.TextInput`
  height: 50px;
`,
};

export default ProfileStyles;
