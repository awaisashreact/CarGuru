import React from 'react';
import { Animated, Easing, SafeAreaView, ScrollView, View, Image } from 'react-native';
import { createSwitchNavigator } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import { createDrawerNavigator, DrawerItems} from 'react-navigation-drawer';
import Icon2 from 'react-native-vector-icons/AntDesign';
import Icon3 from 'react-native-vector-icons/MaterialCommunityIcons';
import Icon4 from 'react-native-vector-icons/FontAwesome5';
import Icon5 from 'react-native-vector-icons/MaterialIcons';

import Splash from '../screen/Splash';
import SignIn from '../screen/SignIn';
import DashBoard from '../screen/DashBoard';
import OCR from '../screen/OCR';
import Profile from '../screen/Profile';
import ServiceOrder from '../screen/ServiceOrder';
import CheckInOut from '../screen/CheckInOut';
import JobDetail from '../screen/JobDetail';
import Invoice from '../screen/Invoice';
import Notification from '../screen/Notification';
import SignUp from '../screen/SignUp';
import EarnJobsDetail from '../screen/EarnJobsDetail';
import Review from '../screen/Review';
import Chat from '../screen/Chat';
import Product from '../screen/Product'
import ChatSlider from '../screen/ChatSlider';
import { SCREEN } from '../helper/Constant';
import { BLACK, WHITE, ORANGE, GREEN } from '../helper/Color';

// https://github.com/react-community/react-navigation/issues/1254
const noTransitionConfig = () => ({
  transitionSpec: {
    duration: 0,
    timing: Animated.timing,
    easing: Easing.linear,
  },
});

const CustomDrawerComponent = (props) => (
  <SafeAreaView style={{backgroundColor: BLACK.dark, height: SCREEN.height}}>
    <View style={{height: SCREEN.height / 4, justifyContent: 'center', alignItems: 'center'}}>
      <Image source={require('../assets/appIcon.png')} style={{height: SCREEN.height / 6, width: SCREEN.width / 3, resizeMode: 'contain' }}/>
    </View>
    <ScrollView>
      <DrawerItems 
        {...props}
        itemStyle={{
          borderBottomWidth: 0.2,
          borderBottomColor: BLACK.light,
        }}
        labelStyle={{
          fontWeight: '400',
          fontSize: 15,
          color: WHITE.dark,
        }}
      />
    </ScrollView>
  </SafeAreaView>
)

const AppDrawerNavigator = createDrawerNavigator({
  DashBoard: {
    screen: DashBoard,
    navigationOptions: {
      drawerLabel: 'DashBoard',
      drawerIcon: ({focused}) => (
        <Icon2 size={20} color={focused ? GREEN.deafult : WHITE.dark} name={'areachart'}/>
      ),
    },
  },
  ServiceOrder: {
    screen: ServiceOrder,
    navigationOptions: {
      drawerLabel: 'Service Order',
      drawerIcon: ({focused}) => (
        <Icon2 size={20} color={focused ?  GREEN.deafult : WHITE.dark} name={'customerservice'}/>
      ),
    },
  },
  ChatSlider: {
    screen: ChatSlider,
    navigationOptions: {
      drawerLabel: 'Messages',
      drawerIcon: ({focused}) => (
        <Icon5 size={20} color={focused ? GREEN.deafult : WHITE.dark} name={'feedback'}/>
      ),
    },
  },
  Invoice: {
    screen: Invoice,
    navigationOptions: {
      drawerLabel: 'Invoice',
      drawerIcon: ({focused}) => (
        <Icon4 size={20} color={focused ? GREEN.deafult : WHITE.dark} name={'file-invoice'}/>
      ),
    },
  },

  Product: {
    screen: Product,
    navigationOptions: {
      drawerLabel: 'Product',
      drawerIcon: ({focused}) => (
        <Icon4 size={20} color={focused ? GREEN.deafult : WHITE.dark} name={'file-invoice'}/>
      ),
    },
  },
  OCR: {
    screen: OCR,
    navigationOptions: {
      drawerLabel: 'OCR',
      drawerIcon: ({focused}) => (
        <Icon3 size={20} color={focused ? GREEN.deafult : WHITE.dark} name={'barcode-scan'}/>
      ),
    },
  },
  Profile: {
    screen: Profile,
    navigationOptions: {
      drawerLabel: 'Profile',
      drawerIcon: ({focused}) => (
        <Icon3 size={20} color={focused ? GREEN.deafult : WHITE.dark} name={'account'}/>
      ),
    },
  },
  CheckInOut: {
    screen: CheckInOut,
    navigationOptions: {
      drawerLabel: 'CheckIn/CheckOut',
      drawerIcon: ({focused}) => (
        <Icon3 size={20} color={focused ? GREEN.deafult : WHITE.dark} name={'account-clock'}/>
      ),
    },
  },
  Review: {
    screen: Review,
    navigationOptions: {
      drawerLabel: 'Feedback',
      drawerIcon: ({focused}) => (
        <Icon5 size={20} color={focused ? GREEN.deafult : WHITE.dark} name={'feedback'}/>
      ),
    },
  },
},
{
    contentComponent: CustomDrawerComponent,
    initialRouteName: 'DashBoard',
    activeColor: GREEN.deafult,
    labeled: true,
    shifting: false,
    inactiveColor: WHITE.dark,
    barStyle: {backgroundColor: '#fff'},
})

// login stack
const LoginStack = createStackNavigator({
  Splash: {
    screen: Splash,
    navigationOptions: { header: null, gesturesEnabled: false },
  },
  SignIn: {
    screen: SignIn,
    navigationOptions: { header: null, gesturesEnabled: false },
  },
  SignUp: {
    screen: SignUp,
    navigationOptions: { header: null, gesturesEnabled: false },
  },
  JobDetail: {
    screen: JobDetail,
    navigationOptions: { header: null, gesturesEnabled: false },
  },

  EarnJobDetail: {
    screen: EarnJobsDetail,
    navigationOptions: { header: null, gesturesEnabled: false },
  },

  Chat: {
    screen: Chat,
    navigationOptions: { header: null, gesturesEnabled: false },
  },

  Notification: {
    screen: Notification,
    navigationOptions: { header: null, gesturesEnabled: false },
  },
  HomeMain: {
    screen: AppDrawerNavigator,
    navigationOptions: { header: null, gesturesEnabled: false },
  }
});

// eslint-disable-next-line no-undef
export default (SwitchNavigator = createSwitchNavigator(
  {
    AuthLoading: LoginStack,
    App: LoginStack,
    Auth: LoginStack,
  },
  {
    initialRouteName: 'AuthLoading',
    transitionConfig: noTransitionConfig,
  },
));
