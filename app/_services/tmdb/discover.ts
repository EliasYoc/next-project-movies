//https://developer.themoviedb.org/reference/discover-movie

import { IDiscoverMoviesSeries } from "./types";

interface MovieListSearchParams {
  certification?: string;
  "certification.gte"?: string;
  "certification.lte"?: string;
  certification_country?: string;
  include_adult: boolean;
  include_video: boolean;
  language: `${string}-${string}`;
  page: number;
  sort_by: `${string}.${string}`;
}

const defaultSearchParams: MovieListSearchParams = {
  include_adult: false,
  include_video: false,
  language: "en-US",
  page: 1,
  sort_by: "popularity.desc",
};

export const getMovieList = async (
  searchParams: MovieListSearchParams = defaultSearchParams
) => {
  const searchParamTuple = Object.entries(searchParams);
  const stringSearchParams = new URLSearchParams(searchParamTuple).toString();
  const res = await fetch(
    `${process.env.NEXT_PUBLIC_BASE_URL_TMDB}/discover/movie?${stringSearchParams}`,
    {
      headers: {
        Authorization: `Bearer ${process.env.NEXT_PUBLIC_ACCESS_TOKEN_TMDB}`,
      },
    }
  );
  const data: IDiscoverMoviesSeries = await res.json();
  return data;
};
