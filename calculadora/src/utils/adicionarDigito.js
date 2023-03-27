export function adicionarDigito({ valor, estado, setEstado }) {
    if (valor === "," && estado?.valorNoDisplay?.includes(",")) {
      return;
    }

    if (estado?.valores[0].toString().length > 8 && estado?.arrayAtual === 0) {
      return;
    } else if (estado?.valores[1].toString().length > 8) {
      return;
    }
    
    if (estado?.valores[0].toString().length > 10) {
      return setEstado({ ...estado, valorNoDisplay: "MAX"})
    }

    const limparDisplay = ((estado?.valorNoDisplay === "0") || ((estado?.valorNoDisplay === (-0)) && valor !== ",")) 
        || estado?.limparDisplay;

    const valorAtual = limparDisplay ? "" : estado.valorNoDisplay;
    const valorNoDisplay = valorAtual + valor;

      const index = estado?.arrayAtual;
      const novoValor = parseFloat(valorNoDisplay);
      const valores = [...estado?.valores];
      valores[index] = novoValor;
      
      setEstado({ 
        valorNoDisplay, 
        limparDisplay: false, 
        operacao: estado?.operacao, 
        valores: valores,
        arrayAtual: estado?.arrayAtual
       });
  }