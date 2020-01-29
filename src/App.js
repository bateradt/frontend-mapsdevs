import React, { useState, useEffect } from "react";
import "./global.css";
import "./App.css";
import "./Sidebar.css";
import "./Main.css";
import api from "./services/api";
import DevItem from "./components/Devitem";
import DevForm from "./components/DevForm";

//componente : bloco isolado de HTML, CSS e JS, o qual não interfere no restante da aplicação, criar sempre um por arquivo.
//estado : é uma informação mantida pelo componente (conceito de imutabilidade)
//propriedade : informação que um componente pai passsa para um componente filho, passa através de props

//primeira letra sempre Maiuscula na criação de componente
function App() {
  const [devs, setDevs] = useState([]);

  useEffect(() => {
    async function loadDevs() {
      const response = await api.get("/devs");
      setDevs(response.data);
    }
    loadDevs();
  }, []);

  async function handleAddDev(data) {
    const response = await api.post("/devs", data);

    // const response = await api.post("/devs", {
    //   github_username,
    //   techs,
    //   latitude,
    //   longitude
    // });

    //console.log(response.data);
    

    setDevs([...devs, response.data]);
  }

  return (
    <div id="app">
      <aside>
        <strong>Cadastrar</strong>
        <DevForm onSubmit={handleAddDev} />
      </aside>

      <main>
        <ul>
          {devs.map(dev => (
            <DevItem key={dev._id} dev={dev} />
          ))}
        </ul>
      </main>
    </div>
  );
}

export default App;
