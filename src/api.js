export const ALT_URL = "https://aiko-olhovivo-proxy.aikodigital.io";

export function GET_POSICAO() {
  return {
    url: ALT_URL + "/Posicao",
    options: {
      method: "GET",
    },
  };
}

export function GET_PARADAS(paradaBuscada) {
  return {
    url: ALT_URL + `/Parada/Buscar?termosBusca=${paradaBuscada}`,
    options: {
      method: "GET",
    },
  };
}

export function GET_LINHAS(linhaBuscada) {
  return {
    url: ALT_URL + `/Linha/Buscar?termosBusca=${linhaBuscada}`,
    options: {
      method: "GET",
    },
  };
}

export function GET_PREVISAO_PARADA(parada) {
  return {
    url: ALT_URL + ` /Previsao/Parada?codigoParada=${parada}`,
    options: {
      method: "GET",
    },
  };
}
