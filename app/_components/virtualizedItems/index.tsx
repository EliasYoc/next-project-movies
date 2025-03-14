"use client";
import {
  PartialKeys,
  useVirtualizer,
  Virtualizer,
  VirtualizerOptions,
} from "@tanstack/react-virtual";
import { ReactNode } from "react";

export default function VirtualizedItems({
  virtualizerOptions,
  renderChildren,
}: {
  virtualizerOptions: PartialKeys<
    VirtualizerOptions<Element, Element>,
    "observeElementRect" | "observeElementOffset" | "scrollToFn"
  >;
  renderChildren: (virtualizer: Virtualizer<Element, Element>) => ReactNode;
  style?: React.CSSProperties;
}) {
  const virtualizer = useVirtualizer(virtualizerOptions);
  return renderChildren(virtualizer);
}
