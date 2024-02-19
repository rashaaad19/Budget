export const currencyFormatter = (number) => {
  return new Intl.NumberFormat("en-IN", {
    style: "currency",
    currency: "EGP",
  }).format(number);
};
