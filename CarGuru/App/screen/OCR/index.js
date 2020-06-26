/* eslint-disable no-undef */
import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { Text, Alert } from 'react-native';

import Header from '../../component/Header';
import * as Actions from '../../redux/actions';
import OCRStyles from './OCRStyles';

class OCR extends Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
  }
  
  onBarCodeRead = (e) => {
    Alert.alert("Barcode value is"+e.data ,"Barcode type is"+e.type);
}

  render() {
    return (
      <OCRStyles.WrapperViewVertical>
        <Header leftPress={() => this.props.navigation.openDrawer()} HeaderText={"OCRr"} rightPress={()=> this.props.navigation.navigate('Notification')} />
        
          <Text style={{
            backgroundColor: 'white'
          }}>BARCODE SCANNER</Text>
      </OCRStyles.WrapperViewVertical>
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
)(OCR);
