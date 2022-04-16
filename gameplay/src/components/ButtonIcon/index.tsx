import React from "react";

import {
    Text,
    Image,
    View,
    TouchableOpacity
} from './styles'
import DiscordImg from '../../assets/discord.png'
import {TouchableOpacityProps} from "react-native";

type Props = TouchableOpacityProps & {
    title: string;
    // por padrao todas as propriedades de uma tipagem sao obrigatorias a interrogacao torna opcional
}
export function ButtonIcon({title, ...rest} : Props){
    return(
        <TouchableOpacity
            {...rest}
        >
            <View>
                <Image source={DiscordImg}/>
            </View>
            <Text>
                {title}
            </Text>
        </TouchableOpacity>
    )
};


