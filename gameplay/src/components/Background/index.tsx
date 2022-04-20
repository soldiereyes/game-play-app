import React, {ReactNode} from "react";
import {Container} from "./styles";

type Props = {
    children: ReactNode;
}

export function Background({children}) {
    return (
        <Container>
            {children}
        </Container>
    )
}
