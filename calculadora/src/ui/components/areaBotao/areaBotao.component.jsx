import "./areaBotao.style.css"

import { Botao } from "../index"

export function AreaBotao({ informacoesDosBotoes, setDadosBotaoSelecionado }) {

    const botao = informacoesDosBotoes.map(botao => {

        return (
            <Botao 
                key={botao.id}
                valor={botao.valor}
                estilo={botao.estiloDoBotao} 
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