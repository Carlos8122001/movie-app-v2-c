import { OptionsFetch } from "../../types/Types";

const options: OptionsFetch = {
  method: "GET",
  headers: {
    accept: "application/json",
    Authorization:
      "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJlOWE5NzRiNmE0NmEwMDkwMWJmNzQwMDIyYmI1M2YzMyIsInN1YiI6IjY1NzVmOGM3NGJmYTU0MDEzODdmYTViNSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.Z3Bf_O6uoPis0PpGsGiox1L6Fgsnax-20RI9Wv-tj6I",
  },
};

export const GetFetch = (url: string) => {
  return fetch(url, options).then((response) => {
    if (response.status === 200) {
      return response.json();
    } else {
      return response.text();
    }
  });
};
