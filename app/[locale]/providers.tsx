"use client";

import { I18nProviderClient } from "@/locales/client";
import { ThemeProvider as NextThemesProvider } from "next-themes";
import { PropsWithChildren } from "react";

export const Providers = (props: PropsWithChildren<{ locale: string }>) => {
  return (
    <I18nProviderClient locale={props.locale}>
      <NextThemesProvider
        attribute="class"
        defaultTheme="system"
        enableSystem
        disableTransitionOnChange
      >
        {props.children}
      </NextThemesProvider>
    </I18nProviderClient>
  );
};
