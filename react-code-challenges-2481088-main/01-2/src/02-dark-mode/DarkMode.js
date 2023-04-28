import { useState, useEffect } from "react"
import React from "react"

export default function DarkMode() {
  const [darkMode, setDarkMode] = useState(false)  //by default darkMode is off
  const [mainClassTags, setTags] = useState("page ")

  //debug purpose only
  useEffect(() => {
    console.log(`Darkmode flag is: ${darkMode}`);
    if (!darkMode) {
      setTags("page dark-mode");
    } else {
      setTags("page");
    }
  }, [darkMode]);

  return (
    <div className={mainClassTags}>
      <button className='dark-mode-button' onClick={() => { setDarkMode(true) }} >Dark Mode</button>
      <button className='light-mode-button' onClick={() => { setDarkMode(false) }} >Light Mode</button>
    </div>
  )
}
