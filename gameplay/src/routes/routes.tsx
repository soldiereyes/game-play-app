import React from "react";
import {createStackNavigator} from '@react-navigation/stack';


import {Home} from '../view/Home';
import {SingIn} from '../view/SingIn';


const {Navigator, Screen} = createStackNavigator();

export function AuthRouts() {
    return (
        <Navigator
            screenOptions={{
                headerShown:false,
                cardStyle: { backgroundColor: 'transparent' }
            }}
        >
            <Screen
                name="SingIn"
                component={SingIn}
            />
            <Screen
                name="Home"
                component={Home}
            />
        </Navigator>
    )
};

