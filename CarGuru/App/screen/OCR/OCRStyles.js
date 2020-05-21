import styled from 'styled-components/native';
import { BLACK, WHITE } from '../../helper/Color';

const OCRStyles = {
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
};

export default OCRStyles;
