import { createStore } from "zustand";
import { TmdbConfigDetails } from "../_services/tmdb/configuration";
// como solo queria que al iniciar la app cargara los datos de un fetch que seran de solo lectura (como configuracion) para la mayoria de los componentes de la app, creo que la conclusion es solo usar context
// nada de aqui se esta usando

interface ConfigState {
  details: TmdbConfigDetails | null;
}
interface ConfigActions {
  setData: (data: ConfigState) => void;
}

export type ConfigStore = ConfigState & ConfigActions;

// const defaultInitState: ConfigState = {
//   change_keys: [],
//   images: {
//     base_url: "",
//     secure_base_url: "",
//     backdrop_sizes: [],
//     logo_sizes: [],
//     poster_sizes: [],
//     profile_sizes: [],
//     still_sizes: [],
//   },
// };

export const createConfigStore = () => {
  return createStore<ConfigStore>()((set) => ({
    details: null,
    setData: (data) => set(data),
  }));
};
