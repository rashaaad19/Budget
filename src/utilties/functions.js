import { months } from "./variables";

export const currencyFormatter = (number) => {
  return new Intl.NumberFormat("en-IN", {
    style: "currency",
    currency: "EGP",
  }).format(number);
};

export const generateId = () => {
  return Math.floor(Math.random() * 1000);
};

export const getCurrentDate = (date) => {
  return `${date.getDate()} ${months[date.getMonth()]} ${date.getFullYear()}`;
};
