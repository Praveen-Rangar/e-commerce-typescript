import axios from "axios";

export const productList = () => {
  return axios
    .get("https://myeasykart.codeyogi.io/products")
    .then((response) => response.data);
};

export const productAPI = (id: number) => {
  return axios
    .get("https://myeasykart.codeyogi.io/product/" + id)
    .then((response) => response.data);
};

export const nextpgeapi = async (page: number) => {
  const response = await fetch(
    `https://myeasykart.codeyogi.io/products/?page=${page}`
  );
  const data = await response.json();
  return data;
};
