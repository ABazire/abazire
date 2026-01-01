"use client";

import { useChangeLocale, useCurrentLocale } from "@/locales/client";
import React, { use } from "react";

export const LocaleSelect = () => {
  const locale = useCurrentLocale();
  const changeLocale = useChangeLocale();

  return (
    <select
      value={locale}
      onChange={(e) => changeLocale(e.target.value as "fr" | "en")}
    >
      <option value="fr">FR</option>
      <option value="en">EN</option>
    </select>
  );
};
