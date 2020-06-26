import styled from 'styled-components/native';
import { BLACK, WHITE, GREEN } from '../../helper/Color';
import { SCREEN } from '../../helper/Constant';

const ProductStyles = {
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
  CellMainWrapper: styled.View`
    flex: 1;
    justifyContent: center;
    alignItems: center;
  `,
  CellWrapper: styled.TouchableOpacity`
    minHeight: ${SCREEN.height / 8}px;
    width: ${(SCREEN.width / 2) - 30}px;
    backgroundColor: ${WHITE.dark};
    padding: 10px;
    shadowColor: #000;
     shadowOffset: {
	     width: 0,
	     height: 1,
     };
    shadowOpacity: 0.29px;
    shadowRadius: 4px;
    elevation: 7;
    marginTop: 20px;
    marginHorizontal: 7px;
  `,
  CellLeftView: styled.View`
    flex: 0.3;
    justifyContent: center;
    alignItems: center;
    padding: 10px;
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
    fontSize: 18px;
    marginTop: 5px;
    alignSelf: center;
    color: ${GREEN.deafult};
  `,
  CellRightdetail: styled.Text`
    fontSize: 16px;
    color ${BLACK.darkLight};
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
  fontSize: 18px;
  fontWeight: 500;
  color: ${WHITE.dark};
  `,
  TopDropDownView: styled.TouchableOpacity `
    height: 44px;
    width: ${SCREEN.width - 80}px;
    alignSelf: center;
    backgroundColor: ${WHITE.dark};
    borderWidth: 1px;
    borderColor: ${GREEN.deafult};
    marginTop: 5px;
    justifyContent: center;
  `,
  AbsoluteRightIcon: styled.View`
    height: 20px;
    width: 20px;
    position: absolute;
    right: 10;
    justifyContent: center;
    alignItems: center;
  `,
};

export default ProductStyles;
