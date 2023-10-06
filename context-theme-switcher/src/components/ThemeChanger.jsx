import React, {useState, useContext} from 'react'
import { Mycontext } from '../context/Mycontext';
const ThemeChanger = () => {
   const {themeHandler} = useContext(Mycontext);
  return (
    <div>
      <button onClick={themeHandler}>Change Theme</button>
    </div>
  );
}

export default ThemeChanger