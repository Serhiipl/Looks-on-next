import localFont from "next/font/local";

export const marcellusRegular = localFont({
  weight: "400",
  src: "./fonts/marcellusRegular.ttf",
  display: "swap",
  preload: true,
  fallback: ["system-ui", "arial"],
  variable: "--font-marcellusRegular",
});
export const poiretOneRegular = localFont({
  weight: "400",
  src: "./fonts/poiretOneRegular.ttf",
  display: "swap",
  preload: true,
  fallback: ["system-ui", "arial"],
  variable: "--font-poiretOneRegular",
});
