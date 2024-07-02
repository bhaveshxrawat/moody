import { useState } from "react";
import Header from "./components/Header";
import Main from "./components/Main";
import { Openpanel } from "@openpanel/web";

const op = new Openpanel({
  clientId: '8cf98031-325e-4c94-a996-630ad6c214cc',
  trackScreenViews: true,
  // trackAttributes: true,
  // trackOutgoingLinks: true,
});

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
