"use client";
import { Tab, TabGroup, TabList, TabPanel, TabPanels } from "@headlessui/react";
import { ReactNode } from "react";

export default function Tabs({
  onChange,
  panels = [],
}: {
  onChange?: (id: number) => void;
  panels: { id: string; tabTitle: string; panel: ReactNode }[];
}) {
  const tabListClassName = "flex gap-4";
  const tabClassName =
    "rounded-full py-1 px-3 text-sm/6 font-semibold text-white focus:outline-none data-[selected]:bg-white/10 data-[hover]:bg-white/5 data-[selected]:data-[hover]:bg-white/10 data-[focus]:outline-1 data-[focus]:outline-white";

  const panelClassName = "bg-white/5";
  return (
    <TabGroup onChange={onChange}>
      <TabList className={tabListClassName}>
        {panels.map(({ id, tabTitle }) => (
          <Tab key={id} className={tabClassName}>
            {tabTitle}
          </Tab>
        ))}
      </TabList>
      <TabPanels>
        {panels.map(({ id, panel }) => (
          <TabPanel key={id} className={panelClassName}>
            {panel}
          </TabPanel>
        ))}
      </TabPanels>
    </TabGroup>
  );
}
