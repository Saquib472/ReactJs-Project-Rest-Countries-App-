import useTheme from "../hooks/useTheme";

export default function Header() {
  // const [isDark, setIsDark] = useState(JSON.parse(localStorage.getItem('isDarkTheme')))
  // if(isDark){
  //   document.body.classList.add('dark')
  // }else{
  //   document.body.classList.remove('dark')
  // }

  const [isDark, setIsDark] = useTheme()

  return (
    <header className={`header-container ${isDark ? 'dark' : ''}`}>
      <div className="header-content">
        <h2 className="title">
          <a href="/">Where in the world?</a>
        </h2>
        <p className="theme-changer" onClick={()=>{
          localStorage.setItem('isDarkTheme', !isDark)
          setIsDark(!isDark)
        }}>
          <i className={`fa-solid fa-${isDark?'sun':'moon'}`}></i>&nbsp;&nbsp;{isDark?'Light':'Dark'} Mode
        </p>
      </div>
    </header>
  );
}
