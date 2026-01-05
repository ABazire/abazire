"use client";

import { useChangeLocale, useCurrentLocale } from "@/locales/client";

export const LocaleSelect = () => {
  const locale = useCurrentLocale();
  const changeLocale = useChangeLocale();

  return (
    <div style={{ position: "relative", display: "inline-block" }}>
      <select
        className="locale-select"
        value={locale}
        onChange={(e) => changeLocale(e.target.value as "fr" | "en")}
      >
        <option value="fr">FR</option>
        <option value="en">EN</option>
      </select>
      <svg
        width="12"
        height="8"
        viewBox="0 0 12 8"
        fill="none"
        style={{
          position: "absolute",
          right: "10px",
          top: "50%",
          transform: "translateY(-50%)",
          pointerEvents: "none",
        }}
      >
        <path
          d="M1 1.5L6 6.5L11 1.5"
          stroke="var(--primary)"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    </div>
  );
};
