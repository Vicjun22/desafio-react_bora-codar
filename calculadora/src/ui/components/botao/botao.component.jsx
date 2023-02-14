import "./botao.style.css";

import Percent from "../../../assets/icons/Percent.svg";
import Divide from "../../../assets/icons/Divide.svg";
import X from "../../../assets/icons/X.svg";
import Minus from "../../../assets/icons/Minus.svg";
import Plus from "../../../assets/icons/Plus.svg";
import Equals from "../../../assets/icons/Equals.svg";
import PlusMinus from "../../../assets/icons/PlusMinus.svg";

import { valorInicial } from "../../../utils/valorInicialDisplay";

export function Botao({
  estado,
  setEstado,
  valor,
  estilo,
  tipo,
  setDadosBotaoSelecionado,
}) {
  function limparMemoria() {
    setEstado({ ...valorInicial })
  }

  function adicionarDigito(valor) {
    if (valor === "." && estado?.valorDoDisplay?.includes(".")) {
      return;
    }
    if (estado?.valorDoDisplay?.length > 5) {
      return;
    }

    const limparDisplay = estado?.valorDoDisplay === 0 || estado?.limparDisplay || estado?.valorDoDisplay === '0';
    const valorAtual = limparDisplay ? "" : estado?.valorDoDisplay;
    const valorDoDisplay = valorAtual + valor;
    const atualmente = estado?.atualmente
    setEstado({ valorDoDisplay, limparDisplay: false, atualmente });

    // if (valor !== ".") {

    //   const index = estado?.atualmente;
    //   const novoValor = parseFloat(valorDoDisplay);
    //   const valores = [...estado?.valores];
    //   valores[index] = novoValor;
    //   setEstado({ valorDoDiplay: estado?.valorDoDiplay, limparDisplay, valores: valores, atualmente });
    // }
  }

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

    case ",":
      return (
        <button
          onClick={() => adicionarDigito(tipo)}
          className={`estilo-${estilo}`}
        >
          {valor}
        </button>
      );

    case "C":
      return (
        <button
          onClick={() => limparMemoria()}
          className={`estilo-${estilo}`}
        >
          {valor}
        </button>
      );

    default:
      return (
        <button
          onClick={() => adicionarDigito(valor)}
          className={`estilo-${estilo}`}
        >
          {valor}
        </button>
      );
  }
}
