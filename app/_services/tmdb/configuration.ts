import { ITmdbDetailsConfig } from "@/app/_services/tmdb/types";

type ConfigurationType =
  | { which: "details" }
  | { which: "countries"; params: ConfigurationCountriesParams }
  | { which: "languages" }
  | { which: "primary_translations" }
  | { which: "timezones" }
  | { which: "jobs" };

interface ConfigurationCountriesParams {
  language: `${string}-${string}`;
}
export const getTmdbConfiguration = async (
  configuration: ConfigurationType
) => {
  const { which } = configuration;
  const paramTuple =
    configuration && which === "countries"
      ? Object.entries(configuration.params)
      : [];
  const stringParams = new URLSearchParams(paramTuple).toString();

  const res = await fetch(
    `${process.env.NEXT_PUBLIC_BASE_URL_TMDB}/configuration${
      which === "details" ? "" : `${which}`
    }${stringParams}`,
    {
      headers: {
        Authorization: `Bearer ${process.env.NEXT_PUBLIC_ACCESS_TOKEN_TMDB}`,
      },
    }
  );
  const data: ITmdbDetailsConfig = await res.json();
  return data;
};
