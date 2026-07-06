import { useEffect, useState } from "react";

import Intro from "./components/Intro";
import Login from "./components/Login";
import Home from "./components/Home";

function App() {

  const [page, setPage] = useState("intro");
  const [username, setUsername] = useState("");

  useEffect(() => {

    const timer = setTimeout(() => {
      setPage("login");
    }, 3500);

    return () => clearTimeout(timer);

  }, []);

  const handleLogin = (name) => {

    if (!name.trim()) return;

    setUsername(name);

    setTimeout(() => {
      setPage("home");
    }, 300);

  };

  return (

    <div className="app">

      {/* Animated Background */}

      <div className="gradient-bg">

        <span className="blob blob1"></span>
        <span className="blob blob2"></span>
        <span className="blob blob3"></span>

      </div>

      <div className="noise"></div>

      {page === "intro" && <Intro />}

      {page === "login" && (
        <Login
          onLogin={handleLogin}
        />
      )}

      {page === "home" && (
        <Home
          username={username}
        />
      )}

    </div>

  );

}

export default App;