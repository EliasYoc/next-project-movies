import { getTmdbConfiguration } from "@/app/_services/tmdb/configuration";
import { getMovieById } from "@/app/_services/tmdb/movies";
import Cover from "../_components/cover";

export default async function SelectedMovie({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = await params;
  console.log("haciendo fetch");
  const movie = await getMovieById(id);

  const tmdbDetailsData = await getTmdbConfiguration({ which: "details" });

  console.log(movie, tmdbDetailsData);
  const { backdrop_path, title } = movie;

  return (
    <>
      <Cover
        movieTitle={title}
        portraitSrc={`${tmdbDetailsData.images.secure_base_url}${tmdbDetailsData.images.backdrop_sizes[1]}${backdrop_path}`}
      />
    </>
  );
}
