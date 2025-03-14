import { MediaType, TMDBTheShowsImages } from "@/app/_services/tmdb/types";
import Tabs from "../../../../_components/tabs";
import { getImagesFrom } from "@/app/_services/tmdb/sharedEndpoints";
import { arrayToMatrix } from "@/app/_lib/utils";
import PostersPanel from "../postersPanel";
import { getTmdbConfiguration } from "@/app/_services/tmdb/configuration";

export default async function PictureTabs({
  id,
  mediaType = "movie",
}: {
  id: string;
  mediaType: MediaType;
}) {
  const { posters } = await getImagesFrom<TMDBTheShowsImages>(mediaType, id);
  const tmdbDetailsData = await getTmdbConfiguration({ which: "details" });

  const columns = 3;
  const postersInColumns = arrayToMatrix(posters, columns);

  return (
    <Tabs
      panels={[
        {
          id: "posters",
          tabTitle: "Posters",
          panel: (
            <PostersPanel
              tmdbDetailsData={tmdbDetailsData}
              postersMatrix={postersInColumns}
              columnsLength={columns}
            />
          ),
        },
        { id: "logos", tabTitle: "Logos", panel: "Logos" },
        { id: "backdrops", tabTitle: "Backdrops", panel: "Backdrops" },
      ]}
    />
  );
}
