import React from "react";
import {NavigationContainer} from "@react-navigation/native";

import {AuthRouts} from "./routes";
import {Background} from "../components/Background";

export function Routs() {
    return (
        <Background>
            <NavigationContainer>
                <AuthRouts/>
            </NavigationContainer>
        </Background>
    )
};