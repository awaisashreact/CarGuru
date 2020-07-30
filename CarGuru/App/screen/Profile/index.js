/* eslint-disable no-undef */
import React, {Component} from 'react';
import {bindActionCreators} from 'redux';
import {connect} from 'react-redux';
import {Rating} from 'react-native-ratings';
import Icon from 'react-native-vector-icons/AntDesign';
import Icon1 from 'react-native-vector-icons/Fontisto';
import Icon2 from 'react-native-vector-icons/FontAwesome';
import Icon3 from 'react-native-vector-icons/FontAwesome5';
import Icon4 from 'react-native-vector-icons/MaterialIcons';

import * as Actions from '../../redux/actions';
import ProfileStyles from './ProfileStyles';
import Header from '../../component/Header';
import { WHITE, GREEN } from '../../helper/Color';

class Profile extends Component {

  componentDidMount() {
  }

  render() {
    return (
      <ProfileStyles.WrapperViewVertical>
        <Header leftPress={() => this.props.navigation.openDrawer()} HeaderText={"Profile"} rightPress={()=> this.props.navigation.navigate('Notification')}/>
        <ProfileStyles.ImageWrapperView>
          <ProfileStyles.InnerImage source={require('../../assets/person.jpeg')} />
        </ProfileStyles.ImageWrapperView>
        <Rating
                  type='custom'
                  showRating
                  startingValue={4}
                  style={{ paddingVertical: 10 }}
                  imageSize={30}
                  ratingColor={GREEN.deafult}
                  />
        <ProfileStyles.DetailWrapper style={{marginTop: 20}}>
        <Icon name="user" color={GREEN.deafult} size={20} />
          <ProfileStyles.TitleTextView>
            <ProfileStyles.TitleText>
              Name
            </ProfileStyles.TitleText>
          </ProfileStyles.TitleTextView>
          <ProfileStyles.DescriptionView>
            <ProfileStyles.DescriptionText>
              Muhammad Ali
            </ProfileStyles.DescriptionText>
          </ProfileStyles.DescriptionView>
        </ProfileStyles.DetailWrapper>
        <ProfileStyles.DetailWrapper>
        <Icon1 name="email" color={GREEN.deafult} size={20} />
          <ProfileStyles.TitleTextView>
            <ProfileStyles.TitleText>
              Email
            </ProfileStyles.TitleText>
          </ProfileStyles.TitleTextView>
          <ProfileStyles.DescriptionView>
            <ProfileStyles.DescriptionText>
              Muhammad@gmail.com
            </ProfileStyles.DescriptionText>
          </ProfileStyles.DescriptionView>
        </ProfileStyles.DetailWrapper>
        <ProfileStyles.DetailWrapper>
            <Icon2 name="phone" color={GREEN.deafult} size={20} />
          <ProfileStyles.TitleTextView>
            <ProfileStyles.TitleText>
              Phone
            </ProfileStyles.TitleText>
          </ProfileStyles.TitleTextView>
          <ProfileStyles.DescriptionView>
            <ProfileStyles.DescriptionText>
              +923124808897
            </ProfileStyles.DescriptionText>
          </ProfileStyles.DescriptionView>
        </ProfileStyles.DetailWrapper>
        <ProfileStyles.DetailWrapper>
        <Icon3 name="city" color={GREEN.deafult} size={20} />
          <ProfileStyles.TitleTextView>
            <ProfileStyles.TitleText>
              City
            </ProfileStyles.TitleText>
          </ProfileStyles.TitleTextView>
          <ProfileStyles.DescriptionView>
            <ProfileStyles.DescriptionText>
              Lahore
            </ProfileStyles.DescriptionText>
          </ProfileStyles.DescriptionView>
        </ProfileStyles.DetailWrapper>
        <ProfileStyles.DetailWrapper>
        <Icon name="user" color={GREEN.deafult} size={20} />
          <ProfileStyles.TitleTextView>
            <ProfileStyles.TitleText>
              Gender
            </ProfileStyles.TitleText>
          </ProfileStyles.TitleTextView>
          <ProfileStyles.DescriptionView>
            <ProfileStyles.DescriptionText>
              Male
            </ProfileStyles.DescriptionText>
          </ProfileStyles.DescriptionView>
        </ProfileStyles.DetailWrapper>
        <ProfileStyles.DetailWrapper>
            <Icon2 name="map-marker" color={GREEN.deafult} size={20} />
          <ProfileStyles.TitleTextView>
            <ProfileStyles.TitleText>
              Address
            </ProfileStyles.TitleText>
          </ProfileStyles.TitleTextView>
          <ProfileStyles.DescriptionView>
            <ProfileStyles.DescriptionText>
              wahdat colony, wahdat road Lahore
            </ProfileStyles.DescriptionText>
          </ProfileStyles.DescriptionView>
        </ProfileStyles.DetailWrapper>
        <ProfileStyles.DetailWrapper>
            <Icon4 name="payment" color={GREEN.deafult} size={20} />
          <ProfileStyles.TitleTextView>
            <ProfileStyles.TitleText>
              Service fee
            </ProfileStyles.TitleText>
          </ProfileStyles.TitleTextView>
          <ProfileStyles.DescriptionView>
            <ProfileStyles.ServiceFeeDetail placeholder={'20'} />
          </ProfileStyles.DescriptionView>
        </ProfileStyles.DetailWrapper>
      </ProfileStyles.WrapperViewVertical>
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
)(Profile);
