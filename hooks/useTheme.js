import { useContext } from "react";
import { ThemeProviderContext } from "../contexts/ThemeProviderContext";

// export function useTheme() {
//     const [isDark, setIsDark] = useContext(ThemeProviderContext)
//     return [isDark, setIsDark] 
// }
export default function useTheme() {
    const [isDark, setIsDark] = useContext(ThemeProviderContext)
    return [isDark, setIsDark] 
}
