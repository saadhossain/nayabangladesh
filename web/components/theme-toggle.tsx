"use client";

import { MoonIcon, SunIcon } from "@radix-ui/react-icons";
import { useTheme } from "next-themes";

import { Button } from "@/components/ui/button";

export function ModeToggle() {
  const { theme, setTheme } = useTheme();

  // Fallback to "light" if theme is undefined
  const currentTheme = theme === "system" || !theme ? "light" : theme;

  return (
    <Button
      variant="outline"
      size="icon"
      onClick={() => setTheme(currentTheme === "dark" ? "light" : "dark")}
      className='ml-16 md:ml-5'
    >
      {currentTheme === "light" ? (
        <MoonIcon className="h-4 w-4 text-black" />
      ) : (
        <SunIcon className={`h-4 w-4 text-white ${theme === 'system' && 'text-white'}`} />
      )}
    </Button>
  );
}
