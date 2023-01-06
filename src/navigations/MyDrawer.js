import React from 'react';
import { createDrawerNavigator } from '@react-navigation/drawer';
import {COLORS, ROUTES} from '../constants';
import {Home, Wallet, Notifications} from '../screens';
import BottomTabNavigator from './BottomTabNavigator';
const Drawer = createDrawerNavigator();

function MyDrawer() {
  return (
    <Drawer.Navigator>
      <Drawer.Screen name={ROUTES.HOME_DRAWER} component={BottomTabNavigator} />
      <Drawer.Screen name={ROUTES.WALLET_DRAWER} component={Wallet} />
      <Drawer.Screen name={ROUTES.NOTIFICATIONS_DRAWER} component={Notifications} />
    </Drawer.Navigator>
  );
}

export default MyDrawer;