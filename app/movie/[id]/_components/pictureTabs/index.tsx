import { MediaType, TMDBTheShowsImages } from "@/app/_services/tmdb/types";
import Tabs from "../../../../_components/tabs";
import { getImagesFrom } from "@/app/_services/tmdb/sharedEndpoints";
import { arrayToMatrix } from "@/app/_lib/utils";
import PostersPanel from "../postersPanel";
import { getTmdbConfiguration } from "@/app/_services/tmdb/configuration";
import LogosPanel from "../logosPanel";
import BackdropsPanel from "../backdropsPanel";

export default async function PictureTabs({
  id,
  mediaType = "movie",
}: {
  id: string;
  mediaType: MediaType;
}) {
  const { posters, logos, backdrops } = await getImagesFrom<TMDBTheShowsImages>(
    mediaType,
    id
  );
  const tmdbDetailsData = await getTmdbConfiguration({ which: "details" });
  console.log(tmdbDetailsData);
  const columns = 3;
  const postersInColumns = arrayToMatrix(posters, columns);
  const logosInColumns = arrayToMatrix(logos, columns);
  const backdropsInColumns = arrayToMatrix(backdrops, columns);

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
        {
          id: "logos",
          tabTitle: "Logos",
          panel: (
            <LogosPanel
              tmdbDetailsData={tmdbDetailsData}
              logosMatrix={logosInColumns}
              columnsLength={columns}
            />
          ),
        },
        {
          id: "backdrops",
          tabTitle: "Backdrops",
          panel: (
            <BackdropsPanel
              tmdbDetailsData={tmdbDetailsData}
              backdropsMatrix={backdropsInColumns}
              columnsLength={columns}
            />
          ),
        },
      ]}
    />
  );
}
