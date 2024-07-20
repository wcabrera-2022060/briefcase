import { InfoProjects } from './InfoProjects.jsx'
import './styles/Projects.css'

export const Projects = () => {
  return (
    <section id="portfolio" className="s-portfolio target-section">
      <div className="row s-portfolio__header">
        <div className="column large-12">
          <h3 className="font-500">Mis proyectos</h3>
        </div>
      </div>
      <InfoProjects />
    </section>
  )
}