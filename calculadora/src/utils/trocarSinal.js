export function trocarSinal({ estado, setEstado }) {
    if (estado?.arrayAtual === 0) {
      setEstado({
        ...estado, 
        valorNoDisplay: estado?.valorNoDisplay * (-1),
        valores: [estado?.valores[0] * (-1), estado?.valores[1]]
      }) 
    } else {
      setEstado({
        ...estado, 
        valorNoDisplay: estado?.valorNoDisplay * (-1),
        valores: [estado?.valores[0], estado?.valores[1] * (-1)]
      }) 
    }
  }