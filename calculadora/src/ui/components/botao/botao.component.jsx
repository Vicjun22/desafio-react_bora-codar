import "./botao.style.css"

export function Botao({ valor, estilo }) {

    return (
        <div className={ `estilo-${estilo}` }>
            { valor }
        </div>
    )
}