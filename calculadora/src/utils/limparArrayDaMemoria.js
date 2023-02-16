export function limparArrayDaMemoria({ estado, setEstado }) {

    if (estado?.arrayAtual === undefined || estado?.arrayAtual === 0) {
        setEstado({
          ...estado, valorNoDisplay: "", valores: [0, estado?.valores[1]]
        }) 
      } else {
        setEstado({
            ...estado, valorNoDisplay: "", valores: [estado?.valores[0], ""]
        })
      }
}