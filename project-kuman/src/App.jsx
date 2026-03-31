import { Routes, Route, Link } from "react-router-dom";
import { useState } from "react";
import Sabila from "./sabila";
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import heroImg from './assets/hero.png'
import './App.css'

function Home() {
  const [count, setCount] = useState(0);

  return (
    <>
      <section id="center">
        <div className="hero">
          <img src={heroImg} className="base" width="170" height="179" alt="" />
          <img src={reactLogo} className="framework" alt="React logo" />
          <img src={viteLogo} className="vite" alt="Vite logo" />
        </div>

        <div>
          <h1>Home Page</h1>
          <p>Welcome ke project React Vite 🚀</p>

          {/* LINK KE PROFILE */}
          <Link to="/sabila">
            <button>Lihat Profil Sabila</button>
          </Link>
        </div>

        <button
          className="counter"
          onClick={() => setCount((count) => count + 1)}
        >
          Count is {count}
        </button>
      </section>
    </>
  );
}

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/sabila" element={<Sabila />} />
    </Routes>
  );
}

export default App;