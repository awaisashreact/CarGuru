import styled from 'styled-components/native';
import { BLACK, WHITE, GREEN } from '../../helper/Color';
import { SCREEN } from '../../helper/Constant';

const ServiceOrderStyles = {
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
  JobList: styled.FlatList`
    marginVertical: 20px;
  `,
  CellWrapper: styled.TouchableOpacity`
    minHeight: ${SCREEN.height / 8}px;
    width: ${SCREEN.width - 30}px;
    alignSelf: center;
    backgroundColor: ${WHITE.dark};
    shadowColor: #000;
     shadowOffset: {
	     width: 0,
	     height: 1,
     };
    shadowOpacity: 0.3px;
    shadowRadius: 4px;
    elevation: 7;
    marginTop: 20px;
    flexDirection: row;
  `,
  CellLeftView: styled.View`
    flex: 0.3;
    justifyContent: center;
    alignItems: center;
  `,
  CellLeftInnerImage: styled.Image`
    height: 100px;
    width: 100px;
  `,
  CellRightView: styled.View`
    flex: 0.7;
    justifyContent: center;
  `,
  CellRightTitle: styled.Text`
    fontSize: 15px;
    fontFamily: Helvetica;
  `,
  CellRightdetail: styled.Text`
    fontSize: 12px;
    color ${BLACK.darkLight};
    fontFamily: Helvetica;
  `,
  ButtonWrapperView: styled.View`
    height: 44px;
    width: ${SCREEN.width - 30}px;
    alignSelf: center;
    flexDirection: row;
    marginTop: 40px;
  `,
  Flex1View: styled.View`
    justifyContent: center;
    alignItems: center;
    flex: 1;
  `,
  InnerButton: styled.TouchableOpacity`
    height: 44px;
    width: ${(SCREEN.width / 2) - 40};
    backgroundColor: ${GREEN.deafult};
    justifyContent: center;
    alignItems: center;
  `,
  InnerButtonText: styled.Text`
  fontSize: 15px;
  fontWeight: 500;
  color: ${WHITE.dark};
  fontFamily: Helvetica;
  `,
};

export default ServiceOrderStyles;
