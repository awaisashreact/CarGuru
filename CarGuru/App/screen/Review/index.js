/* eslint-disable no-undef */
import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import Header from '../../component/Header';
import {View, Image, Text} from 'react-native';
import { Rating, AirbnbRating } from 'react-native-ratings';

import * as Actions from '../../redux/actions';
import ReviewStyles from './ReviewStyles';
import { SCREEN } from '../../helper/Constant';
import { GREEN, WHITE } from '../../helper/Color';

class Review extends Component {
  constructor() {
    super();
    this.state = {
      detailView: false,
      listJobs: [
        {
          name: 'Jack', street: '2826 ', date: '04/04/19', review: 'So lame', amount: '1',
          pic: 'https://cs2.gamemodding.com/images/750x407/80897ad77fd27b1f14492a4a811d021df3f83916db60710cc52c2d74dac857d0.jpg'
        },
        {
          name: 'Johnson', street: '2026 ', date: '05/04/19', review: 'Very cheap', amount: '3',
          pic: 'https://cs2.gamemodding.com/images/750x407/1aeac11c20cae6f9c2311180c6c3d1fe049dd022a7244711c11de824b6163884.jpg'
        },
        {
          name: 'Jimmy', street: '2226 ', date: '09/04/19', review: 'I am satisfied', amount: '4',
          pic: 'https://cs2.gamemodding.com/images/7ed875b245003407d6492ef5c1f323a26f01c7aa636bd01ad1d4f0e97325f23a.jpg'
        },
        {
          name: 'Jack', street: '2126', date: '23/04/19', review: 'very helpfull', amount: '5',
          pic: 'https://www.meme-arsenal.com/memes/9f8fe3a3347a11a61c9a74adcb316dbb.jpg'
        },
        {
          name: 'Jack', street: '2526', date: '27/04/19', review: 'So late ', amount: '1',
          pic: 'https://cs2.gamemodding.com/images/750x407/80897ad77fd27b1f14492a4a811d021df3f83916db60710cc52c2d74dac857d0.jpg'
        },
        {
          name: 'Jack', street: '2326', date: '11/04/19', review: 'Very helpful', amount: '5',
          pic: 'https://cs2.gamemodding.com/images/750x407/80897ad77fd27b1f14492a4a811d021df3f83916db60710cc52c2d74dac857d0.jpg'
        },
      ],
    }
  }

  componentDidMount() {

  }

  render() {
    return (
      <ReviewStyles.WrapperViewVertical>
        <Header
          leftPress={() => this.props.navigation.openDrawer()}
          HeaderText={"Feedback"}
          rightPress={()=> this.props.navigation.navigate('Notification')}
        />
        <ReviewStyles.JobList
          data={this.state.listJobs}
          keyExtractor={(item, index) => index.toString()}
          renderItem={(item,index) => (
            <ReviewStyles.CellWrapper>
              <ReviewStyles.CellRightView>
                <ReviewStyles.CellRightdetail>
                  <ReviewStyles.CellRightTitle>
                    Service Order # :{'  '}
                  </ReviewStyles.CellRightTitle>
                  {item.item.street}
                </ReviewStyles.CellRightdetail>

                <ReviewStyles.CellRightWrapper>
                  <ReviewStyles.CellRightTitle>
                    Ratting :{'  '}
                  </ReviewStyles.CellRightTitle>
                  <Rating
                  type='custom'
                  readonly={true}
                  startingValue={parseInt(item.item.amount)}
                  style={{ paddingVertical: 10 }}
                  imageSize={30}
                  ratingColor={GREEN.deafult}
                  />
                </ReviewStyles.CellRightWrapper>

              </ReviewStyles.CellRightView>
            </ReviewStyles.CellWrapper>
          )}
        />
        {this.state.detailView && <View style={{position: 'absolute', height: SCREEN.height, width: SCREEN.width}}>
          <Image style={{height: 250, width: SCREEN.width}} source={{uri: 'https://cs2.gamemodding.com/images/750x407/80897ad77fd27b1f14492a4a811d021df3f83916db60710cc52c2d74dac857d0.jpg'}} />
          </View>}
      </ReviewStyles.WrapperViewVertical>
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
)(Review);
