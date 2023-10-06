import React, { useState} from "react";
import reactLogo from "../assets/react.svg";
import viteLogo from "/vite.svg";
import ThemeChanger from "./ThemeChanger";
import Counter from "./Counter"

const Card = () => {
  
  return (
    <div >
      
      <div>
        <ThemeChanger/>
        <a href="https://vitejs.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Vite + React</h1>
      <div className="card">
        <Counter/>
      </div>
    </div>
  );
};

export default Card;
