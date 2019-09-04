import React from 'react';
import { createBottomTabNavigator, createSwitchNavigator, createAppContainer } from 'react-navigation';
import WelcomePage from '../Example/WelcomePage';

export default createAppContainer(createSwitchNavigator({
    WelcomePage: WelcomePage,
    }, {
        initialRouteName: 'WelcomePage'
    }
));
