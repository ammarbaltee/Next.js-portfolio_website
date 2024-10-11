'use client';

import { Button } from "./ui/button";
import { MoonIcon, SunIcon } from "@radix-ui/react-icons";
import { useTheme } from 'next-themes';

const ThemeToggler = () => {
  const { theme, setTheme } = useTheme();

  return (
    <div>
      <Button
        onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')}
        className="group relative z-10 rounded-full bg-white/90 px-3 py-2 shadow-lg shadow-zinc-800/5 ring-1 ring-zinc-900/5 backdrop-blur transition dark:bg-zinc-800/90 dark:ring-white/10 dark:hover:ring-white/20 hover:bg-[#14b8a6]"
        aria-label={`Switch to ${theme === 'dark' ? 'light' : 'dark'} theme`}
      >
        {/* SunIcon for light theme with no background color on hover, only darkening the icon */}
        <SunIcon className="h-[1.2rem] w-[1.2rem] rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0 text-gray-500 group-hover:text-white" />
        
        {/* MoonIcon for dark theme */}
        <MoonIcon className="absolute h-[1.2rem] w-[1.2rem] rotate-90 scale-0 transition-all dark:-rotate-0 dark:scale-100 text-teal-500 group-hover:text-teal-600" />
      </Button>
    </div>
  );
};

export default ThemeToggler;
