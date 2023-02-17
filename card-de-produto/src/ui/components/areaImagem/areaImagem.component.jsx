import "./areaImagem.style.css";

export function AreaImagem({ produto }) {
console.log(produto)
    return (
        <div className="area-imagem">
            {produto.codigo}
        </div>
    )
}