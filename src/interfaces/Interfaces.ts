import { CategoriesMovies, TrailerMovies } from "../types/Types";

export interface ApiResult {
  page: number;
  results: [];
}

export interface ApiMoviesResult {
  adult?: boolean;
  backdrop_path: string;
  genre_ids?: number[];
  id?: number;
  original_language?: string;
  original_title?: string;
  overview?: string;
  popularity?: number;
  poster_path?: string;
  release_date?: string;
  title: string;
  video?: boolean;
  vote_average: number;
  vote_count?: number;
}

export interface ApiVideoResult {
  results: TrailerMovies[];
}

export interface ApiMoviesDetailsResult {
  id: number;
  imdb_id: string;
  original_language: string;
  original_title: string;
  overview: string;
  poster_path: string;
  release_date: string;
  status?: string;
  tagline: string;
  title: string;
  video: boolean;
  vote_average: number;
  vote_count: number;
  genres: CategoriesMovies[];
  videos: ApiVideoResult;
}
