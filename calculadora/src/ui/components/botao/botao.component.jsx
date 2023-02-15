import "./botao.style.css";

import Percent from "../../../assets/icons/Percent.svg";
import Divide from "../../../assets/icons/Divide.svg";
import X from "../../../assets/icons/X.svg";
import Minus from "../../../assets/icons/Minus.svg";
import Plus from "../../../assets/icons/Plus.svg";
import Equals from "../../../assets/icons/Equals.svg";
import PlusMinus from "../../../assets/icons/PlusMinus.svg";

import { limparMemoria } from "../../../utils/limparMemoria";
import { adicionarDigito } from "../../../utils/adicionarDigito";

export function Botao({
  tipo,
  valor,
  estado,
  estilo,
  setEstado,
  setDadosBotaoSelecionado,
}) {

  switch (valor) {
    case "percentual":
      return (
        <button
          onClick={() => setDadosBotaoSelecionado({ tipo: tipo, valor: valor })}
          className={`estilo-${estilo}`}
        >
          <img src={Percent} alt={valor} />
        </button>
      );

    case "dividir":
      return (
        <button
          onClick={() => setDadosBotaoSelecionado({ tipo: tipo, valor: valor })}
          className={`estilo-${estilo}`}
        >
          <img src={Divide} alt={valor} />
        </button>
      );

    case "multiplicar":
      return (
        <button
          onClick={() => setDadosBotaoSelecionado({ tipo: tipo, valor: valor })}
          className={`estilo-${estilo}`}
        >
          <img src={X} alt={valor} />
        </button>
      );

    case "subtrair":
      return (
        <button
          onClick={() => setDadosBotaoSelecionado({ tipo: tipo, valor: valor })}
          className={`estilo-${estilo}`}
        >
          <img src={Minus} alt={valor} />
        </button>
      );
    case "somar":
      return (
        <button
          onClick={() => setDadosBotaoSelecionado({ tipo: tipo, valor: valor })}
          className={`estilo-${estilo}`}
        >
          <img src={Plus} alt={valor} />
        </button>
      );

    case "igual":
      return (
        <button
          onClick={() => setDadosBotaoSelecionado({ tipo: tipo, valor: valor })}
          className={`estilo-${estilo}`}
        >
          <img src={Equals} alt={valor} />
        </button>
      );

    case "maisMenos":
      return (
        <button
          onClick={() => setDadosBotaoSelecionado({ tipo: tipo, valor: valor })}
          className={`estilo-${estilo}`}
        >
          <img src={PlusMinus} alt={valor} />
        </button>
      );

    case "C":
      return (
        <button
          onClick={() => limparMemoria({ setEstado })}
          className={`estilo-${estilo}`}
        >
          {valor}
        </button>
      );

    default:
      return (
        <button
          onClick={() => adicionarDigito({ valor, estado, setEstado })}
          className={`estilo-${estilo}`}
        >
          {valor}
        </button>
      );
  }
}
