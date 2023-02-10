import "./calculadora.style.css";

import { AreaBotao, AreaDisplay } from "../../components/index";
import { ordemDosBotoes } from "../../../utils/ordemDosBotoes";

export function Calculadora() {

    const informacoesDosBotoes = ordemDosBotoes;

    return (
        <div className="calculadora">
            <AreaDisplay />
            <AreaBotao informacoesDosBotoes={informacoesDosBotoes} />
        </div>
    )
}