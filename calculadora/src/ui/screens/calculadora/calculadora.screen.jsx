import "./calculadora.style.css";

import { AreaBotao, AreaDisplay } from "../../components/index";
import { ordemDosBotoes } from "../../../utils/ordemDosBotoes";
import { valorInicial } from "../../../utils/valorInicialDisplay";

import { useState } from "react";

export function Calculadora() {

    const [dadosBotaoSelecionado, setDadosBotaoSelecionado] = useState(null);
    const [estado, setEstado] = useState({ ...valorInicial });

    const informacoesDosBotoes = ordemDosBotoes;

    return (
        <div className="calculadora">
            <AreaDisplay 
                estado={estado}
                dadosBotaoSelecionado={dadosBotaoSelecionado}
            />
            <AreaBotao 
                estado={estado}
                setEstado={setEstado}
                informacoesDosBotoes={informacoesDosBotoes}
                setDadosBotaoSelecionado={setDadosBotaoSelecionado}
            />
        </div>
    )
}