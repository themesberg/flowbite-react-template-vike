// https://vike.dev/Head

import { ThemeModeScript } from "flowbite-react";
import logoUrl from "../assets/logo.svg";

export default function HeadDefault() {
  return (
    <>
      <link rel="icon" href={logoUrl} />
      <ThemeModeScript />
    </>
  );
}
