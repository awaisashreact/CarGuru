/* eslint-disable no-undef */
import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import Header from '../../component/Header';
import {View, Image, Text} from 'react-native';
import Icon1 from 'react-native-vector-icons/Ionicons';
import Icon from 'react-native-vector-icons/AntDesign';


import * as Actions from '../../redux/actions';
import NotificationStyles from './NotificationStyles';
import { SCREEN } from '../../helper/Constant';
import { RED, GREEN, BLACK, WHITE } from '../../helper/Color';

class Invoice extends Component {
  constructor() {
    super();
    this.state = {
      detailView: false,
      listJobs: [

        {
          message: 'New Job assigned', street: '2526', status: 'Job', zip_code: '10014', amount: '1000$',
          pic: 'https://cs2.gamemodding.com/images/750x407/80897ad77fd27b1f14492a4a811d021df3f83916db60710cc52c2d74dac857d0.jpg'
        },
        {
          message: 'You received a message', street: '2126', status: 'message', zip_code: '10014', amount: '100$',
          pic: 'https://www.meme-arsenal.com/memes/9f8fe3a3347a11a61c9a74adcb316dbb.jpg'
        },

        {
          message: 'New Job assigned', street: '2226 ', status: 'Job', zip_code: '10014', amount: '30$',
          pic: 'https://cs2.gamemodding.com/images/7ed875b245003407d6492ef5c1f323a26f01c7aa636bd01ad1d4f0e97325f23a.jpg'
        },
        {
          message: 'You received a message', street: '2026 ', status: 'Message', zip_code: '10014', amount: '300$',
          pic: 'https://cs2.gamemodding.com/images/750x407/1aeac11c20cae6f9c2311180c6c3d1fe049dd022a7244711c11de824b6163884.jpg'
        },
        {
          message: `You are late to provide service ${'\n'} service #2345`, street: '2826 ', status: 'Late', zip_code: '10014', amount: '400$',
          pic: 'https://cs2.gamemodding.com/images/750x407/80897ad77fd27b1f14492a4a811d021df3f83916db60710cc52c2d74dac857d0.jpg'
        },
      ],
    }
  }

  componentDidMount() {

  }

  render() {
    return (
      <NotificationStyles.WrapperViewVertical>
        <Header
           leftType={'text'}
           leftText={'Back'}
           leftPress={() => this.props.navigation.pop()}
          HeaderText={"Notification"}
          rightType={'text'}
        />
        <NotificationStyles.JobList
          data={this.state.listJobs}
          keyExtractor={(item, index) => index.toString()}
          renderItem={(item,index) => (
            <NotificationStyles.CellWrapper onPress={()=> {
              if(item.item.status === 'Job'){
                this.props.navigation.navigate('JobDetail')
              }
              else if(item.item.status === 'Message'){
                this.props.navigation.navigate('Chat')
              }
            }}>
              <NotificationStyles.CellLeftView>
            <Icon1 size={35} color={GREEN.deafult} name={'ios-notifications'} />
              </NotificationStyles.CellLeftView>
              <NotificationStyles.CellRightView>
                <NotificationStyles.CellRightTitle>
                  {item.item.message}
                </NotificationStyles.CellRightTitle>
                <NotificationStyles.CellMostRightView>
                <Icon name={"caretright"} color={GREEN.deafult} size={20} />
                </NotificationStyles.CellMostRightView>
              </NotificationStyles.CellRightView>
            </NotificationStyles.CellWrapper>
          )}
        />
        {this.state.detailView && <View style={{position: 'absolute', height: SCREEN.height, width: SCREEN.width}}>
          <Image style={{height: 250, width: SCREEN.width}} source={{uri: 'https://cs2.gamemodding.com/images/750x407/80897ad77fd27b1f14492a4a811d021df3f83916db60710cc52c2d74dac857d0.jpg'}} />
          </View>}
      </NotificationStyles.WrapperViewVertical>
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
  mapDispatchToProps,
)(Invoice);
