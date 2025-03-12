"use client";

import {
  PartialKeys,
  useWindowVirtualizer,
  Virtualizer,
  VirtualizerOptions,
} from "@tanstack/react-virtual";
import { ReactNode, useRef } from "react";
// https://tanstack.com/virtual/latest/docs/framework/react/examples/dynamic
// https://tanstack.com/virtual/latest/docs/framework/react/examples/window

export default function VirtualizedItems({
  windowVirtualizerOptions,
  renderItems,
}: {
  windowVirtualizerOptions: (
    listElement: HTMLDivElement | null
  ) => PartialKeys<
    VirtualizerOptions<Window, Element>,
    | "getScrollElement"
    | "observeElementRect"
    | "observeElementOffset"
    | "scrollToFn"
  >;
  renderItems: (virtualizer: Virtualizer<Window, Element>) => ReactNode;
}) {
  const refList = useRef<HTMLDivElement>(null);
  const virtualizer = useWindowVirtualizer(
    windowVirtualizerOptions(refList.current)
  );

  return (
    <div
      ref={refList}
      className="list relative w-full"
      style={{
        height: `${virtualizer.getTotalSize()}px`,
      }}
    >
      {renderItems(virtualizer)}
    </div>
  );
}
