import "./botoesECursores.style.css";

import { AreaBotoes, AreaTestes } from "../../components";

import { useState } from 'react';

export function BotoesECursores() {

    const [tipoBotao, setTipoBotao] = useState("default");

    return(
        <>
            <AreaBotoes 
                tipoBotao={tipoBotao}
                setTipoBotao={setTipoBotao}
            />
            <AreaTestes 
                tipoBotao={tipoBotao}
            />
        </>
    )
}