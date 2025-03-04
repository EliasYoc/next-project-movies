"use client";
import { createContext, useContext } from "react";
import { TmdbDetailsConfig } from "../_services/tmdb/types";
// import // ConfigStore,
// // createConfigStore,
// "../_stores/config-store";

const ConfigStoreContext = createContext<TmdbDetailsConfig | null>(null);

export const ConfigStoreProvider = ({
  value,
  children,
}: {
  value: TmdbDetailsConfig;
  children: React.ReactNode;
}) => {
  // const storeRef = useRef<configStoreApi | null>(value);
  // if (!storeRef.current) {
  //   storeRef.current = createConfigStore();
  // }
  return (
    <ConfigStoreContext.Provider value={value}>
      {children}
    </ConfigStoreContext.Provider>
  );
};

export const useReadOnlyConfigStore = () => {
  return useContext(ConfigStoreContext);
};
