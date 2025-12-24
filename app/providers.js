"use client";
import { ThemeProvider } from "next-themes";

export function Providers({ children }) {
  return (
    // enableSystem=false se ye sirf aapke toggle par depend karega
    <ThemeProvider attribute="class" defaultTheme="light" enableSystem={false}>
      {children}
    </ThemeProvider>
  );
}