import {
  getTmdbConfiguration,
  TmdbConfigDetails,
} from "@/app/_services/tmdb/configuration";
import { getMovieById } from "@/app/_services/tmdb/movies";
import Image from "next/image";

export default async function SelectedMovie({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = await params;
  console.log("haciendo fetch");
  const movieRes = await getMovieById(id);
  const movie = await movieRes.json();
  const tmbdDetailsRes = await getTmdbConfiguration({ which: "details" });
  const tmdbDetailsData = (await tmbdDetailsRes.json()) as TmdbConfigDetails;

  console.log(movie, tmdbDetailsData);

  return (
    <>
      <section>
        <Image
          src={`${tmdbDetailsData.images.secure_base_url}${tmdbDetailsData.images.backdrop_sizes[1]}${movie.backdrop_path}`}
          alt={movie.title}
          width={500}
          height={300}
          priority
          style={{ width: "100%", height: "auto" }}
        />
        <p>content</p>
      </section>
    </>
  );
}
