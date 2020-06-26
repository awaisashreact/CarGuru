import styled from 'styled-components/native';
import { BLACK, WHITE } from '../../helper/Color';
import { SCREEN } from '../../helper/Constant';

const ReviewStyles = {
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
    height: ${SCREEN.height / 9}px;
    width: ${SCREEN.width - 15}px;
    alignSelf: center;
    borderRadius: 10px;
    backgroundColor: ${WHITE.dark};
    shadowColor: #000;
     shadowOffset: {
	     width: 0,
	     height: 1,
     };
    shadowOpacity: 0.29px;
    shadowRadius: 4px;
    elevation: 7;
    marginTop: 20px;
    flexDirection: row;
  `,
  CellLeftView: styled.View`
    flex: 0.25;
    justifyContent: center;
    alignItems: center;
  `,
  CellLeftInnerImage: styled.Image`
    height: 40px;
    width: 40px;
    borderRadius: 10px;
  `,
  CellRightView: styled.View`
    flex: 0.7;
    justifyContent: center;
    padding: 10px
  `,
  CellRightTitle: styled.Text`
    fontSize: 20px;
    fontWeight: bold;
  `,
  CellRightWrapper: styled.View`
   flexDirection: row;
   alignItems: center;
  `,
  CellRightdetail: styled.Text`
    fontSize: 16px;
    color ${BLACK.darkLight};
  `,

};

export default ReviewStyles;
