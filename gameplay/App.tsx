import React from "react";
import {StatusBar} from "react-native";
import AppLoading from "expo-app-loading";
import {Inter_400Regular, Inter_500Medium} from '@expo-google-fonts/inter';
import {Rajdhani_500Medium, Rajdhani_700Bold} from '@expo-google-fonts/rajdhani';
import {useFonts} from 'expo-font'
import {Background} from "./src/components/Background";
import {SingIn} from "./src/view/SingIn";

export default function App() {

    const [fontsLoaded] = useFonts({
        Inter_400Regular,
        Inter_500Medium,
        Rajdhani_500Medium,
        Rajdhani_700Bold
    });
    if (!fontsLoaded) {
        return <AppLoading/>
    }

    return (
        <Background>
            <SingIn/>
            <StatusBar
                barStyle="light-content"
                backgroundColor="transparent"
                translucent={true}
            />
        </Background>
    );
}
