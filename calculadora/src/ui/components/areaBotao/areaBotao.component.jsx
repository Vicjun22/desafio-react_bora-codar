import "./areaBotao.style.css"

import { Botao } from "../index"

export function AreaBotao({ estado, setEstado, informacoesDosBotoes }) {

    const botao = informacoesDosBotoes.map(botao => {

        return (
            <Botao 
                key={botao.id}
                valor={botao.valor}
                estilo={botao.estiloDoBotao}
                estado={estado}
                setEstado={setEstado}
            />
        )
    })

    return (
        <div className="area-botao">
            { botao }
        </div>
    )
}