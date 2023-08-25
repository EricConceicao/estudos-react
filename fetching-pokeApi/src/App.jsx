// Library imports
import { Routes, Route } from "react-router-dom";

// Page imports
import Home from './components/pages/Home.jsx';
import Pokemon from './components/pages/Pokemon.jsx';
import Berry from './components/pages/Berry.jsx';
import Teams from './components/pages/Teams.jsx'

function App() {

  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/pokemon" element={<Pokemon />} />
      <Route path="/berry" element={<Berry />} />
      <Route path="/teams" element={<Teams />} />
    </Routes>
  )
}

export default App
