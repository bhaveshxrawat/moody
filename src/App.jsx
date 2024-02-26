import { useState } from "react";
import Header from "./components/Header";
import Main from "./components/Main";

const isDark = window.matchMedia("(prefers-color-scheme: dark)").matches;

export default function App() {
  const [userPrefersDark, setUserPrefersDark] = useState(isDark);
  return (
    <>
      <Header userPrefers={userPrefersDark} onSetUserPreferDark={setUserPrefersDark}/>
      <Main userPrefers={userPrefersDark}/>
    </>
  )
}
