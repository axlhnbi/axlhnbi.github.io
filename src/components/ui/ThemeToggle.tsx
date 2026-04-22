"use client"

import * as React from "react";
import { Moon, Sun} from "lucide-react";
import { useTheme } from "next-themes"

export function ThemeToggle() {
    const { theme, setTheme } = useTheme();
    const [mounted, setMounted] = React.useState(false);

    React.useEffect(() => {
        setMounted(true);
    }, []);

    if(!mounted){
        return <div className="w-10 h-10" />
    }

    return(
        <button
            onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
            className="p-2 rounded-lg bg-background dark:bg-gray-800 text-dark dark:text-gray-200 border border-gray-300 dark:border-gray-700 hover:border-primary transition-all hover:cursor-pointer"
            aria-label="Toggle Theme"
        >
            {theme === "dark" ? (
                <Sun className="w-5 h-5" strokeWidth={2} />
            ) : (
                <Moon className="w-5 h-5" strokeWidth={2} />
            )}
        </button>
    )
}