// STYLES
import './component-styles/Navbar.css'

// COMPONENTS
import ModeSelector from './ModeSelector'

// HOOKS
import { useMode } from "../hooks/useMode"

const Navbar = () => {
  const { mode } = useMode()

  return (
    <nav className={`navbar ${mode}`}>
      <ul>
        <li>About</li>
        <li>Projects</li>
        <li>Resume</li>
        <li>Contact</li>
        <li><ModeSelector /></li>
      </ul>
    </nav>
  )
}

export default Navbar
