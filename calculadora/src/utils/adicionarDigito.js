export function adicionarDigito({ valor, estado, setEstado }) {
  // setEstado({valorNoDisplay: valor, limparDisplay: false, operacao: null})
    if (valor === "," && estado?.valorNoDisplay?.includes(",")) {
      return;
    }
    // if (estado?.valorNoDisplay?.length > 8) {
    //   return;
    // }

    const limparDisplay = estado?.valorNoDisplay == 0 && valor !== "," || estado?.limparDisplay;
    const valorAtual = limparDisplay ? "" : estado.valorNoDisplay;
    const valorNoDisplay = valorAtual + valor;
    
    setEstado({ 
      valorNoDisplay, 
      limparDisplay: estado?.limparDisplay, 
      operacao: estado?.operacao, 
      valores: estado?.valores, 
      arrayAtual: estado?.arrayAtual
     });
    
    // if (valor !== ".") {

    //   const index = estado?.atualmente;
    //   const novoValor = parseFloat(valorNoDisplay);
    //   const valores = [...estado?.valores];
    //   valores[index] = novoValor;
    //   setEstado({ valorDoDiplay: estado?.valorDoDiplay, limparDisplay, valores: valores, atualmente });
    // }
  }