import React from "react";
import { GET_PARADA_TERMO_BUSCA, GET_POSICAO } from "./api";
import Mapa from "./components/Mapa";

function App() {
  const [dataParada, setDataParada] = React.useState([]);
  const [dataPosicao, setDataPosicao] = React.useState([]);

  React.useEffect(() => {
    puxarParada();
    puxarPosicao();
  }, []);

  function puxarPosicao() {
    const { url, options } = GET_POSICAO();
    fetch(url, options)
      .then((r) => r.json())
      .then((json) => setDataPosicao(json.l));
  }

  function puxarParada() {
    const { url, options } = GET_PARADA_TERMO_BUSCA();
    fetch(url, options)
      .then((r) => r.json())
      .then((json) => setDataParada(json));
  }

  console.log(dataParada);

  return (
    <>
      {dataParada != null && (
        <Mapa dataParada={dataParada} dataPosicao={dataPosicao} />
      )}
    </>
  );
}

export default App;
