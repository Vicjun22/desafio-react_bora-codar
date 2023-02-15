import { estadoInicial } from "./valorInicialDisplay";

export function limparMemoria({ setEstado }) {
    setEstado({ ...estadoInicial })
}