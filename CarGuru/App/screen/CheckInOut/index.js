/* eslint-disable no-undef */
import React, {Component} from 'react';
import {bindActionCreators} from 'redux';
import {connect} from 'react-redux';
import Icon1 from 'react-native-vector-icons/Fontisto';

import * as Actions from '../../redux/actions';
import CheckInOutStyles from './CheckInOutStyles';
import Header from '../../component/Header';
import { GREEN, RED} from '../../helper/Color';

class CheckInOut extends Component {
  constructor(props){
    super(props);
    this.state={
      checIn: true,
    }
  }

  componentDidMount() {
  }

  render() {
    return (
      <CheckInOutStyles.WrapperViewVertical>
        <Header leftPress={() => this.props.navigation.openDrawer()} HeaderText={"Status"} rightPress={()=> this.props.navigation.navigate('Notification')}/>
        {this.state.checIn && <CheckInOutStyles.CheckInTime style={{marginTop: 10}}>
          You are checked in from 4 hour.
        </CheckInOutStyles.CheckInTime>}
        <CheckInOutStyles.CheckInOutButton
          onPress={() => this.setState({checIn : !this.state.checIn})}
          style={{backgroundColor: this.state.checIn ? GREEN.deafult : RED.deafult }}>
          <CheckInOutStyles.CheckInButtonText>
            {this.state.checIn ? 'Check Out' : 'Check In'}
          </CheckInOutStyles.CheckInButtonText>
        </CheckInOutStyles.CheckInOutButton>
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
