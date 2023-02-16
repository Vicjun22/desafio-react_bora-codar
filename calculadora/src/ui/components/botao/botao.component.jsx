import "./botao.style.css";

import Percent from "../../../assets/icons/Percent.svg";
import Divide from "../../../assets/icons/Divide.svg";
import X from "../../../assets/icons/X.svg";
import Minus from "../../../assets/icons/Minus.svg";
import Plus from "../../../assets/icons/Plus.svg";
import Equals from "../../../assets/icons/Equals.svg";
import PlusMinus from "../../../assets/icons/PlusMinus.svg";

import {
  limparMemoria,
  adicionarDigito,
  operacao,
  trocarSinal,
  limparArrayDaMemoria,
  operacaoPercentual,
} from "../../../utils/index";

export function Botao({ valor, estado, estilo, setEstado }) {
  switch (valor) {
    case "percentual":
      return (
        <button
          onClick={() => operacaoPercentual({ estado, setEstado })}
          className={`estilo-${estilo}`}
        >
          <img src={Percent} alt={valor} />
        </button>
      );

    case "dividir":
      return (
        <button
          onClick={() => operacao({ valor, estado, setEstado })}
          className={`estilo-${estilo}`}
        >
          <img src={Divide} alt={valor} />
        </button>
      );

    case "multiplicar":
      return (
        <button
          onClick={() => operacao({ valor, estado, setEstado })}
          className={`estilo-${estilo}`}
        >
          <img src={X} alt={valor} />
        </button>
      );

    case "subtrair":
      return (
        <button
          onClick={() => operacao({ valor, estado, setEstado })}
          className={`estilo-${estilo}`}
        >
          <img src={Minus} alt={valor} />
        </button>
      );
    case "somar":
      return (
        <button
          onClick={() => operacao({ valor, estado, setEstado })}
          className={`estilo-${estilo}`}
        >
          <img src={Plus} alt={valor} />
        </button>
      );

    case "igual":
      return (
        <button
          onClick={() => operacao({ valor, estado, setEstado })}
          className={`estilo-${estilo}`}
        >
          <img src={Equals} alt={valor} />
        </button>
      );

    case "maisMenos":
      return (
        <button
          onClick={() => trocarSinal({ estado, setEstado })}
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

    case "CE":
      return (
        <button
          onClick={() => limparArrayDaMemoria({estado, setEstado })}
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
