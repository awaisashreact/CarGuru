import styled from 'styled-components/native';
import { BLACK, WHITE } from '../../helper/Color';
import { SCREEN } from '../../helper/Constant';

const NotificationStyles = {
  WrapperViewVertical: styled.View`
    flex: 1;
    backgroundColor: ${WHITE.dark};
  `,
  SplashImage: styled.Image`
    height: 100px;
    width: 100px;
    alignSelf: center;
    resizeMode: contain;
  `,
  JobList: styled.FlatList`
    marginVertical: 20px;
  `,
  CellWrapper: styled.TouchableOpacity`
    height: ${SCREEN.height / 12}px;
    width: ${SCREEN.width - 15}px;
    alignSelf: center;
    borderRadius: 10px;
    backgroundColor: ${WHITE.off};
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
    flex: 0.2;
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
    fontSize: 16px;
    fontWeight: bold;
  `,
  CellRightdetail: styled.Text`
    fontSize: 18px;
    color ${BLACK.darkLight};
  `,
  CellMostRightView: styled.View`
    height: 40px;
    width: 40px;
    position: absolute;
    right: 5px;
    top: 25px;
  `,

};

export default NotificationStyles;
