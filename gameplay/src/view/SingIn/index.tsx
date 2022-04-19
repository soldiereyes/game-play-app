// Em index eu criro a estrutura da minha interface
import React from "react";
import "../../../assets/splash.png"
import {StatusBar} from "react-native";
import {
    Container,
    Image,
    View,
    TextTitulo,
    TextSubtitulo,
} from "./styles";
import IllustrationImg from '../../assets/illustration.png'
import {ButtonIcon} from "../../components/ButtonIcon";


export function SingIn() {

    return (
        <Container>
            <Image
                source={IllustrationImg}
                resizeMode="stretch"
            />
            <View>
                <TextTitulo>
                    Conecte-se {`\n`}
                    e organize suas{`\n`}
                    jogatinas
                </TextTitulo>
                <TextSubtitulo>
                    Crie grupos para jogar seus games{`\n`}
                    favoritos com os amigos
                </TextSubtitulo>
                <ButtonIcon
                    title={"Entrar com Discord"}
                    activeOpacity={0.7}/>
            </View>
        </Container>
    )
}