// https://developer.themoviedb.org/reference/discover-movie
import ShowCard from "../ui/ShowCard";
import { getTmdbConfiguration } from "../../_services/tmdb/configuration";
import { getMovieList } from "../../_services/tmdb/discover";

export default async function MovieList() {
  const movieData = await getMovieList();

  const tmdbDetailsData = await getTmdbConfiguration({ which: "details" });

  return (
    <div className="scrollbar-hidden flex overflow-x-scroll gap-2">
      {movieData.results.map((movie) => (
        <ShowCard
          navigateTo={`/movie/${movie.id}`}
          key={movie.id}
          title={movie.title}
          src={`${tmdbDetailsData.images.secure_base_url}${tmdbDetailsData.images.poster_sizes[2]}${movie.poster_path}`}
        />
      ))}
    </div>
  );
}
