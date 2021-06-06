import axios from "axios";
import React from "react";
import { GET_PARADA_TERMO_BUSCA, GET_POSICAO, TOKEN_POST } from "./api";
import Mapa from "./components/Mapa";
import Sidebar from "./components/Sidebar/Sidebar";

function App() {
  const [dataParada, setDataParada] = React.useState([]);
  const [dataPosicao, setDataPosicao] = React.useState([]);

  React.useEffect(() => {
    autho();
    puxarParada();
    puxarPosicao();
  }, []);

  function autho() {
    const { url, options } = TOKEN_POST();
    axios.post(url, options);
  }

  function puxarPosicao() {
    const { url, options } = GET_POSICAO();
    fetch(url, options)
      .then((r) => r.json())
      .then((json) => json != null && setDataPosicao(json.l));
  }

  function puxarParada() {
    const { url, options } = GET_PARADA_TERMO_BUSCA();
    fetch(url, options)
      .then((r) => r.json())
      .then((json) => setDataParada(json));
  }

  return (
    <div className="container">
      <Sidebar />
      {dataParada != null && (
        <Mapa dataParada={dataParada} dataPosicao={dataPosicao} />
      )}
    </div>
  );
}

export default App;
