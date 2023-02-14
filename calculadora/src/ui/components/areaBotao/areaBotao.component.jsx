import "./areaBotao.style.css"

import { Botao } from "../index"

export function AreaBotao({ estado, setEstado, informacoesDosBotoes, setDadosBotaoSelecionado }) {

    const botao = informacoesDosBotoes.map(botao => {

        return (
            <Botao 
                key={botao.id}
                valor={botao.valor}
                estilo={botao.estiloDoBotao} 
                tipo={botao.tipoDoBotao}
                estado={estado}
                setEstado={setEstado}
                setDadosBotaoSelecionado={setDadosBotaoSelecionado}
            />
        )
    })

    return (
        <div className="area-botao">
            { botao }
        </div>
    )
}