"use client";
import { getTmdbConfiguration } from "@/app/_services/tmdb/configuration";
import { TheShowImage } from "@/app/_services/tmdb/types";
import WindowVirtualizedItems from "@/app/_components/windowVirtualizedItems";
import Image from "next/image";

export default function BackdropsPanel({
  backdropsMatrix: backdropsMatrix,
  columnsLength,
  tmdbDetailsData,
}: {
  backdropsMatrix: TheShowImage[][];
  columnsLength: number;
  tmdbDetailsData: Awaited<ReturnType<typeof getTmdbConfiguration>>;
}) {
  const srcUrlBase = `${tmdbDetailsData.images.secure_base_url}${tmdbDetailsData.images.backdrop_sizes[0]}`;
  return (
    <>
      <WindowVirtualizedItems
        renderItems={(virtualizer) =>
          virtualizer.getVirtualItems().map((virtualItem) => {
            return (
              <div
                key={virtualItem.key}
                className={`absolute top-0 left-0 w-full grid gap-2 border-2 border-red-400`}
                data-index={virtualItem.index}
                ref={virtualizer.measureElement}
                style={{
                  gridTemplateColumns: `repeat(${columnsLength},1fr)`,
                  // virtualizer.measureElemen se encarga de calcular el tamaño de cada item, y no necesita el height
                  // height: `${virtualItem.size}px`,
                  transform: `translateY(${
                    virtualItem.start - virtualizer.options.scrollMargin
                  }px)`,
                }}
              >
                {backdropsMatrix[virtualItem.index].map((poster) => (
                  <div className="flex items-center" key={poster.file_path}>
                    <Image
                      className="w-full"
                      priority
                      width={300}
                      height={169}
                      src={`${srcUrlBase}${poster.file_path}`}
                      alt="logo movie"
                    />
                  </div>
                ))}
              </div>
            );
          })
        }
        windowVirtualizerOptions={(element) => ({
          count: backdropsMatrix.length,
          estimateSize: () => 415,
          overscan: 2,
          scrollMargin: element ? element.offsetTop : 0,
          gap: 8,
        })}
      />
    </>
  );
}
