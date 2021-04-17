import React from "react";
import { GET_POSICAO } from "./api";
import Mapa from "./components/Mapa";

function App() {
  const [data, setData] = React.useState([]);

  React.useEffect(() => {
    puxarPosicao();
  }, []);

  function puxarPosicao() {
    const { url, options } = GET_POSICAO();
    fetch(url, options)
      .then((r) => r.json())
      .then((json) => setData(json.l));
  }

  return (
    <div>
      <Mapa data={data} />
      {/* {data != null &&
        data.l.map((item) => (
          <p>
            {item.vs.map((posicao) => (
              <div>
                <p>Posição X: {posicao.px}</p>
                <p>Posição Y: {posicao.py}</p>
              </div>
            ))}
          </p>
        ))} */}
    </div>
  );
}

export default App;
