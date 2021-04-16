export const ALT_URL = "https://aiko-olhovivo-proxy.aikodigital.io";

export function GET_POSICAO() {
  return {
    url: ALT_URL + "/Posicao",
    options: {
      method: "GET",
    },
  };
}
