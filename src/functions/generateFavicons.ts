import { Icon } from "next/dist/lib/metadata/types/metadata-types";

export const generateFavicons = (): Icon[] => {
  return [
    {
      rel: "icon",
      type: "image/svg+xml",
      url: "/favicon.svg",
    },
    {
      rel: "icon",
      type: "image/png",
      url: "/favicon.png",
    },
    {
      rel: "icon",
      type: "image/x-icon",
      url: "/favicon.ico",
    },
    {
      rel: "apple-touch-icon",
      sizes: "180x180",
      url: "/apple-touch-icon.png",
    },
  ];
};
