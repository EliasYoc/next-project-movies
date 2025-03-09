import { searchParamsToString } from "@/app/_lib/utils";
import { MediaType } from "./types";

interface DefaultSearchParams {
  include_image_language?: string;
  language: `${string}-${string}`;
}

const defaultSearchParams: DefaultSearchParams = {
  language: "es-MX",
};

// https://developer.themoviedb.org/reference/tv-series-images
// https://developer.themoviedb.org/reference/movie-images
export const getImagesFrom = async <T>(
  mediaType: MediaType = "movie",
  id: string,
  searchParams = defaultSearchParams
) => {
  const searchParamsString = searchParamsToString(searchParams);
  const res = await fetch(
    `${process.env.NEXT_PUBLIC_BASE_URL_TMDB}/${mediaType}/${id}/images?${searchParamsString}`,
    {
      headers: {
        Authorization: `Bearer ${process.env.NEXT_PUBLIC_ACCESS_TOKEN_TMDB}`,
      },
    }
  );
  const data: T = await res.json();
  return data;
};
