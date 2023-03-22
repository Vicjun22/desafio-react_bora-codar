import "./tipoReprodutor.style.css";

import { PlayerButton } from "../index.js";

import Wallpaper from "../../../assets/img/img.svg";
import { useState } from "react";

export function TipoReprodutor({ seletor }) {

  const tempoTotalDaMusica = 212;

  const [valorInputRange, setValorInputRange] = useState(0);

  function conversorSegundosEmTempo(tempoEmSegundos) {
    const dateObj = new Date(tempoEmSegundos * 1000);
    const minutos = dateObj.getUTCMinutes();
    const segundos = dateObj.getSeconds();

    const tempoEmString =
      minutos.toString().padStart(2, "0") +
      ":" +
      segundos.toString().padStart(2, "0");

    return tempoEmString;
  }

  function handleSetTempoDeReproducao(event) {
    const valor = event.target.value
    const percentual = (valor * 100) / tempoTotalDaMusica
    console.log(percentual.toFixed(0).toString().concat("%"))
    setValorInputRange(valor)
    document.documentElement.style.setProperty('--percentualPercorrido', percentual.toFixed(0).toString().concat("%"))
  }

  const reprodutor = {
    1: {
      imagem: Wallpaper,
      titulo: "Acorda Devinho",
      autor: "Banda Rocketseat",
      tempoTotal: tempoTotalDaMusica,
      tempoPercorrido: valorInputRange,
      tempoRestante: tempoTotalDaMusica - valorInputRange,
      height: "500px",
      width: "300px",
    },
    2: {
      imagem: Wallpaper,
      titulo: "Acorda Devinho",
      autor: "Banda Rocketseat",
      tempoTotal: tempoTotalDaMusica,
      tempoPercorrido: valorInputRange,
      tempoRestante: tempoTotalDaMusica - valorInputRange,
      height: "350px",
      width: "450px",
    },
    3: {
      imagem: Wallpaper,
      titulo: "Acorda Devinho",
      autor: "Banda Rocketseat",
      height: "250px",
      width: "450px",
    },
  };

  return (
    <div
      style={{
        height: reprodutor[seletor].height,
        width: reprodutor[seletor].width,
        padding: seletor === 3 ? "15px 50px" : "50px",
        display: "flex",
        flexDirection: "column",
        justifyContent: "space-evenly",
      }}
      className="player-style"
    >
      <div className={`reprodutor-tipo_${seletor}`} >
        <img
          style={seletor === 1 ? { width: "100%" } : { width: "25%" }}
          src={reprodutor[seletor].imagem}
          alt="Imagem Álbum"
        />

        <div className={`reprodutor-tipo_${seletor}-info`} >
          <h3>{reprodutor[seletor].titulo}</h3>
          <p>{reprodutor[seletor].autor}</p>
        </div>
      </div>

      <PlayerButton />

      <input 
          type="range" 
          value={valorInputRange} 
          onChange={(e) => handleSetTempoDeReproducao(e)} 
          min="0" 
          max={tempoTotalDaMusica} 
          step="1" 
      />

      {seletor !== 3 ? (
        <div
          style={{
            width: "100%",
            height: "10px",
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
          }}
        >
          <p style={{ height: "100%" }}>
            {conversorSegundosEmTempo(reprodutor[seletor].tempoPercorrido)}
          </p>
          <p style={{ height: "100%" }}>
            {conversorSegundosEmTempo(reprodutor[seletor].tempoTotal)}
          </p>
        </div>
      ) : null}
    </div>
  );
}
