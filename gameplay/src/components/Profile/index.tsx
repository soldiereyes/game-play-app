import React from "react";
import {
    Container,
    ViewUser,
    TextGreeting,
    TextUserName,
    TextMessage,
    View
} from "./styles";
import {Avatar} from "../Avatar";


export function Profile() {
    return (
        <Container>
            <Avatar
                urlImage="https://cdn.dribbble.com/users/3571554/screenshots/7272092/media/208e3b6d67d2f364b1a55af0bf123bee.png?compress=1&resize=1200x900&vertical=top"
            />
            <View>
                <ViewUser>
                    <TextGreeting>
                        Ola,
                    </TextGreeting>
                    <TextUserName>
                        Guilherme
                    </TextUserName>
                </ViewUser>
                <TextMessage>
                    Hoje é dia de vitória
                </TextMessage>
            </View>

        </Container>
    )
}