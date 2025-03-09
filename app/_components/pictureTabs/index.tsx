import { MediaType, TMDBTheShowsImages } from "@/app/_services/tmdb/types";
import Tabs from "../tabs";
import { getImagesFrom } from "@/app/_services/tmdb/sharedEndpoints";

export default async function PictureTabs({
  id,
  mediaType = "movie",
}: {
  id: string;
  mediaType: MediaType;
}) {
  const images = await getImagesFrom<TMDBTheShowsImages>(mediaType, id);
  console.log("images", images);
  return (
    <Tabs
      panels={[
        { id: "posters", tabTitle: "Posters", panel: "Posters" },
        { id: "logos", tabTitle: "Logos", panel: "Logos" },
        { id: "backdrops", tabTitle: "Backdrops", panel: "Backdrops" },
      ]}
    />
  );
}
