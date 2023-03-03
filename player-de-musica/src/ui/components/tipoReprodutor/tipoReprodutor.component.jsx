import "./tipoReprodutor.style.css";

export function TipoReprodutor({ seletor }) {
  const reprodutor = {
    1: [
      {
        imagem: "",
        titulo: "",
        autor: "",
        tempo: "",
        height: "500px",
        width: "300px",
      },
    ],
    2: [
      {
        imagem: "",
        titulo: "",
        autor: "",
        tempo: "",
        height: "350px",
        width: "450px",
      },
    ],
    3: [
      {
        imagem: "",
        titulo: "",
        autor: "",
        tempo: null,
        height: "250px",
        width: "450px",
      },
    ],
  };


  return (
      <div
        style={{
          height: reprodutor[seletor].find((reprodutor) => reprodutor.width)
            .height,
          width: reprodutor[seletor].find((reprodutor) => reprodutor.width)
            .width
        }}
        className="player-style"
      ></div>
  );
}
