import "./areaTestes.style.css";

import Vetor from "../../../assets/icons/vetor.svg";

export function AreaTestes({ tipoBotao }) {
  return (
    <div className="area-testes_container">
      <div>
        <h1>Teste os botões</h1>
        <p className="area-testes_descricao">
          Interaja com os botões e observe a mudança de aparência e de cursores
        </p>
      </div>

      <div className="area-testes_btn">
        <button disabled={tipoBotao === "disabled" ? true : false} className={`button ${tipoBotao}`}>INTERAJA COMIGO</button>
        <button disabled={tipoBotao === "disabled" ? true : false} className={`button ${tipoBotao} button-sec`}>INTERAJA COMIGO</button>
        <button disabled={tipoBotao === "disabled" ? true : false} className={`button ${tipoBotao} button-tert`}><img src={Vetor} alt="" /> INTERAJA COMIGO</button>
      </div>
      <div className="area-testes_tipo">
        {tipoBotao.toUpperCase()}
      </div>
    </div>
  );
}
