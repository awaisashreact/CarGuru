import styled from 'styled-components/native';
import { BLACK } from '../../helper/Color';

const DashBoardStyles = {
  WrapperViewVertical: styled.View`
    flex: 1;
    justifyContent: center;
    backgroundColor: ${BLACK.dark};
  `,
  SplashImage: styled.Image`
    height: 150px;
    width: 100px;
    alignSelf: center;
    resizeMode: contain;
  `,
};

export default DashBoardStyles;
