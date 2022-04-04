// STYLES
import './Navmenu.css'

// COMPONENTS
import { Link } from 'react-scroll/modules'

const Navmenu = () => {

  return (
    <ul className="navmenu">
      <li><Link to="projects" spy={true} smooth={true} duration={500} offset={-70}>Projects</Link></li>
      <li><Link to="resume" spy={true} smooth={true} duration={500} offset={-70}>Resume</Link></li>
      <li>About</li>
      <li>Contact</li>
    </ul>
  )
}

export default Navmenu