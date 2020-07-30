/* eslint-disable no-undef */
import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import Header from '../../component/Header';
import { View, Image, Text, ScrollView } from 'react-native';

import * as Actions from '../../redux/actions';
import InvoiceStyles from './InvoiceStyles';
import { SCREEN } from '../../helper/Constant';
import { WHITE } from '../../helper/Color';

class Invoice extends Component {
  constructor() {
    super();
    this.state = {
      detailView: false,
      listJobs: [
        {
          name: 'Jack', street: '2826 ', date: '04/04/19', zip_code: '10014', amount: '400 AED',
          pic: 'https://cs2.gamemodding.com/images/750x407/80897ad77fd27b1f14492a4a811d021df3f83916db60710cc52c2d74dac857d0.jpg'
        },
        {
          name: 'Johnson', street: '2026 ', date: '05/04/19', zip_code: '10014', amount: '300 AED',
          pic: 'https://cs2.gamemodding.com/images/750x407/1aeac11c20cae6f9c2311180c6c3d1fe049dd022a7244711c11de824b6163884.jpg'
        },
        {
          name: 'Jimmy', street: '2226 ', date: '09/04/19', zip_code: '10014', amount: '30 AED',
          pic: 'https://cs2.gamemodding.com/images/7ed875b245003407d6492ef5c1f323a26f01c7aa636bd01ad1d4f0e97325f23a.jpg'
        },
        {
          name: 'Jack', street: '2126', date: '23/04/19', zip_code: '10014', amount: '100 AED',
          pic: 'https://www.meme-arsenal.com/memes/9f8fe3a3347a11a61c9a74adcb316dbb.jpg'
        },
        {
          name: 'Jack', street: '2526', date: '27/04/19', zip_code: '10014', amount: '1000 AED',
          pic: 'https://cs2.gamemodding.com/images/750x407/80897ad77fd27b1f14492a4a811d021df3f83916db60710cc52c2d74dac857d0.jpg'
        },
        {
          name: 'Jack', street: '2326', date: '11/04/19', zip_code: '10014', amount: '90 AED',
          pic: 'https://cs2.gamemodding.com/images/750x407/80897ad77fd27b1f14492a4a811d021df3f83916db60710cc52c2d74dac857d0.jpg'
        },
      ],
    }
  }

  componentDidMount() {

  }

  render() {
    return (
      <InvoiceStyles.WrapperViewVertical>
        <Header
          leftPress={() => this.props.navigation.openDrawer()}
          HeaderText={"Invoice"}
          rightPress={() => this.props.navigation.navigate('Notification')}
        />
        <InvoiceStyles.JobList
          data={this.state.listJobs}
          keyExtractor={(item, index) => index.toString()}
          renderItem={(item, index) => (
            <InvoiceStyles.CellWrapper onPress={() => this.setState({ detailView: true })}>
              <InvoiceStyles.CellRightView>
                <InvoiceStyles.CellRightdetail>
                  <InvoiceStyles.CellRightTitle>
                    Name :{'  '}
                  </InvoiceStyles.CellRightTitle>
                  {item.item.name}
                </InvoiceStyles.CellRightdetail>

                <InvoiceStyles.CellRightdetail>
                  <InvoiceStyles.CellRightTitle>
                    Service order no :{'  '}
                  </InvoiceStyles.CellRightTitle>
                  {item.item.street}
                </InvoiceStyles.CellRightdetail>

                <InvoiceStyles.CellRightdetail>
                  <InvoiceStyles.CellRightTitle>
                    Vehicle no :{'  '}
                  </InvoiceStyles.CellRightTitle>
                  {item.item.zip_code}
                </InvoiceStyles.CellRightdetail>

                <InvoiceStyles.CellRightdetail>
                  <InvoiceStyles.CellRightTitle>
                    Invoice Date :{'  '}
                  </InvoiceStyles.CellRightTitle>
                  {item.item.date}
                </InvoiceStyles.CellRightdetail>

                <InvoiceStyles.CellRightdetail>
                  <InvoiceStyles.CellRightTitle>
                    Amount :{'  '}
                  </InvoiceStyles.CellRightTitle>
                  {item.item.amount}
                </InvoiceStyles.CellRightdetail>
              </InvoiceStyles.CellRightView>
            </InvoiceStyles.CellWrapper>
          )}
        />
        {this.state.detailView &&
          <View style={{ position: 'absolute', height: SCREEN.height, width: SCREEN.width, backgroundColor: WHITE.dark }}>
            <Header
              leftType={'text'}
              leftText={'Back'}
              leftPress={() => this.setState({ detailView: false })}
              HeaderText={"Invoice Detail"}
              rightType={'text'}
            />
            <ScrollView bounces={false}>
              <View style={{ height: 44, width: SCREEN.width - 20, alignSelf: 'center', marginTop: 10, backgroundColor: WHITE.dark, justifyContent: 'center', shadowColor: '#000',shadowOffset: {width: 0,height: 1,},shadowOpacity: 0.3,shadowRadius: 4,elevation: 7 }}>
                <Text style={{ fontFamily: 'Helvetica', fontSize: 15, paddingLeft: 10 }}>
                  Customer Detail
                 </Text>
              </View>

              <View style={{ marginTop: 10, height: 44, width: SCREEN.width - 30, alignSelf: "center", justifyContent: 'center' }}>
                <Text style={{ fontSize: 15, fontFamily: 'Helvetica' }}>
                  Name
                     </Text>
                <Text style={{ fontSize: 12, fontFamily: 'Helvetica', position: 'absolute', right: 5 }}>
                  John
                      </Text>
              </View>

              <View style={{ marginTop: 10, height: 44, width: SCREEN.width - 30, alignSelf: "center", justifyContent: 'center' }}>
                <Text style={{ fontSize: 15, fontFamily: 'Helvetica' }}>
                  Email
              </Text>
                <Text style={{ fontSize: 12,fontFamily: 'Helvetica', position: 'absolute', right: 5 }}>
                  John3gmail.com
              </Text>
              </View>

              <View style={{ marginTop: 10, height: 44, width: SCREEN.width - 30, alignSelf: "center", justifyContent: 'center' }}>
                <Text style={{ fontSize: 15, fontFamily: 'Helvetica' }}>
                  Contact
              </Text>
                <Text style={{ fontSize: 12,fontFamily: 'Helvetica', position: 'absolute', right: 5 }}>
                  875-753-522
              </Text>
              </View>

              <View style={{ marginTop: 10, height: 44, width: SCREEN.width - 30, alignSelf: "center", justifyContent: 'center' }}>
                <Text style={{ fontSize: 15, fontFamily: 'Helvetica' }}>
                  Mulkia #
              </Text>
                <Text style={{ fontSize: 12, fontFamily: 'Helvetica', position: 'absolute', right: 5 }}>
                  abc-457e3
              </Text>
              </View>
              <View style={{ height: 44, width: SCREEN.width - 20, alignSelf: 'center', marginTop: 10, backgroundColor: WHITE.dark, justifyContent: 'center', shadowColor: '#000',shadowOffset: {width: 0,height: 1,},shadowOpacity: 0.3,shadowRadius: 4,elevation: 7 }}>
                <Text style={{ fontFamily: 'Helvetica', fontSize: 15, paddingLeft: 10 }}>
                  Vehicle Detail
                 </Text>
              </View>
              <View style={{ marginTop: 10, height: 44, width: SCREEN.width - 30, alignSelf: "center", justifyContent: 'center' }}>
              <Text style={{ fontSize: 15, fontFamily: 'Helvetica' }}>
                        Make
                     </Text>
                      <Text style={{ fontSize: 12, fontFamily: 'Helvetica', position: 'absolute', right: 5 }}>
                        Toyota
                      </Text>
                    </View>

                    <View style={{ marginTop: 10, height: 44, width: SCREEN.width - 30, alignSelf: "center", justifyContent: 'center' }}>
                      <Text style={{ fontSize: 15, fontFamily: 'Helvetica' }}>
                        Model
                   </Text>
                      <Text style={{ fontSize: 12, fontFamily: 'Helvetica', position: 'absolute', right: 5 }}>
                        Corola
                      </Text>
                    </View>
                    <View style={{ marginTop: 10, height: 44, width: SCREEN.width - 30, alignSelf: "center", justifyContent: 'center' }}>
                      <Text style={{ fontSize: 15, fontFamily: 'Helvetica' }}>
                        Year
                   </Text>
                      <Text style={{ fontSize: 12, position: 'absolute', right: 5, fontFamily: 'Helvetica' }}>
                        2017
                      </Text>
                    </View>

                    <View style={{ marginTop: 10, height: 44, width: SCREEN.width - 30, alignSelf: "center", justifyContent: 'center' }}>
                      <Text style={{ fontSize: 15, fontFamily: 'Helvetica' }}>
                        Vehicle No.
                     </Text>
                      <Text style={{ fontSize: 12, fontFamily: 'Helvetica', position: 'absolute', right: 5 }}>
                        6783
                      </Text>
                    </View>
              

              <View style={{ height: 44, width: SCREEN.width - 20, alignSelf: 'center', marginTop: 10, backgroundColor: WHITE.dark, justifyContent: 'center', shadowColor: '#000',shadowOffset: {width: 0,height: 1,},shadowOpacity: 0.3,shadowRadius: 4,elevation: 7 }}>
                <Text style={{ fontFamily: 'Helvetica', fontSize: 15, paddingLeft: 10 }}>
                  Service Detail
                 </Text>
              </View>

              <View style={{ marginTop: 10, height: 44, width: SCREEN.width - 30, alignSelf: "center", justifyContent: 'center' }}>
                <Text style={{ fontSize: 15, fontFamily: 'Helvetica' }}>
                  Tyre Change
                     </Text>
                <Text style={{ fontSize: 12, fontFamily: 'Helvetica', position: 'absolute', right: 5 }}>
                  150 AED
                      </Text>
              </View>

              <View style={{ marginTop: 10, height: 44, width: SCREEN.width - 30, alignSelf: "center", justifyContent: 'center' }}>
                <Text style={{ fontSize: 15, fontFamily: 'Helvetica' }}>
                  Battery Change
              </Text>
                <Text style={{ fontSize: 12, fontFamily: 'Helvetica', position: 'absolute', right: 5 }}>
                  200 AED
              </Text>
              </View>

              <View style={{ marginTop: 15, height: 44, width: SCREEN.width - 30, alignSelf: "center", justifyContent: 'center' }}>
                <Text style={{ fontSize: 16, fontFamily: 'Helvetica', fontStyle: 'italic'}}>
                  Total Price
              </Text>
                <Text style={{ fontSize: 13, fontFamily: 'Helvetica', position: 'absolute', right: 5, fontWeight: 'bold' }}>
                  350 AED
              </Text>
              </View>
            </ScrollView>
          </View>}
      </InvoiceStyles.WrapperViewVertical>
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
