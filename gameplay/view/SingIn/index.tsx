// Em index eu criro a estrutura da minha interface
import React, {useState} from "react";
import {StatusBar} from "expo-status-bar";
import "../../assets/splash.png"
import {
    Container,
    Image,
    View,
    TextTitulo,
    TextSubtitulo
} from "./styles";


import IllustrationImg from '../../src/assets/illustration.png'


export function SingIn() {
    const [text, setText] = useState('');

    return (
        <Container>
            <Image source={IllustrationImg}/>
            <View>
                <TextTitulo>Organize {`\n`}suas jogatinas {`\n`}facilmente </TextTitulo>
                <TextSubtitulo>Crie grupos para jogar seus games{`\n`} favoritos com os amigos </TextSubtitulo>
            </View>
        </Container>
    )
}