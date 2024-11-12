import { useState, useEffect } from "react";
import { ThemeProvider } from "./context/theme"
import Card from "./components/Card";
import ThemeBtn from "./components/ThemeBtn";
function App() {
  const [themeMode, setthemeMode] = useState("light");

  const darkTheme = () => { setthemeMode("dark") }//hamne themejs file me kuch nhi likha tha in fuction me so inko yaha define karenge toh unki functionality chali jayegi
  const lightTheme = () => { setthemeMode("light") }


  //actual change mode
  useEffect(() => {
    let htmlM = document.querySelector('html');
    htmlM.classList.remove("dark", "light");
    htmlM.classList.add(themeMode);
  }, [themeMode])
  
  return (
    <ThemeProvider value={{themeMode,darkTheme,lightTheme}}>
    <div className="flex flex-wrap min-h-screen items-center">
      <div className="w-full">
        <div className="w-full max-w-sm mx-auto flex justify-end mb-4">
              <ThemeBtn/>
        </div>

        <div className="w-full max-w-sm mx-auto">
              <Card/>
        </div>
      </div>
    </div>
    </ThemeProvider>
  )
}

export default App
