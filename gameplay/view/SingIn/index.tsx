// Em index eu criro a estrutura da minha interface
import React from "react";
import "../../assets/splash.png"
import {StatusBar} from "react-native";
import {
    Container,
    Image,
    View,
    TextTitulo,
    TextSubtitulo,
} from "./styles";
import IllustrationImg from '../../src/assets/illustration.png'
import {ButtonIcon} from "../../src/components/ButtonIcon";


export function SingIn() {

    return (
        <Container>
            <StatusBar
                barStyle="light-content"
                backgroundColor="transparent"
                translucent={true}
            />
            <Image
                source={IllustrationImg}
                resizeMode="stretch"
            />
            <View>
                <TextTitulo>Organize {`\n`}
                    suas jogatinas {`\n`}
                    facilmente
                </TextTitulo>
                <TextSubtitulo>Crie grupos para jogar seus games{`\n`}
                    favoritos com os amigos
                </TextSubtitulo>
                <ButtonIcon
                    title={"Entrar com Discord"}
                    activeOpacity={0.7}/>
            </View>
        </Container>
    )
}