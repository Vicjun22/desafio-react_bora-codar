import "./areaDisplay.style.css";

import { OperacaoSelecionada } from "../index";

export function AreaDisplay({ estado }) {

  let operacaoSelecionada;

  switch (estado?.operacao) {
    case "somar": operacaoSelecionada = "+" 
    break;
    case "subtrair": operacaoSelecionada = "-" 
    break;    
    case "multiplicar": operacaoSelecionada = "*" 
    break;
    case "dividir": operacaoSelecionada = "/" 
    break;
    default: break;
  }


  return (
    <div className="area-display">
      <div className="area-calculo">
        {estado?.valores[0] || 0}{" "}
        {operacaoSelecionada}{" "}
        {operacaoSelecionada ? estado?.valores[1] || null : null}
      </div>

      <div className="area-resposta">
        <OperacaoSelecionada estado={estado} />
        <span>{estado?.valorNoDisplay || "0"}</span>
      </div>
    </div>
  );
}
