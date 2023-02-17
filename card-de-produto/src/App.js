import "./App.css";

import { Produto } from './ui/screens/index';
import loja from "./utils/produtos.json";

export function App() {
  
  // Para este projeto, será utilizado o produto cujo código seja "42404".
  // É possível adicionar mais produtos em "./utils/produtos.json".

  const codigoDoProduto = "42404";

  return (
    <div className="App">
      <Produto
        produto={loja.produtos.find(produto => produto.codigo === codigoDoProduto)}
      />
    </div>
  );
}
