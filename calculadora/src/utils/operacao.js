import { estadoInicial } from "./index";

export function operacao({ valor, estado, setEstado }) {
  // TODO: Melhoria: mudar a operacao quando necessario sem precisar refazer o calculo

  if (estado?.arrayAtual === 0) {
    setEstado({
      valorNoDisplay: estado?.valorNoDisplay,
      limparDisplay: true,
      operacao: valor,
      valores: estado?.valores,
      arrayAtual: 1,
    });
  } else {
    const operacaoAtual = estado?.operacao;

    const valor = [...estado?.valores];
    switch (operacaoAtual) {
      case "somar":
        valor[0] = valor[0] + valor[1];
        valor[1] = 0;
        if ( valor[0].toString().length > 10) {
          return setEstado({ ...estado, valorNoDisplay: "MAX"})
        }
        break;

      case "subtrair":
        valor[0] = valor[0] - valor[1];
        valor[1] = 0;
        if ( valor[0].toString().length > 10) {
          return setEstado({ ...estado, valorNoDisplay: "MAX"})
        }
        break;

      case "multiplicar":
        valor[0] = valor[0] * valor[1];
        valor[1] = 0;
        if ( valor[0].toString().length > 10) {
          return setEstado({ ...estado, valorNoDisplay: "MAX"})
        }
        break;

      case "dividir":
        valor[0] = valor[0] / valor[1];
        valor[1] = 0;
        if ( valor[0].toString().length > 10) {
          return setEstado({ ...estado, valorNoDisplay: "MAX"})
        }
        break;

      default:
        setEstado({ ...estadoInicial });
    }

    setEstado({
      valorNoDisplay: valor[0],
      limparDisplay: !"igual",
      operacao: "igual" ? "igual" : operacao,
      valores: [valor[0], valor[1]],
      arrayAtual: 0,
    });
  }
}
