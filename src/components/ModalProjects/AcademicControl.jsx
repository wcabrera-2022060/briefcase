import imgAcademicControl from '../../assets/images/AcademicControl.png'
import { Project } from './Project.jsx'
const URL = 'https://vercel.com/wcabrera-projects'
const URLRepo = 'https://github.com/wcabrera-2022060/academic-control'

export const AcademicControl = () => {
  return (
    <Project
      srcImg={imgAcademicControl}
      proyectTile='Academic Control'
      proyectDesc='Es una api diseñada para el manejo de grandes cantidades de datos, todos las personas de un instituto y los cursos que se imparten.'
      tecn={'JavaScript, Node, Express, MongoDB, Mongoose, JWT'}
      urlPage={URL}
      urlRepo={URLRepo}
    />
  )
}