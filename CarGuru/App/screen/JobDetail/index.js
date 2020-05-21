/* eslint-disable no-undef */
import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import Header from '../../component/Header';

import * as Actions from '../../redux/actions';
import JobDetailStyles from './JobDetailStyles';

class JobDetail extends Component {
  constructor() {
    super();
    this.state = {
      listJobs: [
        {
          name: 'Jack', street: '2826  Angus Road', city: 'New York', zip_code: '10014', phone: '288-457-6832',
          pic: 'https://cs2.gamemodding.com/images/750x407/80897ad77fd27b1f14492a4a811d021df3f83916db60710cc52c2d74dac857d0.jpg'
        },
        {
          name: 'Johnson', street: '2026  Angus Road', city: 'New York', zip_code: '10014', phone: '277-457-6832',
          pic: 'https://cs2.gamemodding.com/images/750x407/1aeac11c20cae6f9c2311180c6c3d1fe049dd022a7244711c11de824b6163884.jpg'
        },
        {
          name: 'Jimmy', street: '2226  Angus Road', city: 'New York', zip_code: '10014', phone: '266-457-6832',
          pic: 'https://cs2.gamemodding.com/images/7ed875b245003407d6492ef5c1f323a26f01c7aa636bd01ad1d4f0e97325f23a.jpg'
        },
        {
          name: 'Jack', street: '2126  Angus Road', city: 'New York', zip_code: '10014', phone: '255-457-6832',
          pic: 'https://www.meme-arsenal.com/memes/9f8fe3a3347a11a61c9a74adcb316dbb.jpg'
        },
        {
          name: 'Jack', street: '2526  Angus Road', city: 'New York', zip_code: '10014', phone: '243-457-6832',
          pic: 'https://cs2.gamemodding.com/images/750x407/80897ad77fd27b1f14492a4a811d021df3f83916db60710cc52c2d74dac857d0.jpg'
        },
        {
          name: 'Jack', street: '2326  Angus Road', city: 'New York', zip_code: '10014', phone: '231-457-6832',
          pic: 'https://cs2.gamemodding.com/images/750x407/80897ad77fd27b1f14492a4a811d021df3f83916db60710cc52c2d74dac857d0.jpg'
        },
      ]
    }
  }

  componentDidMount() {

  }

  render() {
    return (
      <JobDetailStyles.WrapperViewVertical>
        <Header
          leftType={'text'}
          leftText={'Back'}
          leftPress={() => this.props.navigation.pop()}
          HeaderText={"Jobs"}
          rightType={'text'}
        />
        <JobDetailStyles.JobList
          data={this.state.listJobs}
          keyExtractor={(item, index) => index.toString()}
          renderItem={(item,index) => (
            <JobDetailStyles.CellWrapper>
              <JobDetailStyles.CellLeftView>
                <JobDetailStyles.CellLeftInnerImage source={{uri: item.item.pic}}/>
              </JobDetailStyles.CellLeftView>
              <JobDetailStyles.CellRightView>
                <JobDetailStyles.CellRightdetail>
                  <JobDetailStyles.CellRightTitle>
                    Name :{'  '}
                  </JobDetailStyles.CellRightTitle>
                  {item.item.name}
                </JobDetailStyles.CellRightdetail>

                <JobDetailStyles.CellRightdetail>
                  <JobDetailStyles.CellRightTitle>
                    Street :{'  '}
                  </JobDetailStyles.CellRightTitle>
                  {item.item.street}
                </JobDetailStyles.CellRightdetail>

                <JobDetailStyles.CellRightdetail>
                  <JobDetailStyles.CellRightTitle>
                    City :{'  '}
                  </JobDetailStyles.CellRightTitle>
                  {item.item.city}
                </JobDetailStyles.CellRightdetail>

                <JobDetailStyles.CellRightdetail>
                  <JobDetailStyles.CellRightTitle>
                    Zip code :{'  '}
                  </JobDetailStyles.CellRightTitle>
                  {item.item.zip_code}
                </JobDetailStyles.CellRightdetail>

                <JobDetailStyles.CellRightdetail>
                  <JobDetailStyles.CellRightTitle>
                    Phone no :{'  '}
                  </JobDetailStyles.CellRightTitle>
                  {item.item.phone}
                </JobDetailStyles.CellRightdetail>
              </JobDetailStyles.CellRightView>
            </JobDetailStyles.CellWrapper>
          )}
        />
      </JobDetailStyles.WrapperViewVertical>
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
)(JobDetail);
