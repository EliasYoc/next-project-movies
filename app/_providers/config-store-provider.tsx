"use client";
import { createContext, useContext } from "react";
import // ConfigStore,
// createConfigStore,
"../_stores/config-store";
import { TmdbConfigDetails } from "../_services/tmdb/configuration";

const ConfigStoreContext = createContext<TmdbConfigDetails | null>(null);

export const ConfigStoreProvider = ({
  value,
  children,
}: {
  value: TmdbConfigDetails;
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
