import "./tabelaBotoes.style.css";

import DefaultCursor from "../../../assets/icons/defaultCursor.svg";
import DisabledCursor from "../../../assets/icons/disabledCursor.svg";
import LoadingCursor from "../../../assets/icons/loadingCursor.svg";
import MovableCursor from "../../../assets/icons/movableCursor.svg";
import Loading from "../../../assets/icons/loading.svg";
import Vetor from "../../../assets/icons/vetor.svg";

export function TabelaBotoes({ setTipoBotao }) {
  return (
    <table className="tabela-botoes_content" cellSpacing="0" cellPadding="0">
      <thead>
        <tr>
          <th></th>
          <th>BOTÃO PRIMÁRIO</th>
          <th>BOTÃO SECUNDÁRIO</th>
          <th>BOTÃO TERCIÁRIO</th>
          <th>CURSOR</th>
        </tr>
      </thead>

      <tbody>
        <tr>
          <td>DEFAULT</td>
          <td className="btn-bg-area">
            <button onClick={() => setTipoBotao("default")} className="btn">
              DEFAULT PRIMARY
            </button>
          </td>
          <td className="btn-bg-area">
            <button
              onClick={() => setTipoBotao("default")}
              className="btn btn-sec"
            >
              DEFAULT SECONDARY
            </button>
          </td>
          <td className="btn-bg-area">
            <button
              onClick={() => setTipoBotao("default")}
              className="btn btn-ter"
            >
              DEFAULT TERTIARY
            </button>
          </td>
          <td className="btn-bg-area">
            <img src={DefaultCursor} alt="Cursor" />
          </td>
        </tr>

        <tr>
          <td>HOVER</td>
          <td className="btn-bg-area">
            <button
              onClick={() => setTipoBotao("hover")}
              className="btn btn-hover"
            >
              HOVER PRIMARY
            </button>
          </td>
          <td className="btn-bg-area">
            <button
              onClick={() => setTipoBotao("hover")}
              className="btn btn-sec btn-sec-hover"
            >
              HOVER SECONDARY
            </button>
          </td>
          <td className="btn-bg-area">
            <button
              onClick={() => setTipoBotao("hover")}
              className="btn btn-ter"
            >
              HOVER TERTIARY
            </button>
          </td>
          <td className="btn-bg-area">
            <img src={DefaultCursor} alt="Cursor" />
          </td>
        </tr>
        <tr>
          <td>FOCUS</td>
          <td className="btn-bg-area">
            <button
              onClick={() => setTipoBotao("focus")}
              className="btn btn-foc"
            >
              FOCUS PRIMARY
            </button>
          </td>
          <td className="btn-bg-area">
            <button
              onClick={() => setTipoBotao("focus")}
              className="btn btn-sec btn-foc"
            >
              FOCUS SECONDARY
            </button>
          </td>
          <td className="btn-bg-area">
            <button
              onClick={() => setTipoBotao("focus")}
              className="btn btn-ter btn-foc"
            >
              FOCUS TERTIARY
            </button>
          </td>
          <td className="btn-bg-area">
            <img src={DefaultCursor} alt="Cursor" />
          </td>
        </tr>
        <tr>
          <td>DISABLED</td>
          <td className="btn-bg-area">
            <button
              onClick={() => setTipoBotao("disabled")}
              className="btn btn-disabled"
            >
              DISABLED PRIMARY
            </button>
          </td>
          <td className="btn-bg-area">
            <button
              onClick={() => setTipoBotao("disabled")}
              className="btn btn-sec btn-disabled"
            >
              DISABLED SECONDARY
            </button>
          </td>
          <td className="btn-bg-area">
            <button
              onClick={() => setTipoBotao("disabled")}
              className="btn btn-ter btn-disabled"
            >
              DISABLED TERTIARY
            </button>
          </td>
          <td className="btn-bg-area">
            <img src={DisabledCursor} alt="Cursor" />
          </td>
        </tr>
        <tr>
          <td>LOADING</td>
          <td className="btn-bg-area">
            <button onClick={() => setTipoBotao("loading")} className="btn">
              <img src={Loading} alt="" /> LOADING PRIMARY
            </button>
          </td>
          <td className="btn-bg-area">
            <button
              onClick={() => setTipoBotao("loading")}
              className="btn btn-sec"
            >
              <img src={Loading} alt="" /> LOADING SECONDARY
            </button>
          </td>
          <td className="btn-bg-area">
            <button
              onClick={() => setTipoBotao("loading")}
              className="btn btn-ter"
            >
              <img src={Loading} alt="" /> LOADING TERTIARY
            </button>
          </td>
          <td className="btn-bg-area">
            <img src={LoadingCursor} alt="Cursor" />
          </td>
        </tr>
        <tr>
          <td>MOVABLE</td>
          <td className="btn-bg-area">
            <button onClick={() => setTipoBotao("movable")} className="btn">
              <img src={Vetor} alt="" /> MOVABLE PRIMARY
            </button>
          </td>
          <td className="btn-bg-area">
            <button
              onClick={() => setTipoBotao("movable")}
              className="btn btn-sec"
            >
              <img src={Vetor} alt="" /> MOVABLE SECONDARY
            </button>
          </td>
          <td className="btn-bg-area">
            <button
              onClick={() => setTipoBotao("movable")}
              className="btn btn-ter"
            >
              <img src={Vetor} alt="" /> MOVABLE TERTIARY
            </button>
          </td>
          <td className="btn-bg-area">
            <img src={MovableCursor} alt="Cursor" />
          </td>
        </tr>
      </tbody>
    </table>
  );
}
