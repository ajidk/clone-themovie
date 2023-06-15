import { titleState } from "./interface";

export const searchTitle = (dataPopular: titleState[], popular: string) =>
  dataPopular
    .find((item) => item.title === popular)
    ?.title?.toLocaleLowerCase()
    .replaceAll(" ", "_");
