"use client";
import { Tab, TabGroup, TabList, TabPanel, TabPanels } from "@headlessui/react";
import { ReactNode } from "react";

export default function Tabs({
  onChange,
  panels = [],
  tabListClassName = "",
  tabPanelClassName = "",
  tabClassName = "",
}: {
  onChange?: (id: number) => void;
  panels: { id: string; tabTitle: string; panel: ReactNode }[];
  tabListClassName?: string;
  tabPanelClassName?: string;
  tabClassName?: string;
}) {
  const tabContainerClassName = `flex gap-4 my-4 ${tabListClassName}`;
  const individualTabClassName = `rounded-full py-1 px-3 text-sm/6 font-semibold text-white focus:outline-none data-[selected]:bg-white/10 data-[hover]:bg-white/5 data-[selected]:data-[hover]:bg-white/10 data-[focus]:outline-1 data-[focus]:outline-white ${tabClassName}`;

  const panelClassName = `${tabPanelClassName}`;
  return (
    <TabGroup as="section" onChange={onChange}>
      <TabList className={tabContainerClassName}>
        {panels.map(({ id, tabTitle }) => (
          <Tab key={id} className={individualTabClassName}>
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
