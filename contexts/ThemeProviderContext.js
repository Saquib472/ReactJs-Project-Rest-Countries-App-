import { createContext, useState } from "react";

export const ThemeProviderContext = createContext()

export default function ThemeProvider({children}){
    const [isDark, setIsDark] = useState(JSON.parse(localStorage.getItem('isDarkTheme')))
    return (
    <ThemeProviderContext.Provider value={[isDark, setIsDark]}> 
        {
            children
        }
    </ThemeProviderContext.Provider>
    )
}