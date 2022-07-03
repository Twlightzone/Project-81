import React from 'react';
import  { createDrawerNavigation } from '@react-navigation/drawer';

import TabNavigation from './TabNavigation';
import Profile from '../Screens/Profile';

const Drawer = createDrawerNavigation();

const DrawerNavigation = () => {
    return(
        <Drawer.Navigator>
            <Drawer.Screen name="TabNav" component={TabNavigation}/>
            <Drawer.Screen name="Profile" component={Profile}/>
        </Drawer.Navigator>
    )
}

export default DrawerNavigation;