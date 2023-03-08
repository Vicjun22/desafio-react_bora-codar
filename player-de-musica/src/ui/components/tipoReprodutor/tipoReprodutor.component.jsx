import "./tipoReprodutor.style.css";

import { PlayerButton } from "../index.js";

import Wallpaper from "../../../assets/img/img.svg";

export function TipoReprodutor({ seletor }) {
  const tempoTotalDaMusica = 212;
  const tempoPercorridoDaMusica = 200;

  const reprodutor = {
    1: {
      imagem: Wallpaper,
      titulo: "Acorda Devinho",
      autor: "Banda Rocketseat",
      tempoTotal: tempoTotalDaMusica,
      tempoPercorrido: tempoPercorridoDaMusica,
      tempoRestante: tempoTotalDaMusica - tempoPercorridoDaMusica,
      height: "500px",
      width: "300px",
    },
    2: {
      imagem: Wallpaper,
      titulo: "Acorda Devinho",
      autor: "Banda Rocketseat",
      tempoTotal: tempoTotalDaMusica,
      tempoPercorrido: tempoPercorridoDaMusica,
      tempoRestante: tempoTotalDaMusica - tempoPercorridoDaMusica,
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
        display: "flex",
        flexDirection: "column",
        justifyContent: "space-evenly",
      }}
      className="player-style"
    >
      {seletor === 1 ? (
        <>
        <img style={{ width: "200px"}} src={reprodutor[seletor].imagem} alt="Imagem Álbum" />
        
        <div style={{ width: "200px", display: "flex", flexDirection: "column", alignItems: "flex-start", justifyContent: "space-evenly"}}>
          <h2>{reprodutor[seletor].titulo}</h2>
          <h3 style={{ filter: "opacity(0.7)", fontWeight: "normal"}}>{reprodutor[seletor].autor}</h3>
        </div>

        <div style={{ width: "200px", height: "10px", background: "#D9D9D9", opacity: "0.3", borderRadius: "20px" }}>
          <div style={{ width: "10%", height: "100%", background: "#D9D9D9", opacity: "0.8", borderRadius: "20px" }}>

          </div>
        </div>

        </>
      ) : (
        <div
          style={{
            width: "100%",
            display: "flex",
            justifyContent: "space-evenly"
          }}
        >
          <img src={reprodutor[seletor].imagem} style={{ width: "120px" }} alt="Imagem Álbum" />
          <div style={{ display: "flex", flexDirection: "column", alignItems: "flex-start", justifyContent: "space-evenly" }}>
            <h2>{reprodutor[seletor].titulo}</h2>
            <h3 style={{ filter: "opacity(0.7)", fontWeight: "normal"}}>{reprodutor[seletor].autor}</h3>
          </div>
        </div>
      )}

      <PlayerButton />
    </div>
  );
}
