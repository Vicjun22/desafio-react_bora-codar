import { AreaImagem } from "../../components/areaImagem/areaImagem.component";
import { AreaInformacoes } from "../../components/areaInformacoes/areaInformacoes.component";
import "./produto.style.css";

export function Produto({ produto }) {
    console.log(produto)
    return (
        <>
          <AreaImagem produto={produto} />
          <AreaInformacoes produto={produto} /> 
        </>
    )
}