export interface TmdbConfigDetails {
  change_keys: string[];
  images: {
    base_url: string;
    secure_base_url: string;
    backdrop_sizes: string[];
    logo_sizes: string[];
    poster_sizes: string[];
    profile_sizes: string[];
    still_sizes: string[];
  };
}

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
export const getTmdbConfiguration = (
  configuration: ConfigurationType
): Promise<Response> => {
  const { which } = configuration;
  const paramTuple =
    configuration && which === "countries"
      ? Object.entries(configuration.params)
      : [];
  const stringParams = new URLSearchParams(paramTuple).toString();

  return fetch(
    `${process.env.NEXT_PUBLIC_BASE_URL_TMDB}/configuration${
      which === "details" ? "" : `${which}`
    }${stringParams}`,
    {
      headers: {
        Authorization: `Bearer ${process.env.NEXT_PUBLIC_ACCESS_TOKEN_TMDB}`,
      },
    }
  );
};
