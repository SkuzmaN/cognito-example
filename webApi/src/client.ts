import ky, { Options } from "ky";

export const apiClient = (token?: string) => {
  const config: Options = {
    prefixUrl: (process.env.REACT_APP_API_URI as unknown) as string,
  };
  if (token) {
    config.headers = {
      Authorization: `Bearer ${token}`,
    };
  }
  return ky.create(config);
};