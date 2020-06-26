/* eslint-disable react-native/no-inline-styles */
import React, { Component } from 'react';
import {
  View,
  SafeAreaView,
  Text,
  TextInput,
  TouchableOpacity,
  Image,
  Platform,
  FlatList,
  Alert
} from 'react-native';
import { bindActionCreators } from "redux";
import { connect } from "react-redux";
import Icon from 'react-native-vector-icons/AntDesign';
import Icon2 from 'react-native-vector-icons/FontAwesome';

import * as Actions from "../../redux/actions"; //Import your actions
import Header from '../../component/Header';
import { WHITE, BLACK, GREEN } from '../../helper/Color';
import {SCREEN} from '../../helper/Constant';


class ChatSlider extends Component {
  constructor() {
    super();
    this.state = {
      chatMemberList: [
        {
          name: 'Hamid', message: "You didn't make it last time", image: 'https://bacp-web-live-endpoint.azureedge.net/cache/c/0/5/1/6/9/c05169ac9de9665c866f2a667552e5ed5d4f4a8e.jpg'
        },
        {
          name: 'Muhammad Ali', message: "You were late.", image: 'https://about.fb.com/wp-content/uploads/2019/11/CompanyInfo_OurCulture_Alberto_Image-1.jpg?fit=890%2C668'
        },
        {
          name: 'Khaliq Ali', message: "What is your problem brother.", image: 'https://tvguide1.cbsistatic.com/i/2018/02/10/3a534e4d-ffa5-402d-b68d-cb0c7368e6af/1d544b6e110f4394a28bf5db8434a840/180209-personofinterest.jpg'
        }
      ],
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
          <Header leftPress={() => this.props.navigation.openDrawer()} HeaderText={"Messages"} rightPress={()=> this.props.navigation.navigate('Notification')} />
        <SafeAreaView
          style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>

          {this.state.chatMemberList && <FlatList 
            data={this.state.chatMemberList}
            renderItem={(item) => (
              <TouchableOpacity
                onPress={() => this.props.navigation.navigate('Chat')}
                style={{height: 100, width: SCREEN.width - 20, alignSelf: "center", flexDirection: 'row'}}>
                  <View style={{height: 100, width: 50, justifyContent: 'center', alignItems: 'center'}}>
                    <Image
                      style={{height: 50, width: 50, borderRadius: 25}} 
                      source={{uri: item.item.image}}/>
                  </View>
                  <View style={{flex: 1, justifyContent: "center", paddingLeft: 25}}>
                    <Text style={{fontSize: 20, fontWeight: '600', fontStyle: 'italic'}}>
                      {item.item.name}
                    </Text>
                    <Text style={{fontSize: 16, fontWeight: '300'}}>
                      {item.item.message}
                    </Text>
                  </View>
              </TouchableOpacity>
            )}/>}
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
)(ChatSlider);
