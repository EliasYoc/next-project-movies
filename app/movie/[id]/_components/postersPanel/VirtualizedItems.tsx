"use client";
import Poster from "@/app/_components/ui/Poster";
import { TheShowImage } from "@/app/_services/tmdb/types";
import {
  PartialKeys,
  useWindowVirtualizer,
  VirtualizerOptions,
} from "@tanstack/react-virtual";
import { useRef } from "react";
// https://tanstack.com/virtual/latest/docs/framework/react/examples/dynamic
// https://tanstack.com/virtual/latest/docs/framework/react/examples/window

export default function VirtualizedItems({
  list,
  columnsLength,
  srcUrlBase,
  windowVirtualizerOptions,
}: {
  list: TheShowImage[][];
  columnsLength: number;
  srcUrlBase: string;
  windowVirtualizerOptions: (
    listElement: HTMLDivElement | null
  ) => PartialKeys<
    VirtualizerOptions<Window, Element>,
    | "getScrollElement"
    | "observeElementRect"
    | "observeElementOffset"
    | "scrollToFn"
  >;
}) {
  const refList = useRef<HTMLDivElement>(null);
  const virtualizer = useWindowVirtualizer(
    windowVirtualizerOptions(refList.current)
  );

  return (
    <>
      <div
        ref={refList}
        className="list relative w-full"
        style={{
          height: `${virtualizer.getTotalSize()}px`,
        }}
      >
        {virtualizer.getVirtualItems().map((virtualItem) => {
          return (
            <div
              key={virtualItem.key}
              className={`absolute top-0 left-0 w-full grid gap-2 border-2 border-red-400 pb-2`}
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
              {list[virtualItem.index].map((poster) => (
                <Poster
                  title={virtualItem.index + 1}
                  layoutClassName={`w-auto`}
                  key={poster.file_path}
                  src={`${srcUrlBase}${poster.file_path}`}
                />
              ))}
            </div>
          );
        })}
      </div>
    </>
  );
}
