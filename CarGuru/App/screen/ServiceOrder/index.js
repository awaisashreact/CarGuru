/* eslint-disable no-undef */
import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import Header from '../../component/Header';
import { View, Image, ScrollView, TouchableOpacity, Text } from 'react-native';
import Icon from 'react-native-vector-icons/AntDesign';

import * as Actions from '../../redux/actions';
import ServiceOrderStyles from './ServiceOrderStyles';
import { SCREEN, isIphoneXorAbove } from '../../helper/Constant';
import { WHITE, GREEN, BLACK } from '../../helper/Color';

class JobDetail extends Component {
  constructor() {
    super();
    this.state = {
      detailView: false,
      openCustomerDetail: true,
      openVehicalDetail: false,
      openHistory: false,
      serviceSelected: true,
      selectedObj: {},
      listJobs: [
        {
          name: 'Jack', street: '2826  Angus Road', city: 'New York', zip_code: '10014', phone: '288-457-6832',
          pic: 'https://bacp-web-live-endpoint.azureedge.net/cache/c/0/5/1/6/9/c05169ac9de9665c866f2a667552e5ed5d4f4a8e.jpg'
        },
        {
          name: 'Johnson', street: '2026  Angus Road', city: 'New York', zip_code: '10014', phone: '277-457-6832',
          pic: 'https://about.fb.com/wp-content/uploads/2019/11/CompanyInfo_OurCulture_Alberto_Image-1.jpg?fit=890%2C668'
        },
        {
          name: 'Jimmy', street: '2226  Angus Road', city: 'New York', zip_code: '10014', phone: '266-457-6832',
          pic: 'https://tvguide1.cbsistatic.com/i/2018/02/10/3a534e4d-ffa5-402d-b68d-cb0c7368e6af/1d544b6e110f4394a28bf5db8434a840/180209-personofinterest.jpg'
        },
        {
          name: 'Jack', street: '2126  Angus Road', city: 'New York', zip_code: '10014', phone: '255-457-6832',
          pic: 'https://bacp-web-live-endpoint.azureedge.net/cache/c/0/5/1/6/9/c05169ac9de9665c866f2a667552e5ed5d4f4a8e.jpg'
        },
        {
          name: 'Jack', street: '2526  Angus Road', city: 'New York', zip_code: '10014', phone: '243-457-6832',
          pic: 'https://tvguide1.cbsistatic.com/i/2018/02/10/3a534e4d-ffa5-402d-b68d-cb0c7368e6af/1d544b6e110f4394a28bf5db8434a840/180209-personofinterest.jpg'
        },
        {
          name: 'Jack', street: '2326  Angus Road', city: 'New York', zip_code: '10014', phone: '231-457-6832',
          pic: 'https://about.fb.com/wp-content/uploads/2019/11/CompanyInfo_OurCulture_Alberto_Image-1.jpg?fit=890%2C668'
        },
      ],
    }
  }

  componentDidMount() {

  }

  render() {
    return (
      <ServiceOrderStyles.WrapperViewVertical>
        <Header
          leftPress={() => this.props.navigation.openDrawer()}
          HeaderText={"Service Order"}
          rightPress={() => this.props.navigation.navigate('Notification')}
        />
        <ServiceOrderStyles.JobList
          data={this.state.listJobs}
          keyExtractor={(item, index) => index.toString()}
          renderItem={(item, index) => (
            <ServiceOrderStyles.CellWrapper onPress={() => this.setState({ detailView: true, selectedObj: item.item })}>
              <ServiceOrderStyles.CellLeftView>
                <ServiceOrderStyles.CellLeftInnerImage source={{ uri: item.item.pic }} />
              </ServiceOrderStyles.CellLeftView>
              <ServiceOrderStyles.CellRightView>
                <ServiceOrderStyles.CellRightdetail>
                  <ServiceOrderStyles.CellRightTitle>
                    Name :{'  '}
                  </ServiceOrderStyles.CellRightTitle>
                  {item.item.name}
                </ServiceOrderStyles.CellRightdetail>

                <ServiceOrderStyles.CellRightdetail>
                  <ServiceOrderStyles.CellRightTitle>
                    Street :{'  '}
                  </ServiceOrderStyles.CellRightTitle>
                  {item.item.street}
                </ServiceOrderStyles.CellRightdetail>

                <ServiceOrderStyles.CellRightdetail>
                  <ServiceOrderStyles.CellRightTitle>
                    City :{'  '}
                  </ServiceOrderStyles.CellRightTitle>
                  {item.item.city}
                </ServiceOrderStyles.CellRightdetail>

                <ServiceOrderStyles.CellRightdetail>
                  <ServiceOrderStyles.CellRightTitle>
                    Zip code :{'  '}
                  </ServiceOrderStyles.CellRightTitle>
                  {item.item.zip_code}
                </ServiceOrderStyles.CellRightdetail>

                <ServiceOrderStyles.CellRightdetail>
                  <ServiceOrderStyles.CellRightTitle>
                    Phone no :{'  '}
                  </ServiceOrderStyles.CellRightTitle>
                  {item.item.phone}
                </ServiceOrderStyles.CellRightdetail>
              </ServiceOrderStyles.CellRightView>
            </ServiceOrderStyles.CellWrapper>
          )}
        />
        {this.state.detailView && <View style={{ position: 'absolute', height: SCREEN.height, width: SCREEN.width, backgroundColor: WHITE.dark }}>
          <View style={{ height: isIphoneXorAbove ? 90 : 60, width: SCREEN.width, flexDirection: "row", backgroundColor: GREEN.deafult }}>
            <View style={{ flex: 1, backgroundColor: GREEN.deafult, borderRightColor: WHITE.dark, borderRightWidth: 1, justifyContent: 'center', alignItems: 'center' }}>
              <Text style={{ color: this.state.serviceSelected ? WHITE.dark : WHITE.transParent, fontSize: 15, fontFamily: 'Helvetica' }} onPress={() => this.setState({ serviceSelected: true })}>
                Service
                  </Text>
            </View>
            <View style={{ flex: 1, backgroundColor: GREEN.deafult, justifyContent: 'center', alignItems: 'center' }}>
              <Text style={{ color: !this.state.serviceSelected ? WHITE.dark : WHITE.transParent, fontSize: 15, fontFamily: 'Helvetica'  }} onPress={() => this.setState({ serviceSelected: false })}>
                Customer
                  </Text>
            </View>
          </View>
          {this.state.serviceSelected ?
            <View style={{ marginTop: 10, marginHorizontal: 10 }}>
              <Text style={{ fontSize: 15, fontFamily: 'Helvetica'  }}>
                Service Type
            </Text>
              <Text style={{ marginTop: 10, borderBottomWidth: 1, fontSize: 12, paddingLeft: 5, fontFamily: 'Helvetica'  }}>
                1    Battery Charge{'\n'}
              </Text>
              <Text style={{ marginTop: 1, borderBottomWidth: 1, fontSize: 12, paddingLeft: 5, fontFamily: 'Helvetica'  }}>
                2    Tyre replacement{'\n'}
              </Text>
              <View style={{ marginTop: 10, height: 44, width: SCREEN.width - 30, alignSelf: "center", justifyContent: 'center' }}>
                <Text style={{ fontSize: 15, fontFamily: 'Helvetica'  }}>
                  Product Cost
              </Text>
                <Text style={{ fontSize: 12, position: 'absolute', right: 5, fontFamily: 'Helvetica'  }}>
                  $200
              </Text>
              </View>
              <View style={{ marginTop: 10, height: 44, width: SCREEN.width - 30, alignSelf: "center", justifyContent: 'center' }}>
                <Text style={{ fontSize: 15, fontFamily: 'Helvetica'  }}>
                  Margin
              </Text>
                <Text style={{ fontSize: 12, position: 'absolute', right: 5, fontFamily: 'Helvetica'  }}>
                  10%
              </Text>
              </View>
              <View style={{ marginTop: 10, height: 44, width: SCREEN.width - 30, alignSelf: "center", justifyContent: 'center' }}>
                <Text style={{ fontSize: 15, fontFamily: 'Helvetica'  }}>
                  Service Charges
              </Text>
                <Text style={{ fontSize: 12, fontFamily: 'Helvetica' , position: 'absolute', right: 5 }}>
                  $50
              </Text>
              </View>
              <View style={{ marginTop: 20, height: 44, width: SCREEN.width - 30, alignSelf: "center", justifyContent: 'center' }}>
                <Text style={{ fontSize: 15, fontStyle: 'italic', fontFamily: 'Helvetica'  }}>
                  TOTAL PRICE
              </Text>
                <Text style={{ fontSize: 14, fontFamily: 'Helvetica' , position: 'absolute', right: 5 }}>
                  $230.00
              </Text>
              </View>

              <ServiceOrderStyles.ButtonWrapperView>
                <ServiceOrderStyles.Flex1View>
                  <ServiceOrderStyles.InnerButton>
                    <ServiceOrderStyles.InnerButtonText>
                      CREATE INVOICE
                  </ServiceOrderStyles.InnerButtonText>
                  </ServiceOrderStyles.InnerButton>
                </ServiceOrderStyles.Flex1View>
                <ServiceOrderStyles.Flex1View>
                  <ServiceOrderStyles.InnerButton>
                    <ServiceOrderStyles.InnerButtonText>
                      COMPLETE JOB
                  </ServiceOrderStyles.InnerButtonText>
                  </ServiceOrderStyles.InnerButton>
                </ServiceOrderStyles.Flex1View>
              </ServiceOrderStyles.ButtonWrapperView>
              <View style={{ marginTop: 10, alignSelf: "center" }}>
                <TouchableOpacity
                  onPress={() => this.setState({ detailView: false })}
                  style={{ backgroundColor: BLACK.darkLight, height: 44, width: SCREEN.width / 2.5, justifyContent: 'center', alignItems: 'center' }}>
                  <ServiceOrderStyles.InnerButtonText>
                    Back
                  </ServiceOrderStyles.InnerButtonText>
                </TouchableOpacity>
              </View>

            </View> :
            <View>
              <ScrollView bounces={false}>

                <TouchableOpacity
                  onPress={() => this.setState({ openCustomerDetail: !this.state.openCustomerDetail })}
                  activeOpacity={1}
                  style={{ marginTop: 10, height: 54, width: SCREEN.width - 20, alignSelf: "center", backgroundColor: WHITE.dark, justifyContent: 'center', shadowColor: '#000',shadowOffset: {width: 0,height: 1,},shadowOpacity: 0.3,shadowRadius: 4,elevation: 7}}>
                  <Text style={{ marginLeft: 10, fontSize: 15, fontFamily: 'Helvetica'  }}>
                    Customer Detail
                 </Text>
                  <View style={{ position: 'absolute', right: 10, height: 20, width: 20, justifyContent: "center" }}>
                    {this.state.openCustomerDetail ? <Icon name={"caretdown"} color={BLACK.dark} size={20} /> :
                      <Icon name={"caretright"} color={BLACK.dark} size={20} />}
                  </View>
                </TouchableOpacity>
                {this.state.openCustomerDetail &&
                  <View>

                    <View style={{ marginTop: 10, height: 44, width: SCREEN.width - 30, alignSelf: "center", justifyContent: 'center' }}>
                      <Text style={{ fontSize: 15, fontFamily: 'Helvetica'  }}>
                        First Name
              </Text>
                      <Text style={{ fontSize: 12, position: 'absolute', right: 5, fontFamily: 'Helvetica'  }}>
                        John
              </Text>
                    </View>

                    <View style={{ marginTop: 10, height: 44, width: SCREEN.width - 30, alignSelf: "center", justifyContent: 'center' }}>
                      <Text style={{ fontSize: 15, fontFamily: 'Helvetica'  }}>
                        Last Name
              </Text>
                      <Text style={{ fontSize: 12, position: 'absolute', right: 5, fontFamily: 'Helvetica'  }}>
                        Vick
              </Text>
                    </View>

                    <View style={{ marginTop: 10, height: 44, width: SCREEN.width - 30, alignSelf: "center", justifyContent: 'center' }}>
                      <Text style={{ fontSize: 15, fontFamily: 'Helvetica'  }}>
                        Contact No.
              </Text>
                      <Text style={{ fontSize: 12, position: 'absolute', right: 5, fontFamily: 'Helvetica'  }}>
                        +9325641431
              </Text>
                    </View>
                    <View style={{ marginTop: 10, height: 44, width: SCREEN.width - 30, alignSelf: "center", justifyContent: 'center' }}>
                      <Text style={{ fontSize: 15, fontFamily: 'Helvetica'  }}>
                        Mulkia No.
              </Text>
                      <Text style={{ fontSize: 12, position: 'absolute', right: 5, fontFamily: 'Helvetica'  }}>
                        256-414-313
              </Text>
                    </View>
                  </View>}

                <TouchableOpacity
                  onPress={() => this.setState({ openVehicalDetail: !this.state.openVehicalDetail })}
                  activeOpacity={1}
                  style={{ marginTop: 10, height: 54, width: SCREEN.width - 20, alignSelf: "center", backgroundColor: WHITE.dark, justifyContent: 'center', shadowColor: '#000',shadowOffset: {width: 0,height: 1,},shadowOpacity: 0.3,shadowRadius: 4,elevation: 7 }}>
                  <Text style={{ marginLeft: 10, fontSize: 15, fontFamily: 'Helvetica'  }}>
                    Vehicle Detail
                 </Text>
                  <View style={{ position: 'absolute', right: 10, height: 20, width: 20, justifyContent: "center" }}>
                    {this.state.openVehicalDetail ? <Icon name={"caretdown"} color={BLACK.dark} size={20} /> :
                      <Icon name={"caretright"} color={BLACK.dark} size={20} />}
                  </View>
                </TouchableOpacity>
                {this.state.openVehicalDetail &&
                  <View>

                    <View style={{ marginTop: 10, height: 44, width: SCREEN.width - 30, alignSelf: "center", justifyContent: 'center' }}>
                      <Text style={{ fontSize: 15, fontFamily: 'Helvetica'  }}>
                        Make
                     </Text>
                      <Text style={{ fontSize: 12, position: 'absolute', right: 5, fontFamily: 'Helvetica'  }}>
                        Toyota
                      </Text>
                    </View>

                    <View style={{ marginTop: 10, height: 44, width: SCREEN.width - 30, alignSelf: "center", justifyContent: 'center' }}>
                      <Text style={{ fontSize: 15, fontFamily: 'Helvetica'  }}>
                        Model
                   </Text>
                      <Text style={{ fontSize: 12, position: 'absolute', right: 5, fontFamily: 'Helvetica'  }}>
                        Corola
                      </Text>
                    </View>
                    <View style={{ marginTop: 10, height: 44, width: SCREEN.width - 30, alignSelf: "center", justifyContent: 'center' }}>
                      <Text style={{ fontSize: 15, fontFamily: 'Helvetica'  }}>
                        Year
                   </Text>
                      <Text style={{ fontSize: 12, position: 'absolute', right: 5, fontFamily: 'Helvetica'  }}>
                        2017
                      </Text>
                    </View>

                    <View style={{ marginTop: 10, height: 44, width: SCREEN.width - 30, alignSelf: "center", justifyContent: 'center' }}>
                      <Text style={{ fontSize: 15, fontFamily: 'Helvetica'  }}>
                        Vehicle No.
                     </Text>
                      <Text style={{ fontSize: 12, position: 'absolute', right: 5, fontFamily: 'Helvetica'  }}>
                        6783
                      </Text>
                    </View>
                    <View style={{ marginTop: 10, height: 44, width: SCREEN.width - 30, alignSelf: "center", justifyContent: 'center' }}>
                      <Text style={{ fontSize: 15, fontFamily: 'Helvetica'  }}>
                        VIN NO.
                     </Text>
                      <Text style={{ fontSize: 12, position: 'absolute', right: 5, fontFamily: 'Helvetica'  }}>
                        678342-534677-2
                      </Text>
                    </View>
                  </View>}
                <TouchableOpacity
                  onPress={() => this.setState({ openHistory: !this.state.openHistory })}
                  activeOpacity={1}
                  style={{ marginTop: 10, height: 54, width: SCREEN.width - 20, alignSelf: "center", backgroundColor: WHITE.dark, justifyContent: 'center', shadowColor: '#000',shadowOffset: {width: 0,height: 1,},shadowOpacity: 0.3,shadowRadius: 4,elevation: 7 }}>
                  <Text style={{ marginLeft: 10, fontSize: 15, fontFamily: 'Helvetica'  }}>
                    History
                 </Text>
                  <View style={{ position: 'absolute', right: 10, height: 20, width: 20, justifyContent: "center" }}>
                    {this.state.openHistory ? <Icon name={"caretdown"} color={BLACK.dark} size={20} /> :
                      <Icon name={"caretright"} color={BLACK.dark} size={20} />}
                  </View>
                </TouchableOpacity>
                {this.state.openHistory &&
                  <View>

                    <View style={{ marginTop: 10, height: 44, width: SCREEN.width - 30, alignSelf: "center", justifyContent: 'center' }}>
                      <Text style={{ fontSize: 15, fontFamily: 'Helvetica'  }}>
                        Tyre Change
              </Text>
                      <Text style={{ fontSize: 12, position: 'absolute', right: 5, fontFamily: 'Helvetica'  }}>
                        04/10/19
              </Text>
                    </View>

                    <View style={{ marginTop: 10, height: 44, width: SCREEN.width - 30, alignSelf: "center", justifyContent: 'center' }}>
                      <Text style={{ fontSize: 15, fontFamily: 'Helvetica'  }}>
                        Battery Change
                      </Text>
                      <Text style={{ fontSize: 12, position: 'absolute', right: 5, fontFamily: 'Helvetica'  }}>
                        12/11/19
                      </Text>
                    </View>
                  </View>}
                <View style={{ marginTop: 40, alignSelf: "center" }}>
                  <TouchableOpacity
                    onPress={() => this.setState({ detailView: false })}
                    style={{ backgroundColor: BLACK.darkLight, height: 44, width: SCREEN.width / 2.5, justifyContent: 'center', alignItems: 'center' }}>
                    <ServiceOrderStyles.InnerButtonText>
                      Back
                  </ServiceOrderStyles.InnerButtonText>
                  </TouchableOpacity>
                </View>
              </ScrollView>
            </View>}
        </View>}
      </ServiceOrderStyles.WrapperViewVertical>
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
