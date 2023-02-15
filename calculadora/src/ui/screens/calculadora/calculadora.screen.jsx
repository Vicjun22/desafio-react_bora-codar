import "./calculadora.style.css";

import { AreaBotao, AreaDisplay } from "../../components/index";
import { ordemDosBotoes, estadoInicial } from "../../../utils/index";

import { useState } from "react";

export function Calculadora() {

    const [estado, setEstado] = useState({ ...estadoInicial });

    const informacoesDosBotoes = ordemDosBotoes;

    return (
        <div className="calculadora">
            <AreaDisplay 
                estado={estado}
            />
            <AreaBotao 
                estado={estado}
                setEstado={setEstado}
                informacoesDosBotoes={informacoesDosBotoes}
            />
        </div>
    )
}