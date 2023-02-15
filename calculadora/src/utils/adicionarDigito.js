export function adicionarDigito({ valor, estado, setEstado }) {
    if (valor === "," && estado?.valorNoDisplay?.includes(",")) {
      return;
    }

    const limparDisplay = (estado?.valorNoDisplay === "0" && valor !== ",") || estado?.limparDisplay;
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