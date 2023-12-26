export type NavButoms = {
  name: string;
  link: string;
};

export type NavItems = NavButoms[];

export type OptionsFetch = {
  method: "GET";
  headers: {
    accept: string;
    Authorization: string;
  };
};

export type ParamsFetch = {
  api: string;
  page?: number;
  query?: string;
};

export type QuizParams = {
  id: string;
};

export type CategoriesMovies = {
  id: number;
  name: string;
};

export type TrailerMovies = {
  iso_639_1: string;
  iso_3166_1: string;
  name: string;
  key: string;
  site: string;
  size: number;
  type: string;
  official: boolean;
  published_at: string;
  id: string;
};

export type HandlePage = {
  Next: (event: React.MouseEvent<HTMLButtonElement>) => void;
  Prev: (event: React.MouseEvent<HTMLButtonElement>) => void;
  PageStatus: number;
};
