import { TabelaBotoes } from "../tabelaBotoes/tabelaBotoes.component";
import "./areaBotoes.style.css";

export function AreaBotoes({ setTipoBotao }) {
  return (
    <div className="area-botoes_container">
      <div className="area-botoes_content">
        <h1>Tipos de botão</h1>
        <p className="area-botoes_descricao">
          Dentro de um layout, botões servem para destacar ações importantes a
          serem tomadas. Acompanhe abaixo um exemplo de tipos e propriedades.
        </p>
      </div>

      <TabelaBotoes setTipoBotao={setTipoBotao} />
    </div>
  );
}
