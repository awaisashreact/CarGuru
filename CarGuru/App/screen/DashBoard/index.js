/* eslint-disable no-undef */
import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { Alert } from 'react-native';
import { Calendar } from 'react-native-calendars';

import * as Actions from '../../redux/actions';
import DashBoardStyles from './DashBoardStyles';
import Header from '../../component/Header';
import { BLACK, GREEN, WHITE } from '../../helper/Color';

class DashBoard extends Component {

  componentDidMount() {
  }

  render() {
    return (
      <DashBoardStyles.WrapperViewVertical>
        <Header leftPress={() => this.props.navigation.openDrawer()} HeaderText={"DashBoard"} rightPress={()=> this.props.navigation.navigate('Notification')} />
        <DashBoardStyles.TopView>
          <DashBoardStyles.TopFlex1View>
            <DashBoardStyles.TopInnerView
             onPress={() => this.props.navigation.navigate("EarnJobDetail", {from: 'Earn'})}
              style={{
              shadowColor: BLACK.dark,
              shadowOffset: { width: 1, height: 1 },
              shadowOpacity: 0.2,
              shadowRadius: 1,
              elevation: 4,
              backgroundColor: WHITE.dark
            }}>
              <DashBoardStyles.TopInnerHeaderText>
                Total earning
              </DashBoardStyles.TopInnerHeaderText>
              <DashBoardStyles.TopInnerCountText >
                2200 AED
              </DashBoardStyles.TopInnerCountText>
            </DashBoardStyles.TopInnerView>
          </DashBoardStyles.TopFlex1View>
          <DashBoardStyles.TopFlex1View>
            <DashBoardStyles.TopInnerView
              onPress={() => this.props.navigation.navigate("EarnJobDetail", {from: 'Earn'})}
              style={{
              shadowColor: BLACK.dark,
              shadowOffset: { width: 1, height: 1 },
              shadowOpacity: 0.2,
              shadowRadius: 1,
              elevation: 4,
              backgroundColor: WHITE.dark
            }}>
              <DashBoardStyles.TopInnerHeaderText  onPress={() => this.props.navigation.navigate("EarnJobDetail", {from: 'Jobs'})}>
                Total jobs
              </DashBoardStyles.TopInnerHeaderText>
              <DashBoardStyles.TopInnerCountText>
                15
              </DashBoardStyles.TopInnerCountText>
            </DashBoardStyles.TopInnerView>
          </DashBoardStyles.TopFlex1View>
        </DashBoardStyles.TopView>
        <Calendar
          // Collection of dates that have to be marked. Default = {}
          onDayPress={(day) => {
            if (day.dateString === '2020-05-16' || day.dateString === '2020-05-19' || day.dateString === '2020-05-18') {
              this.props.navigation.navigate('JobDetail');
            }
            else {
              Alert.alert('There is no job');
            }
          }}
          markedDates={{
            '2020-05-16': { selected: true, marked: false, selectedColor: GREEN.deafult },
            '2020-05-19': { selected: true, marked: false, selectedColor: GREEN.deafult },
            '2020-05-18': { selected: true, marked: false, selectedColor: GREEN.deafult },
            '2012-05-16': { selected: true, marked: false, selectedColor: GREEN.deafult },
            '2012-05-17': { marked: true },
            '2012-05-18': { marked: true, dotColor: GREEN.deafult, activeOpacity: 0 },
            '2012-05-19': { disabled: true, disableTouchEvent: true }
          }}
        />
      </DashBoardStyles.WrapperViewVertical>
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
)(DashBoard);
