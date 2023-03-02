import "./player.style.css";

import { SeletorPlayer, TipoReprodutor } from "../../components/index.js";
import { useState } from "react";

import Music from "../../../assets/music/Moonlight Sonata 3rd Movement.mp3";

export function Player() {
  const [seletor, setSeletor] = useState(1);
  return (
    <div className="player_container">
      <SeletorPlayer setSeletor={setSeletor} />
      
      <TipoReprodutor seletor={seletor} />

      {/* <audio controls>
        <source src={Music} type="audio/ogg" />
        Your browser does not support the audio element.
      </audio> */}
    </div>
  );
}
