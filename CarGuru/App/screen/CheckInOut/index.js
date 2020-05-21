/* eslint-disable no-undef */
import React, {Component} from 'react';
import {bindActionCreators} from 'redux';
import {connect} from 'react-redux';
import Icon1 from 'react-native-vector-icons/Fontisto';

import * as Actions from '../../redux/actions';
import CheckInOutStyles from './CheckInOutStyles';
import Header from '../../component/Header';

class CheckInOut extends Component {

  componentDidMount() {
  }

  // static navigationOption = {
  //   drawerIcon = ({tintColor}) = (
  //     <Icon1 size={30} color={WHITE.dark} name={'locked'} style={{fontSize: 22, color=ORANGE.defult}}/>
  //   )
  // }

  render() {
    return (
      <CheckInOutStyles.WrapperViewVertical>
        <Header leftPress={() => this.props.navigation.openDrawer()} HeaderText={"Status"}/>
      </CheckInOutStyles.WrapperViewVertical>
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
)(CheckInOut);
