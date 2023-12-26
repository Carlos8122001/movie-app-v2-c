import { OptionsFetch } from "../../types/Types";

const API_KEY: string = import.meta.env.VITE_API_KEY;

const options: OptionsFetch = {
  method: "GET",
  headers: {
    accept: "application/json",
    Authorization: `${API_KEY}`,
  },
};

export const getFecht = async (api: string, params?: number | string) => {
  const response = await fetch(`${api + params}`, options);
  if (response.status === 200) {
    return response.json();
  } else {
    return response.text();
  }
};
