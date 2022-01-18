import { IconContext } from 'react-icons'

// COMPONENTS
import Home from "./components/Home";
import Navbar from "./components/Navbar";

// HOOKS
import { useMode } from "./hooks/useMode"


function App() {
  const { mode } = useMode()
  return (
    <div className={`App ${mode}`}>
      <IconContext.Provider value={{ size: "2rem" }}>
        <Navbar />
        <Home />
      </IconContext.Provider>
    </div>
  );
}

export default App;
