import { MovieDetail } from "@/app/_services/tmdb/types";

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
  const searchParamTuple = Object.entries(searchParams);
  const stringSearchParams = new URLSearchParams(searchParamTuple).toString();
  const res = await fetch(
    `${process.env.NEXT_PUBLIC_BASE_URL_TMDB}/movie/${id}?${stringSearchParams}`,
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
