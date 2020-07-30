import styled from 'styled-components/native';
import { BLACK, WHITE } from '../../helper/Color';
import { SCREEN } from '../../helper/Constant';

const EarnJobsDetailStyles = {
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
  CellWrapper: styled.View`
    minHeight: ${SCREEN.height / 9}px;
    padding: 10px;
    width: ${SCREEN.width - 20}px;
    alignSelf: center;
    backgroundColor: ${WHITE.dark};
    shadowColor: #000;
     shadowOffset: {
	     width: 1,
	     height: 1,
     };
    shadowOpacity: 0.2px;
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
    resizeMode: contain;
    borderRadius: 10px;
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
};

export default EarnJobsDetailStyles;
