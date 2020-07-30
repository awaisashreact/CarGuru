import styled from 'styled-components/native';
import { BLACK, WHITE } from '../../helper/Color';
import { SCREEN } from '../../helper/Constant';

const InvoiceStyles = {
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
    minHeight: ${SCREEN.height / 10}px;
    width: ${SCREEN.width - 30}px;
    alignSelf: center;
    backgroundColor: ${WHITE.dark};
    shadowColor: #000;
     shadowOffset: {
	     width: 0,
	     height: 0.3,
     };
    shadowOpacity: 0.3px;
    shadowRadius: 6px;
    elevation: 7;
    marginTop: 20px;
    flexDirection: row;
    padding: 10px;
  `,
  CellLeftView: styled.View`
    flex: 0.3;
    justifyContent: center;
    alignItems: center;
  `,
  CellLeftInnerImage: styled.Image`
    height: 100px;
    width: 100px;
    resizeMode: contain;
    borderRadius: 10px;
  `,
  CellRightView: styled.View`
    flex: 1;
    justifyContent: center;
  `,
  CellRightTitle: styled.Text`
    fontSize: 15px;
    fontFamily: Helvetica;
  `,
  CellRightdetail: styled.Text`
    fontSize: 12px;
    fontFamily: Helvetica;
    color ${BLACK.darkLight};
  `,

};

export default InvoiceStyles;
