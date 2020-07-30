import styled from 'styled-components/native';
import { WHITE } from '../../helper/Color';

const SplashStyles = {
  WrapperViewVertical: styled.View`
    flex: 1;
    justifyContent: center;
    backgroundColor: ${WHITE.dark};
  `,
  SplashImage: styled.Image`
    height: 150px;
    width: 100px;
    alignSelf: center;
    resizeMode: contain;
  `,
};

export default SplashStyles;
