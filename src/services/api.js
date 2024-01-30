import axios from "axios";

export const api = axios.create({
    baseURL: "https://viacep.com.br/ws/"
});

export const apiSheetDb = axios.create({
    baseURL:"https://sheetdb.io/api/v1/to75nnr9j5812"
});