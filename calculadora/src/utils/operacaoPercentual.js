export function operacaoPercentual({ estado, setEstado }) {

    if (estado?.arrayAtual === undefined || estado?.arrayAtual === 0) {
        setEstado({
          ...estado, valorNoDisplay: (estado?.valorNoDisplay / 100), valores: [(estado?.valorNoDisplay / 100), estado?.valores[1]]
        }) 
      } else {
        setEstado({
            ...estado, valorNoDisplay: (estado?.valorNoDisplay / 100), valores: [estado?.valores[0], (estado?.valorNoDisplay / 100)]
        })
      }
}