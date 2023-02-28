import "./seletorPlayer.style.css";

export function SeletorPlayer({ setSeletor }) {
  return (
    <div className="tipo_player">
      <div className="tipo_player_coluna">
        <button onClick={() => setSeletor(1)} className="seletor_player tipo-1"></button>
      </div>
      <div className="tipo_player_coluna">
        <button onClick={() => setSeletor(2)} className="seletor_player tipo-2"></button>
        <button onClick={() => setSeletor(3)} className="seletor_player tipo-3"></button>
      </div>
    </div>
  );
}
