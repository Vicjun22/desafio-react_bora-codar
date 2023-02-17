import "./areaInformacoes.style.css";

export function AreaInformacoes({ produto }) {

    return (
        <div className="area-informacoes">
            <span className="codigo-do-produto">CÓDIGO: { produto.codigo }</span>
            <h1 className="nome-do-produto">{ produto.produto }</h1>
            <h2 className="preco-do-produto">R$ { produto.preco }</h2>
            <button className="botao-add-carrinho">ADICIONAR À CESTA</button>
        </div>
    )
}