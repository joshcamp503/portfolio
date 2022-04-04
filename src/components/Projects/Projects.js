// STYLES
import './Projects.css'

// IMAGES
import Audiophile from '../../assets/audiophile-preview.png'
import WhereInTheWorld from '../../assets/where-in-the-world-preview.png'
import IPLocator from '../../assets/ip-locator-preview.png'
import Portfolio from '../../assets/portfolio-preview.png'

const Projects = () => {

  const handleClick = (url) => {
    window.open(url, '_blank')
  }

  const audioSiteURL = 'https://joshcamp.dev/audiophile'
  const worldSiteURL = 'https://joshcamp.dev/where-in-the-world'
  const ipSiteURL = 'https://joshcamp.dev/ip-locator'
  const portfolioURL = 'https://joshcamp.dev'

  const audioGithub = 'https://github.com/joshcamp503/audiophile'
  const worldGithub = 'https://github.com/joshcamp503/where-in-the-world'
  const ipGithub = 'https://github.com/joshcamp503/ip-locator'
  const portfolioGithub = 'https://github.com/joshcamp503/portfolio'

  return (
    <div className="projects">
      <h1 className="title">PROJECTS</h1>

      <div className="preview-box">
        <h2 className="project-title">Audiophile</h2>
        <img src={Audiophile} alt="audiophile" className="preview-img" />
        <div className="buttons">
          <button className="live-site" onClick={() => {handleClick(audioSiteURL)}}>Live Site</button>
          <button className="github" onClick={() => {handleClick(audioGithub)}}>Github</button>
        </div>
      </div>

      <div className="preview-box">
        <h2 className="project-title">Where in the World?</h2>
        <img src={WhereInTheWorld} alt="where in the world" className="preview-img" />
        <div className="buttons">
          <button className="live-site" onClick={() => {handleClick(worldSiteURL)}}>Live Site</button>
          <button className="github" onClick={() => {handleClick(worldGithub)}}>Github</button>
        </div>
      </div>

      <div className="preview-box">
        <h2 className="project-title">IP Locator</h2>
        <img src={IPLocator} alt="ip locator" className="preview-img" />
        <div className="buttons">
          <button className="live-site" onClick={() => {handleClick(ipSiteURL)}}>Live Site</button>
          <button className="github" onClick={() => {handleClick(ipGithub)}}>Github</button>
        </div>
      </div>

      <div className="preview-box">
        <h2 className="project-title">PORTFOLIO</h2>
        <img src={Portfolio} alt="portfolio" className="preview-img" />
        <div className="buttons">
          <button className="live-site" onClick={() => {handleClick(portfolioURL)}}>Live Site</button>
          <button className="github" onClick={() => {handleClick(portfolioGithub)}}>Github</button>
        </div>
      </div>

    </div>
  )
}

export default Projects
