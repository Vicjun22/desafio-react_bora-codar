import "./player.style.css";

import { SeletorPlayer, TipoReprodutor } from "../../components/index.js";
import { useState } from "react";

export function Player() {
  const [seletor, setSeletor] = useState(1);
  return (
    <div className="player_container">
      <SeletorPlayer setSeletor={setSeletor} />
      
      <TipoReprodutor seletor={seletor} />
    </div>
  );
}
