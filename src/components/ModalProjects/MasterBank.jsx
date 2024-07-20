import imgMasterBank from '../../assets/images/MasterBank.png'
import { Project } from './Project.jsx'
const URL = 'https://vercel.com/wcabrera-projects'
const URLRepo = 'https://github.com/mcastanon-2019078/SystemBank'

export const MasterBank = () => {
  return (
    <Project
      srcImg={imgMasterBank}
      proyectTile='Master Bank'
      proyectDesc='Este proyecto es el más reciente y el mejor que he hecho, puse en práctica todo lo que he aprendido además que ha sido complementado también por un equipo trabajando con SCRUM.'
      tecn={'JavaScript, React, Node, Express, MongoDB, Mongoose, JWT, Vercel, SCRUM'}
      urlPage={URL}
      urlRepo={URLRepo}
    />
  )
}