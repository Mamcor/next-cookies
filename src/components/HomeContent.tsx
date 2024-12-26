"use client";

import CookiesSessionButton from "./CookiesSessionButton";
import CookiesPersistantButton from "./CookiePersistantButton";
import DeleteCookiesButton from "./DeleteCookiesButton";

const HomeContent = () => {
  return (
    <div className="h-full w-full flex flex-col items-center justify-center gap-6">
      <h1 className="my-8 text-6xl font-black text-center">COOKIES</h1>
      <CookiesSessionButton />
      <CookiesPersistantButton />
      <DeleteCookiesButton />
    </div>
  );
};

export default HomeContent;
