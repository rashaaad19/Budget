export const currencyFormatter = (number) => {
  return new Intl.NumberFormat("en-IN", {
    style: "currency",
    currency: "EGP",
  }).format(number);
};

export const generateId = () => {
  return Math.floor(Math.random() * 1000);
};
