"use client";

import { useChangeLocale, useCurrentLocale } from "@/locales/client";

export const LocaleSelect = () => {
  const locale = useCurrentLocale();
  const changeLocale = useChangeLocale();

  return (
    <select
      className="locale-select"
      value={locale}
      onChange={(e) => changeLocale(e.target.value as "fr" | "en")}
    >
      <option value="fr">FR</option>
      <option value="en">EN</option>
    </select>
  );
};
