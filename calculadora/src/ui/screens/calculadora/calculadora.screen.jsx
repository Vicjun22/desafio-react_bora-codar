import "./calculadora.style.css";

import { Botao } from "../../components/botao/botao.component";

export function Calculadora() {

    const botoes = [ 
        { botao: 0, valor: 0 },
        { botao: 1, valor: 1 }, 
        { botao: 2, valor: 2 },
        { botao: 3, valor: 3 },
        { botao: 4, valor: 4 },
        { botao: 5, valor: 5 },
        { botao: 6, valor: 6 },
        { botao: 7, valor: 7 },
        { botao: 8, valor: 8 },
        { botao: 9, valor: 9 },
    ];


    return (
        <div className="calculadora">

            {botoes.map(botao => <Botao botao={botao.botao} valor={botao.valor} />)}
            
        </div>
    )
}