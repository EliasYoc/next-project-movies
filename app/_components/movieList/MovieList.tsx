// https://developer.themoviedb.org/reference/discover-movie

import { getTmdbConfiguration } from "../../_services/tmdb/configuration";
import { getMovieList } from "../../_services/tmdb/discover";
import List from "@/app/movie/_components/movieRecommendations/List";

export default async function MovieList({
  title,
  className,
}: {
  title?: string;
  className?: string;
}) {
  const movieData = await getMovieList();

  const tmdbDetailsData = await getTmdbConfiguration({ which: "details" });

  return (
    <section className={`movie-list ${className}`}>
      {title && <h2 className="text-3xl font-semibold">{title}</h2>}
      <List movieData={movieData} tmdbDetailsData={tmdbDetailsData} />
    </section>
  );
}
