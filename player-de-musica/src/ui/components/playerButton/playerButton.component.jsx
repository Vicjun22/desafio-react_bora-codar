import "./playerButton.style.css";

import Back from "../../../assets/icons/play-back.svg";
import Play from "../../../assets/icons/play.svg";
import Forward from "../../../assets/icons/play-forward.svg";

export function PlayerButton() {
  return (
    <div
      style={{
        height: "30px",
        width: "200px",
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between",
      }}
    >
      <button className="player_button">
        <img src={Back} alt="Anterior" />
      </button>
      <button className="player_button">
        <img src={Play} alt="Reproduzir" />
      </button>
      <button className="player_button">
        <img src={Forward} alt="Próximo" />
      </button>
    </div>
  );
}
