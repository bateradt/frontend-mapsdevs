import React, {useState} from "react";
import Header from "./Header";

//componente : bloco isolado de HTML, CSS e JS, o qual não interfere no restante da aplicação, criar sempre um por arquivo.
//estado : é uma informação mantida pelo componente (conceito de imutabilidade)
//propriedade : informação que um componente pai passsa para um componente filho, passa através de props

//primeira letra sempre Maiuscula na criação de componente

function App() {
  const [counter, setCounter] = useState(0);

  function incrementCounter() { 
    setCounter(counter + 1);
  }

  return (
    <>
      <Header title="Dashboard" />
      <Header title="Painel de Controle" />
      <Header title="Relatorios" />

      <h1>Contador : {counter}</h1>
      <button onClick={incrementCounter}>Incrementar</button>
    </>
  );
}

export default App;
