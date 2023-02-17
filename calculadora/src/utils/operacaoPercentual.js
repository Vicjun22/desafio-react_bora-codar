export function operacaoPercentual({ estado, setEstado }) {

  const percentual = (estado?.valorNoDisplay / 100)

    if (estado?.arrayAtual === undefined || estado?.arrayAtual === 0) {

      if (percentual.toString().length > 10 || estado?.valorNoDisplay === "MAX") {
        return setEstado({ ...estado, valorNoDisplay: "MAX"})
      } else {
        setEstado({
          ...estado, valorNoDisplay: percentual, valores: [percentual, estado?.valores[1]]
        })
      }

      } else {

        if (percentual.toString().length > 10 || estado?.valorNoDisplay === "MAX") {
          return setEstado({ ...estado, valorNoDisplay: "MAX", valores: [estado?.valores[0], "MAX"]})
        } else {
          setEstado({
            ...estado, valorNoDisplay: percentual, valores: [estado?.valores[0], percentual]
        })
        }

      }
}