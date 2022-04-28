import React from "react";
import {ContainerLinearGradiente, Image} from "./styles";


type Props = {
    urlImage: string;
}

export function Avatar({urlImage}: Props) {
    return (
            <ContainerLinearGradiente>
                <Image
                    source={{uri: urlImage}}
                />
            </ContainerLinearGradiente>

    )
}