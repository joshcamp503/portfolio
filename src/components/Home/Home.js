// STYLES
import './Home.css'

// ICONS
import { FaReact } from 'react-icons/fa'
import { SiJavascript } from 'react-icons/si'
import { FaHtml5 } from 'react-icons/fa'
import { SiCss3 } from 'react-icons/si'

// HOOKS
import { useMode } from "../../hooks/useMode"

const Home = () => {
  const { mode } = useMode()

  return (
    <div className={`home ${mode}`}>
      <div className="react-icon"><FaReact /></div>
      <div className="javascript-icon"><SiJavascript /></div>
      <div className="css-icon"><SiCss3 /></div> 
      <div className="html-icon"><FaHtml5 /></div> 
      <div className="content">   
        <h1>
          <div className="container"><div id="first-name" className={`slide-over ${mode}`}>Josh </div></div>
          <div className="container"><div id="last-name" className={`slide-down ${mode}`}>Campanella</div></div>
        </h1>
        <h3>
          <div className="container"><div id="function" className={`fade-in ${mode}`}>function</div></div>
          <div className="container"><div id="title" className={`typed ${mode}`}>WebDeveloper()</div></div>
        </h3>
        <div className="button-box">
          <button className="call-to-action">SEE MY WORK</button>
          <button className="resume-btn">SEE MY RESUME</button>
        </div>
      </div>
    </div>
  )
}

export default Home
