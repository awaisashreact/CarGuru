import styled from 'styled-components/native';
import { BLACK, WHITE, GREEN } from '../../helper/Color';
import { SCREEN } from '../../helper/Constant';

const CheckInOutStyles = {
  WrapperViewVertical: styled.View`
    flex: 1;
    backgroundColor: ${WHITE.dark};
  `,
  CheckInTime: styled.Text`
    fontSize: 18px;
    marginLeft: 5px;
  `,
  CheckInOutButton: styled.TouchableOpacity`
    height: 44px;
    width: ${SCREEN.width - 80}px;
    alignSelf: center;
    marginTop: 5px;
    backgroundColor: ${GREEN.deafult};
    borderRadius: 10px;
    justifyContent: center;
    alignItems: center;
  `,
  CheckInButtonText: styled.Text`
    color: ${WHITE.dark};
    fontSize: 20px;
    fontWeight: 500;
  `,

};

export default CheckInOutStyles;
