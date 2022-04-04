import { IconContext } from 'react-icons'

// COMPONENTS
import Home from "./components/Home/Home";
import Navbar from "./components/Navbar/Navbar";
import Projects from './components/Projects/Projects';

// HOOKS
import { useMode } from "./hooks/useMode"

function App() {
  const { mode } = useMode()

  return (
    <div className={`App ${mode}`}>
      <IconContext.Provider value={{ size: "2rem" }}>
        <Navbar />
        <Home />
        <Projects />
      </IconContext.Provider>
    </div>
  );
}

export default App;
