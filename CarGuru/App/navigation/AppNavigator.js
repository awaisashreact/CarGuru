import React from 'react';
import { Animated, Easing, SafeAreaView, ScrollView, View } from 'react-native';
import { createSwitchNavigator } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import { createDrawerNavigator, DrawerItems} from 'react-navigation-drawer';
import Icon1 from 'react-native-vector-icons/Fontisto';

import Splash from '../screen/Splash';
import SignIn from '../screen/SignIn';
import DashBoard from '../screen/DashBoard';
import OCR from '../screen/OCR';
import Profile from '../screen/Profile';
import ServiceOrder from '../screen/ServiceOrder';
import CheckInOut from '../screen/CheckInOut';
import { SCREEN } from '../helper/Constant';
import { BLACK, WHITE, ORANGE } from '../helper/Color';

// https://github.com/react-community/react-navigation/issues/1254
const noTransitionConfig = () => ({
  transitionSpec: {
    duration: 0,
    timing: Animated.timing,
    easing: Easing.linear,
  },
});

const CustomDrawerComponent = (props) => (
  <SafeAreaView>
    <View style={{height: SCREEN.height / 4, backgroundColor: BLACK.dark}}>

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
          color: '#121212',
        }}
      />
    </ScrollView>
  </SafeAreaView>
)

const AppDrawerNavigator = createDrawerNavigator({
  DashBoard: {
    screen: DashBoard,
    navigationOptions: {
      tabBarLabel: 'DashBoard',
      tabBarIcon: ({focused}) => (
        <Icon1 size={30} color={BLACK.dark} name={'email'}/>
      ),
    },
  },
  ServiceOrder: {
    screen: ServiceOrder,
    navigationOptions: {
      tabBarLabel: 'Service Order',
      tabBarIcon: ({focused}) => (
        <Icon1 size={30} color={BLACK.dark} name={'email'}/>
      ),
    },
  },
  OCR: {
    screen: OCR,
    navigationOptions: {
      tabBarLabel: 'OCR',
      tabBarIcon: ({focused}) => (
        <Icon1 size={30} color={BLACK.dark} name={'email'}/>
      ),
    },
  },
  Profile: {
    screen: Profile,
    navigationOptions: {
      tabBarLabel: 'Profile',
      tabBarIcon: ({focused}) => (
        <Icon1 size={30} color={BLACK.dark} name={'email'}/>
      ),
    },
  },
  CheckInOut: {
    screen: CheckInOut,
    navigationOptions: {
      tabBarLabel: 'CheckIn/CheckOut',
      tabBarIcon: ({focused}) => (
        <Icon1 size={30} color={BLACK.dark} name={'email'}/>
      ),
    },
  },
  CheckInOut: CheckInOut
},
{
    contentComponent: CustomDrawerComponent,
    initialRouteName: 'DashBoard',
    activeColor: ORANGE.defult,
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
