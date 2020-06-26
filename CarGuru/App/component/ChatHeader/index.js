import React from 'react';
import Icon from 'react-native-vector-icons/Ionicons';
import Icon1 from 'react-native-vector-icons/FontAwesome';

import ChatHeaderStyle from './ChatHeaderStyle';
import { WHITE } from '../../helper/Color';

const ChatHeader = ({
  backColor,
  leftType,
  leftImage,
  leftText,
  rightType,
  rightImage,
  rightText,
  HeaderText,
  leftPress,
  rightPress,
}) => (
    <ChatHeaderStyle.WrapperView>
      <ChatHeaderStyle.Flex1View>
        <ChatHeaderStyle.LeftImage onPress={leftPress}>
          <Icon size={35} color={WHITE.dark} name={'ios-arrow-round-back'} />
        </ChatHeaderStyle.LeftImage>
        <ChatHeaderStyle.LeftImage>
          <ChatHeaderStyle.LeftImageInner source={require('../../assets/person.jpeg')} />
        </ChatHeaderStyle.LeftImage>
        <ChatHeaderStyle.LeftText>
          {leftText}
        </ChatHeaderStyle.LeftText>
      </ChatHeaderStyle.Flex1View>
      <ChatHeaderStyle.Flex2View>
        <ChatHeaderStyle.RightImage onPress={rightPress}>
          <Icon1 size={25} color={WHITE.dark} name={'ellipsis-v'} />
        </ChatHeaderStyle.RightImage>
      </ChatHeaderStyle.Flex2View>
    </ChatHeaderStyle.WrapperView>)

export default ChatHeader;
