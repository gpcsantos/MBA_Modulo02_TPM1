export function currencyFormat(num = 0) {
  //   return `R$ ${currency.toFixed(2)}`;
  return num.toLocaleString("pt-BR", { style: "currency", currency: "BRL" });
}

export function percentFormat(num = 0) {
  return num.toLocaleString("pt-BR", {
    style: "percent",
    minimumFractionDigits: 2,
  });
}
