import React, {ReactNode} from "react";
import {ContainerLinearGradiente} from "./styles";

type Props = {
    children: ReactNode;
}

export function Background({children}) {
    return (
        <ContainerLinearGradiente>
            {children}
        </ContainerLinearGradiente>
    )
}
