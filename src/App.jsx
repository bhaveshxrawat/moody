import { useState, useEffect } from "react";
import Header from "./components/Header";
import Main from "./components/Main";
import supabase from "./utils/Supabase";
import Homepage from "./components/Homepage";
const isDark = window.matchMedia("(prefers-color-scheme: dark)").matches;
const isInDevelopment = import.meta.env.VITE_DEV_MODE === 'true';

export default function App() { 
  const [userPrefersDark, setUserPrefersDark] = useState(isDark);
  const [session, setSession] = useState(null)
  useEffect(() => {
    supabase.auth.getSession().then(({ data: { session } }) => {
      setSession(session)
    })

    const {
      data: { subscription },
    } = supabase.auth.onAuthStateChange((_event, session) => {
      setSession(session)
    })

    return () => subscription.unsubscribe()
  }, [])

  if (session || isInDevelopment) {
    return (
      <>
      <Header userPrefers={userPrefersDark} onSetUserPreferDark={setUserPrefersDark}/>
      <Main userPrefers={userPrefersDark}/>
    </>)
  }
  else {
    return (
      <>
        <Header userPrefers={userPrefersDark} onSetUserPreferDark={setUserPrefersDark}/>
        <Homepage userPrefers={userPrefersDark}/>
      </>
    )
  }
}