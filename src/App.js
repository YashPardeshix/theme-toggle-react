import React, { useState } from "react";
import "./App.css";

function App() {
  const [isDark, setIsDark] = useState(false);

  const toggleTheme = () => {
    setIsDark((prevMode) => !prevMode);
  };

  return (
    <div className={isDark ? "app dark" : "app light"}>
      <h1>{isDark ? "Dark Mode" : "Light Mode"}</h1>
      <button onClick={toggleTheme} className="toggle-btn">
        <span className="icon">{isDark ? "🌙" : "🌞"}</span> Toggle Theme
      </button>
    </div>
  );
}

export default App;
