import Header from "./components/Header";
import { Outlet } from "react-router";
import './App.css'
import ThemeProvider from "./contexts/ThemeProviderContext";

export default function App() {
  // const [isDark, setIsDark] = useState(JSON.parse(localStorage.getItem('isDarkTheme')))
  return (
    <ThemeProvider> 
      <Header />
      <Outlet />
    </ThemeProvider>
  )
}
 