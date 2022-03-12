import React from "react";
import {StyledText,StyledView,} from "./styles";
import {StatusBar} from "expo-status-bar";


export function SingIn(){
    return(
        <StyledView>
            <StyledText>Sing In </StyledText>
            {/*<Input/>*/}
            <StatusBar style="auto"/>
        </StyledView>
    )
}