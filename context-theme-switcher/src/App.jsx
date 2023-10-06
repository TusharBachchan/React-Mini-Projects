import {useState} from 'react'
import './App.css'
import Logo from "./components/Logo"
import Paragraph from "./components/Paragraph"
import { Mycontext } from './context/Mycontext'
function App() {
  const [themeColor, setThemeColor] = useState("white");
  const [themeTextColor, setThemeTextColor] = useState("black");
  const themeHandler = () => {
    if (themeColor === "white"){
      setThemeColor("black");
      setThemeTextColor("white")
    } 
    else { 
      setThemeColor("white");
      setThemeTextColor("black")
    }
  };

  return (
    <Mycontext.Provider value={{themeHandler}}>
      <div style={{ backgroundColor: themeColor, color: themeTextColor }}>
        <Logo />
        <Paragraph />
      </div>
    </Mycontext.Provider>
  );
}

export default App
