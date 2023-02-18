import "./areaImagem.style.css";

import Sofa from "../../../assets/images/Sofa.svg";
import SofaGif from "../../../assets/images/Sofa.gif";
import Rodar from "../../../assets/icons/Rodar.svg";
import Fechar from "../../../assets/icons/Fechar.svg";

import { useState } from "react";

export function AreaImagem({ produto }) {
  const [imagemEstatica, setImagemEstatica] = useState(true);

  const imagem = imagemEstatica ? (
    <div className="container-imagem-estatica">
      <button
        className="botao-gif"
        onClick={() => setImagemEstatica(!imagemEstatica)}
      >
        <img src={Rodar} alt="imagem animada" />
      </button>
      <img src={Sofa} alt={produto.produto} className="img" />
    </div>
  ) : (
    <div className="container-imagem-animada">
      <button
        className="botao-gif"
        onClick={() => setImagemEstatica(!imagemEstatica)}
      >
        <img src={Fechar} alt="imagem estatica" />
      </button>
      <img src={SofaGif} alt={produto.produto} className="img" />
    </div>
  );

  return <div className="area-imagem">{imagem}</div>;
}
