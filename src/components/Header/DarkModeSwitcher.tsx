"use client";

import { useTheme } from "next-themes";
import { useEffect, useState } from "react";
import { Switch } from "@nextui-org/react";
import { MoonIcon } from "../../../public/images/DarkMode/MoonIcon";
import { SunIcon } from "../../../public/images/DarkMode/SunIcon";

export function DarkModeSwitcher() {
  const [mounted, setMounted] = useState(false);
  const { theme, setTheme } = useTheme();

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return null;

  return (
    <li>
      <Switch
        checked={theme === "dark"}
        size="lg"
        color="default"
        startContent={<SunIcon />}
        endContent={<MoonIcon />}
        onChange={() => setTheme(theme === "light" ? "dark" : "light")}
      />
    </li>
  );
}