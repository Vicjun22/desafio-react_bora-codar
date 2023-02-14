import "./operacaoSelecionada.style.css";

import Percent from "../../../assets/icons/Percent.svg";
import Divide from "../../../assets/icons/Divide.svg";
import X from "../../../assets/icons/X.svg";
import Minus from "../../../assets/icons/Minus.svg";
import Plus from "../../../assets/icons/Plus.svg";
import Equals from "../../../assets/icons/Equals.svg";
import PlusMinus from "../../../assets/icons/PlusMinus.svg";

export function OperacaoSelecionada({ dadosBotaoSelecionado }) {
  let operacao = dadosBotaoSelecionado?.valor;

  switch (operacao) {
    case "dividir":
      return (
        <img
          src={Divide}
          alt={dadosBotaoSelecionado.valor}
          className="img-operacao-selecionada"
        />
      );

    case "multiplicar":
      return (
        <img
          src={X}
          alt={dadosBotaoSelecionado.valor}
          className="img-operacao-selecionada"
        />
      );

    case "subtrair":
      return (
        <img
          src={Minus}
          alt={dadosBotaoSelecionado.valor}
          className="img-operacao-selecionada"
        />
      );

    case "somar":
      return (
        <img
          src={Plus}
          alt={dadosBotaoSelecionado.valor}
          className="img-operacao-selecionada"
        />
      );

    case "maisMenos":
      return (
        <img
          src={PlusMinus}
          alt={dadosBotaoSelecionado.valor}
          className="img-operacao-selecionada"
        />
      );

    case "percentual":
      return (
        <img
          src={Percent}
          alt={dadosBotaoSelecionado.valor}
          className="img-operacao-selecionada"
        />
      );

    case "igual":
      return (
        <img
          src={Equals}
          alt={dadosBotaoSelecionado.valor}
          className="img-operacao-selecionada"
        />
      );

    default:
      return <span> </span>;
  }
}
