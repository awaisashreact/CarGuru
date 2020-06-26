/* eslint-disable no-undef */
import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import Header from '../../component/Header';

import * as Actions from '../../redux/actions';
import EarnJobsDetailStyles from './EarnJobsDetailStyles';

class EarnJobsDetail extends Component {
  constructor() {
    super();
    this.state = {
      listJobs: [
        {
          name: 'Jack', street: '2826 ', city: 'New York', zip_code: '14 AED', phone: '288-457-6832',
          pic: 'https://cs2.gamemodding.com/images/750x407/80897ad77fd27b1f14492a4a811d021df3f83916db60710cc52c2d74dac857d0.jpg'
        },
        {
          name: 'Johnson', street: '2026 ', city: 'New York', zip_code: '104 AED', phone: '277-457-6832',
          pic: 'https://cs2.gamemodding.com/images/750x407/1aeac11c20cae6f9c2311180c6c3d1fe049dd022a7244711c11de824b6163884.jpg'
        },
        {
          name: 'Jimmy', street: '2226', city: 'New York', zip_code: '114 AED', phone: '266-457-6832',
          pic: 'https://cs2.gamemodding.com/images/7ed875b245003407d6492ef5c1f323a26f01c7aa636bd01ad1d4f0e97325f23a.jpg'
        },
        {
          name: 'Jack', street: '2126 ', city: 'New York', zip_code: '114 AED', phone: '255-457-6832',
          pic: 'https://www.meme-arsenal.com/memes/9f8fe3a3347a11a61c9a74adcb316dbb.jpg'
        },
        {
          name: 'Jack', street: '2526 ', city: 'New York', zip_code: '116 AED', phone: '243-457-6832',
          pic: 'https://cs2.gamemodding.com/images/750x407/80897ad77fd27b1f14492a4a811d021df3f83916db60710cc52c2d74dac857d0.jpg'
        },
        {
          name: 'Jack', street: '2326', city: 'New York', zip_code: '124 AED', phone: '231-457-6832',
          pic: 'https://cs2.gamemodding.com/images/750x407/80897ad77fd27b1f14492a4a811d021df3f83916db60710cc52c2d74dac857d0.jpg'
        },
      ]
    }
  }

  componentDidMount() {

  }

  render() {
    return (
      <EarnJobsDetailStyles.WrapperViewVertical>
        <Header
          leftType={'text'}
          leftText={'Back'}
          leftPress={() => this.props.navigation.pop()}
          HeaderText={"Jobs"}
          rightType={'text'}
        />
        <EarnJobsDetailStyles.JobList
          data={this.state.listJobs}
          keyExtractor={(item, index) => index.toString()}
          renderItem={(item,index) => (
            <EarnJobsDetailStyles.CellWrapper>
              <EarnJobsDetailStyles.CellRightView>
                <EarnJobsDetailStyles.CellRightdetail>
                  <EarnJobsDetailStyles.CellRightTitle>
                    Service Order # :{'  '}
                  </EarnJobsDetailStyles.CellRightTitle>
                  {item.item.street}
                </EarnJobsDetailStyles.CellRightdetail>

                <EarnJobsDetailStyles.CellRightdetail>
                  <EarnJobsDetailStyles.CellRightTitle>
                  Vehicle Number :{'  '}
                  </EarnJobsDetailStyles.CellRightTitle>
                  {item.item.street}
                </EarnJobsDetailStyles.CellRightdetail>

                <EarnJobsDetailStyles.CellRightdetail>
                  <EarnJobsDetailStyles.CellRightTitle>
                    Invoice Price  :{'  '}
                  </EarnJobsDetailStyles.CellRightTitle>
                  {item.item.zip_code}
                </EarnJobsDetailStyles.CellRightdetail>
              </EarnJobsDetailStyles.CellRightView>
            </EarnJobsDetailStyles.CellWrapper>
          )}
        />
      </EarnJobsDetailStyles.WrapperViewVertical>
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
)(EarnJobsDetail);
