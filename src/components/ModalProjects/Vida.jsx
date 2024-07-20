import imgVida from '../../assets/images/Vida.png'
import { Project } from './Project.jsx'
const URL = 'https://vercel.com/wcabrera-projects'
const URLRepo = 'https://github.com/mcastanon-2019078/Vida'

export const Vida = () => {
  return (
    <Project
      srcImg={imgVida}
      proyectTile='Vida'
      proyectDesc='Esta aplicación fue mi primera experiencia en el desarollo móvil, esta hecha usando gran parte del stack MERN, pero ahora para las vistas usamos React Native.'
      tecn={'JavaScript, ReactNative, Node, Express, MongoDB, Mongoose, JWT, Vercel, SCRUM'}
      urlPage={URL}
      urlRepo={URLRepo}
    />
  )
}