import "./calculadora.style.css";

import { AreaBotao, AreaDisplay } from "../../components/index";
import { ordemDosBotoes } from "../../../utils/ordemDosBotoes";
import { useState } from "react";

export function Calculadora() {

    const [dadosBotaoSelecionado, setDadosBotaoSelecionado] = useState(null);

    const informacoesDosBotoes = ordemDosBotoes;

    return (
        <div className="calculadora">
            <AreaDisplay />
            <AreaBotao 
                informacoesDosBotoes={informacoesDosBotoes}
                setDadosBotaoSelecionado={setDadosBotaoSelecionado}
            />
        </div>
    )
}