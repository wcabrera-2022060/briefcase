import imgInterfer from '../../assets/images/Interfer.png'
import { Project } from './Project.jsx'
const URL = 'https://vercel.com/wcabrera-projects'
const URLRepo = 'https://github.com/wcabrera-2022060/interfer-system'

export const Interfer = () => {
  return (
    <Project
      srcImg={imgInterfer}
      proyectTile='Interfer'
      proyectDesc='Esta aplicación es puramente backend, hecha con Node, una aplicacion centrada en generar reportes de una empresa en formato excel'
      tecn={'JavaScript, Node, Express, MongoDB, Mongoose, JWT'}
      urlPage={URL}
      urlRepo={URLRepo}
    />
  )
}