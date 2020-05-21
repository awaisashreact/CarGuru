/* eslint-disable no-undef */
import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { Alert } from 'react-native';
import { Calendar } from 'react-native-calendars';

import * as Actions from '../../redux/actions';
import DashBoardStyles from './DashBoardStyles';
import Header from '../../component/Header';
import { BLACK } from '../../helper/Color';

class DashBoard extends Component {

  componentDidMount() {
  }

  render() {
    return (
      <DashBoardStyles.WrapperViewVertical>
        <Header leftPress={() => this.props.navigation.openDrawer()} HeaderText={"DashBoard"} />
        <DashBoardStyles.TopView>
          <DashBoardStyles.TopFlex1View>
            <DashBoardStyles.TopInnerView style={{
              shadowColor: BLACK.dark,
              shadowOffset: { width: 0, height: 0 },
              shadowOpacity: 0.08,
              shadowRadius: 1,
              elevation: 4,
            }}>
              <DashBoardStyles.TopInnerHeaderText>
                Total earning
              </DashBoardStyles.TopInnerHeaderText>
              <DashBoardStyles.TopInnerCountText>
                2200$
              </DashBoardStyles.TopInnerCountText>
            </DashBoardStyles.TopInnerView>
          </DashBoardStyles.TopFlex1View>
          <DashBoardStyles.TopFlex1View>
            <DashBoardStyles.TopInnerView style={{
              shadowColor: BLACK.dark,
              shadowOffset: { width: 0, height: 0 },
              shadowOpacity: 0.08,
              shadowRadius: 1,
              elevation: 4,
            }}>
              <DashBoardStyles.TopInnerHeaderText>
                Total jobs
              </DashBoardStyles.TopInnerHeaderText>
              <DashBoardStyles.TopInnerCountText>
                150$
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
            '2020-05-16': { selected: true, marked: false, selectedColor: 'red' },
            '2020-05-19': { selected: true, marked: false, selectedColor: 'red' },
            '2020-05-18': { selected: true, marked: false, selectedColor: 'red' },
            '2012-05-16': { selected: true, marked: false, selectedColor: 'red' },
            '2012-05-17': { marked: true },
            '2012-05-18': { marked: true, dotColor: 'red', activeOpacity: 0 },
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
