import "./areaDisplay.style.css";

import { OperacaoSelecionada } from "../index";

export function AreaDisplay({ estado, dadosBotaoSelecionado }) {

  return (
    <div className="area-display">
      <div className="area-calculo">{estado.valorDoDisplay}</div>

      <div className="area-resposta">
        <OperacaoSelecionada dadosBotaoSelecionado={dadosBotaoSelecionado} />
        <span>{estado?.valorNoDisplay || "0"}</span>
      </div>
    </div>
  );
}
