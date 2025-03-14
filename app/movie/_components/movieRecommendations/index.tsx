//https://developer.themoviedb.org/reference/movie-recommendations
import { getTmdbConfiguration } from "@/app/_services/tmdb/configuration";
import { getMovieRecomendations } from "@/app/_services/tmdb/movies";
import List from "./List";

export default async function MovieRecommendations({
  title,
  className = "",
  movieId,
}: {
  title?: string;
  className?: string;
  movieId: string;
}) {
  const movieData = await getMovieRecomendations(movieId);

  const tmdbDetailsData = await getTmdbConfiguration({ which: "details" });

  return (
    <section className={`movie-list ${className}`}>
      {title && <h2 className="text-3xl font-semibold">{title}</h2>}
      <List movieData={movieData} tmdbDetailsData={tmdbDetailsData} />
    </section>
  );
}
