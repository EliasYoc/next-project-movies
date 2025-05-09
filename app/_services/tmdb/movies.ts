import { searchParamsToString } from "@/app/_lib/utils";
import { DiscoverMovies, MovieDetail } from "@/app/_services/tmdb/types";

export interface IMovieSearchParams {
  append_to_response?: string;
  language: `${string}-${string}`;
}

const defaultSearchParams: IMovieSearchParams = {
  language: "es-MX",
};

export const getMovieById = async (
  id: string,
  searchParams: IMovieSearchParams = defaultSearchParams
) => {
  const searchParamsString = searchParamsToString(searchParams);

  const res = await fetch(
    `${process.env.NEXT_PUBLIC_BASE_URL_TMDB}/movie/${id}${searchParamsString}`,
    {
      headers: {
        Authorization: `Bearer ${process.env.NEXT_PUBLIC_ACCESS_TOKEN_TMDB}`,
      },
      cache: "force-cache",
    }
  );
  const data: MovieDetail = await res.json();
  return data;
};

interface RecommendationsSearchParams {
  language: `${string}-${string}`;
  page: number;
}

const defaultRecommendationsSearchParams: RecommendationsSearchParams = {
  language: "en-US",
  page: 1,
};
export const getMovieRecomendations = async (
  id: string,
  searchParams: RecommendationsSearchParams = defaultRecommendationsSearchParams
) => {
  const stringSearchParams = searchParamsToString(searchParams);
  const res = await fetch(
    `${process.env.NEXT_PUBLIC_BASE_URL_TMDB}/movie/${id}/recommendations${stringSearchParams}`,
    {
      headers: {
        Authorization: `Bearer ${process.env.NEXT_PUBLIC_ACCESS_TOKEN_TMDB}`,
      },
    }
  );
  const data: DiscoverMovies = await res.json();
  return data;
};
