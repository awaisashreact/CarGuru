/* eslint-disable no-undef */
import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import Header from '../../component/Header';
import { View, Image, ScrollView, TouchableOpacity, Text } from 'react-native';
import Icon from 'react-native-vector-icons/AntDesign';

import * as Actions from '../../redux/actions';
import ProductStyles from './ProductStyles';
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
      selectedCatogry: 'All',
      selectedObj: {},
      listJobs: [
        {
          name: 'battery bosch', street: '2826  Angus Road', price: '50 AED',
          detail: 'Bosch continuously revolutionises its line of products for the automotive industry across the globe. With today‘s cars being fitted with more and more components that run on electricity, having a high quality and reliable battery power is ever more essential',
          phone: '288-457-6832',
          pic: 'https://az.bosch-automotive.com/documents/1763888/1782867/SM+Mega+Power_235.jpg/d14e5f93-c749-c9e8-5c57-132359149226?t=1498211317164'
        },
        {
          name: 'High Power', street: '2026  Angus Road', price: '90 AED',
          detail: 'Bosch continuously revolutionises its line of products for the automotive industry across the globe. With today‘s cars being fitted with more and more components that run on electricity, having a high quality and reliable battery power is ever more essential',
          phone: '277-457-6832',
          pic: 'https://p.globalsources.com/IMAGES/PDT/BIG/589/B1159165589.jpg'
        },
        {
          name: 'sotto zero', street: '2226  Angus Road', price: '55 AED',
          detail: 'Bosch continuously revolutionises its line of products for the automotive industry across the globe. With today‘s cars being fitted with more and more components that run on electricity, having a high quality and reliable battery power is ever more essential',
          phone: '266-457-6832',
          pic: 'https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcRJexAICETR3pPQbyaL-WnLmnMxhPn_m4B5DePJfOGu0O6yR_xZ&usqp=CAU'
        },
        {
          name: 'Sotto zero', street: '2126  Angus Road', price: '23 AED',
          detail: 'Bosch continuously revolutionises its line of products for the automotive industry across the globe. With today‘s cars being fitted with more and more components that run on electricity, having a high quality and reliable battery power is ever more essential',
          phone: '255-457-6832',
          pic: 'https://www.derrickwells.com/wp-content/uploads/2018/01/winter-tyres-3-1024x576.jpg'
        },
      ],
    }
  }

  componentDidMount() {

  }

  render() {
    return (
      <ProductStyles.WrapperViewVertical>
        <Header
          leftPress={() => this.props.navigation.openDrawer()}
          HeaderText={"Product"}
          rightPress={() => this.props.navigation.navigate('Notification')}
        />
        <ProductStyles.CellRightTitle style={{ marginTop: 20, alignSelf: 'flex-start', marginLeft: 40 }}>
          Select catogery
        </ProductStyles.CellRightTitle>
        <ProductStyles.TopDropDownView>
          <ProductStyles.CellRightTitle style={{ alignSelf: 'flex-start', marginLeft: 15 }}>
            {this.state.selectedCatogry}
          </ProductStyles.CellRightTitle>
          <ProductStyles.AbsoluteRightIcon>
            <Icon name={"caretdown"} color={GREEN.deafult} size={20} />
          </ProductStyles.AbsoluteRightIcon>
        </ProductStyles.TopDropDownView>
        <ProductStyles.JobList
          numColumns={2}
          data={this.state.listJobs}
          keyExtractor={(item, index) => index.toString()}
          renderItem={(item, index) => (
            <ProductStyles.CellMainWrapper>
              <ProductStyles.CellWrapper onPress={() => this.setState({ detailView: true, selectedObj: item.item })}>
                <ProductStyles.CellLeftView>
                  <ProductStyles.CellLeftInnerImage source={{ uri: item.item.pic }} />
                </ProductStyles.CellLeftView>
                <ProductStyles.CellRightView>
                  <ProductStyles.CellRightTitle>
                    {item.item.name}
                  </ProductStyles.CellRightTitle>
                  <ProductStyles.CellRightTitle style={{ fontSize: 14 }}>
                    {item.item.price}
                  </ProductStyles.CellRightTitle>
                </ProductStyles.CellRightView>
              </ProductStyles.CellWrapper>
            </ProductStyles.CellMainWrapper>
          )}
        />
        {this.state.detailView && <View style={{ position: 'absolute', height: SCREEN.height, width: SCREEN.width, backgroundColor: WHITE.dark }}>
          <Header
            leftType={'text'}
            leftText={'Back'}
            leftPress={() => this.setState({ detailView: false })}
            HeaderText={"Product Detail"}
            rightType={'text'}
          />
          <View style={{ height: SCREEN.height / 3, width: SCREEN.width, justifyContent: 'center' }}>
            <Image
              source={{ uri: this.state.selectedObj.pic }}
              style={{ height: SCREEN.height / 3, width: SCREEN.width }} />
            <TouchableOpacity style={{ position: 'absolute', left: 20, height: 30, width: 30, justifyContent: "center", alignItems: 'center' }}>
              <Icon name={"caretleft"} size={30} color={GREEN.deafult} />
            </TouchableOpacity>
            <TouchableOpacity style={{ position: 'absolute', right: 20, height: 30, width: 30, justifyContent: "center", alignItems: 'center' }}>
              <Icon name={"caretright"} color={GREEN.deafult} size={30} />
            </TouchableOpacity>
          </View>
          <ScrollView style={{ flex: 1, paddingHorizontal: 10 }} bounces={false}>
            <ProductStyles.CellRightTitle style={{ fontSize: 20, alignSelf: 'flex-start' }}>
              {this.state.selectedObj.name}
            </ProductStyles.CellRightTitle>
            <ProductStyles.CellRightTitle>
              {this.state.selectedObj.detail}
            </ProductStyles.CellRightTitle>

            <View style={{ marginTop: 10, height: 40, width: SCREEN.width - 30, alignSelf: "center", justifyContent: 'center' }}>
              <Text style={{ fontSize: 22, fontWeight: 'bold' }}>
                Current Price
              </Text>
              <Text style={{ fontSize: 22, position: 'absolute', right: 5 }}>
                200 AED
              </Text>
            </View>
            <View style={{ marginTop: 5, height: 40, width: SCREEN.width - 30, alignSelf: "center", justifyContent: 'center' }}>
              <Text style={{ fontSize: 22, fontWeight: 'bold' }}>
                Least Price
              </Text>
              <Text style={{ fontSize: 22, position: 'absolute', right: 5 }}>
                180 AED
              </Text>
            </View>
            <View style={{ marginTop: 5, height: 40, width: SCREEN.width - 30, alignSelf: "center", justifyContent: 'center' }}>
              <Text style={{ fontSize: 22, fontWeight: 'bold' }}>
                Margin
              </Text>
              <Text style={{ fontSize: 22, position: 'absolute', right: 5 }}>
                10%
              </Text>
            </View>
            <View style={{ marginTop: 5, height: 40, width: SCREEN.width - 30, alignSelf: "center", justifyContent: 'center' }}>
              <Text style={{ fontSize: 22, fontWeight: 'bold' }}>
                Vendor
              </Text>
              <Text style={{ fontSize: 22, position: 'absolute', right: 5 }}>
                Boch GmbH
              </Text>
            </View>
            <ProductStyles.TopDropDownView>
                <ProductStyles.CellRightTitle style={{ alignSelf: 'flex-start', marginLeft: 15, fontSize: 15 }}>
                  Select Service Order Number
                </ProductStyles.CellRightTitle>
                <ProductStyles.AbsoluteRightIcon>
                  <Icon name={"caretdown"} color={GREEN.deafult} size={20} />
                </ProductStyles.AbsoluteRightIcon>
              </ProductStyles.TopDropDownView>

              <ProductStyles.InnerButton style={{alignSelf: 'center', marginTop: 10}}>
                    <ProductStyles.InnerButtonText style={{fontSize: 16}}>
                      Add to Service Order
                  </ProductStyles.InnerButtonText>
                  </ProductStyles.InnerButton>
          </ScrollView>
        </View>}
      </ProductStyles.WrapperViewVertical>
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
