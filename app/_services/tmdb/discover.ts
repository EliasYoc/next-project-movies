//https://developer.themoviedb.org/reference/discover-movie
export interface IDiscoverMoviesSeries {
  page: number;
  results: IMovieSerieMiniDetail[];
  total_pages: number;
  total_results: number;
}

export interface IMovieSerieMiniDetail {
  adult?: boolean;
  first_air_date?: string;
  backdrop_path: string;
  genre_ids: number[];
  id: number;
  name?: string;
  origin_country?: string[];
  original_language: string;
  original_title?: string;
  original_name?: string;
  overview: string;
  popularity: number;
  poster_path: string;
  release_date?: string;
  title?: string;
  video?: boolean;
  vote_average: number;
  vote_count: number;
}

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

export const getMovieList = (
  searchParams: MovieListSearchParams = defaultSearchParams
): Promise<Response> => {
  const searchParamTuple = Object.entries(searchParams);
  const stringSearchParams = new URLSearchParams(searchParamTuple).toString();
  return fetch(
    `${process.env.NEXT_PUBLIC_BASE_URL_TMDB}/discover/movie?${stringSearchParams}`,
    {
      headers: {
        Authorization: `Bearer ${process.env.NEXT_PUBLIC_ACCESS_TOKEN_TMDB}`,
      },
    }
  );
};
