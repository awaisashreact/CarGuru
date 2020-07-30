import styled from 'styled-components/native';
import { BLACK, WHITE, GREEN } from '../../helper/Color';
import { SCREEN } from '../../helper/Constant';

const CheckInOutStyles = {
  WrapperViewVertical: styled.View`
    flex: 1;
    backgroundColor: ${WHITE.dark};
  `,
  CheckInTime: styled.Text`
    fontSize: 16px;
    alignSelf: center;
    color: ${BLACK.dark};
    fontFamily: Helvetica;
    marginLeft: 5px;
  `,
  CheckInOutButton: styled.TouchableOpacity`
    height: 44px;
    width: ${SCREEN.width - 80}px;
    alignSelf: center;
    marginTop: 5px;
    backgroundColor: ${WHITE.dark};
    justifyContent: center;
    alignItems: center;
    shadowOffset: { width: 0.9, height: 0.1 };
    shadowColor: ${BLACK.dark};
    shadowOpacity: 0.12;
    elevation: 1;
    borderColor: ${BLACK.light_grey};
    borderWidth: 0.3px;
  `,
  CheckInButtonText: styled.Text`
  color: ${BLACK.dark};
  fontFamily: Helvetica;
  fontSize: 15px;
  fontWeight: 500;
  `,

};

export default CheckInOutStyles;
