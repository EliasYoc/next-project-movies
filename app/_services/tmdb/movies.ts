export interface IMovieSearchParams {
  append_to_response?: string;
  language: `${string}-${string}`;
}

const defaultSearchParams: IMovieSearchParams = {
  language: "en-US",
};

export const getMovieById = (
  id: string,
  searchParams: IMovieSearchParams = defaultSearchParams
): Promise<Response> => {
  const searchParamTuple = Object.entries(searchParams);
  const stringSearchParams = new URLSearchParams(searchParamTuple).toString();
  return fetch(
    `${process.env.NEXT_PUBLIC_BASE_URL_TMDB}/movie/${id}?${stringSearchParams}`,
    {
      headers: {
        Authorization: `Bearer ${process.env.NEXT_PUBLIC_ACCESS_TOKEN_TMDB}`,
      },
      cache: "force-cache",
    }
  );
};
