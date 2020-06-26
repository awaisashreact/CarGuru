/* eslint-disable react-native/no-inline-styles */
import React, { Component } from 'react';
import {
  View,
  SafeAreaView,
  Text,
  TextInput,
  TouchableOpacity,
  ScrollView,
  Platform,
  FlatList,
  Alert
} from 'react-native';
import { bindActionCreators } from "redux";
import { connect } from "react-redux";
import Icon from 'react-native-vector-icons/AntDesign';
import Icon2 from 'react-native-vector-icons/FontAwesome';

import * as Actions from "../../redux/actions"; //Import your actions
import ChatHeader from '../../component/ChatHeader';
import { WHITE, BLACK, GREEN } from '../../helper/Color';
import {SCREEN} from '../../helper/Constant';


class Chat extends Component {
  constructor() {
    super();
    this.state = {
      messageList: [
        {
          message: 'Hello', from: 'other', time: '04:20', date: '04/10/19'
        },
        {
          message: 'Hello', from: 'me', time: '04:21', date: '04/10/19'
        },
        {
          message: 'How are you?', from: 'other', time: '04:22', date: '04/10/19'
        },
        {
          message: 'I am fine', from: 'me', time: '04:22', date: '04/10/19'
        },
      ],
      orderDataProduct: [
      ],
      orderDataDeal: [
      ],
      imageUri: '',
      messageText: '',
      started: false,
      audioUrl: '',
    };
  }

  componentDidMount() {
  }



  render() {
    return (
      <View
        style={{
          flex: 1,
          marginBottom:
            Platform.OS === 'ios' &&
              (SCREEN.height === 812 ||
                SCREEN.width === 812 ||
                (SCREEN.height === 896 || SCREEN.width === 896))
              ? 50
              : 30,
          backgroundColor: WHITE.dark
        }}>
          <ChatHeader
          leftType={'text'}
          leftText={'Hamid'}
          leftPress={() => this.props.navigation.pop()}
          HeaderText={"Chat"}
          rightType={'text'}
        />
        <SafeAreaView
          style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>

          <View
            style={{
              height: 44,
              justifyContent: 'center',
              alignItems: 'center',
              flexDirection: 'row',
              position: 'absolute',
              bottom: 0
            }}>

            <TextInput
              style={{
                height: 35,
                width: SCREEN.width - 130,
                borderColor: WHITE.borderLight,
                borderWidth: 1,
                borderRadius: 22,
                marginLeft: 10,
                alignSelf: 'center',
                shadowOffset: { width: 0.5, height: 1 },
                shadowColor: BLACK.dark,
                shadowOpacity: 0.35,
                elevation: 1,
                backgroundColor: WHITE.dark,
                paddingHorizontal: 10
              }}
              value={this.state.messageText}
              onChangeText={(messageText) => this.setState({ messageText })}
            />
            <TouchableOpacity style={{ marginLeft: 10, marginRight: 10, alignItems: 'center' }}>
              <Icon
                name={'camera'}
                size={25}
                color={GREEN.deafult}
              />
            </TouchableOpacity>
            <TouchableOpacity style={{ marginLeft: 10, marginRight: 10, alignItems: 'center' }}>
              <Icon2
                name={'microphone'}
                size={25}
                color={GREEN.deafult}
              />
            </TouchableOpacity>
            <TouchableOpacity
              style={{ marginRight: 10 }}
              onPress={() => this.state.messageText !== '' ? Alert.alert("Message sent") : Alert.alert("Please type some message")}>
              <Icon2
                name={'send'}
                size={25}
                color={GREEN.deafult}
              />
            </TouchableOpacity>
          </View>
          <View style={{ marginBottom: 60}}>
                <FlatList 
                  inverted
                  data={(this.state.messageList).reverse()}
                  renderItem={(item) => (
                    <View style={{minHeight: 40, padding: 5, width: SCREEN.width - 10, alignSelf: "center", marginTop: 10}}>
                      {item.item.from === 'other' ? 
                        <View style={{ minHeight: 40, width: SCREEN.width - 20, alignSelf: "center", alignItems: 'flex-start' }}>
                            <Text style={{backgroundColor: WHITE.light, padding: 20}}>
                              {item.item.message}
                            </Text>
                        </View> : 
                        <View style={{ minHeight: 40, width: SCREEN.width - 20, alignSelf: "center", alignItems: 'flex-end', justifyContent: 'center'}}>
                            <Text style={{backgroundColor: GREEN.deafult, padding: 20}}>
                              {item.item.message}
                            </Text>
                        </View> }
                    </View>
                  )}
                 />
          </View>
        </SafeAreaView>
      </View>
    );
  }
}
function mapStateToProps(state, props) {
  return {
    userDetail: state.user.userDetail,
    userToken: state.user.userToken,

  };
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators(Actions, dispatch);
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Chat);
