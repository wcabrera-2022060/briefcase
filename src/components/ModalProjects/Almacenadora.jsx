import imgAlmacenadora from '../../assets/images/Almacenadora.png'
import { Project } from './Project.jsx'
const URL = 'https://vercel.com/wcabrera-projects'
const URLRepo = 'https://github.com/Lcruz-2019072/Almacenadora-BugBusters'

export const Almacenadora = () => {
  return (
    <Project
      srcImg={imgAlmacenadora}
      proyectTile='Almacenadora To Do List'
      proyectDesc='Un proyecto bastante sencillo pero dónde se ponen en práctica muchos de los conceptos de React y Node.'
      tecn={'JavaScript, React, Node, Express, MongoDB, Mongoose, JWT, Vercel, SCRUM'}
      urlPage={URL}
      urlRepo={URLRepo}
    />
  )
}