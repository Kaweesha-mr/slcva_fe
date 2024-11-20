'use client';

import { useEffect, useState } from 'react';
import { NextUIProvider } from '@nextui-org/react';
import { ThemeProvider as NextThemesProvider } from 'next-themes';

export function Providers({ children }: { children: React.ReactNode }) {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return <NextUIProvider>{children}</NextUIProvider>;
  }

  return (
    <NextUIProvider>
      <NextThemesProvider>{children}</NextThemesProvider>
    </NextUIProvider>
  );
}