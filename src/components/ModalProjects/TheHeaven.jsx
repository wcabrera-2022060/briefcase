import imgTheHeaven from '../../assets/images/TheHeaven.png'
import { Project } from './Project.jsx'
const URL = 'https://vercel.com/wcabrera-projects'
const URLRepo = 'https://github.com/wcabrera-2022060/the-heaven'

export const TheHeaven = () => {
  return (
    <Project
      srcImg={imgTheHeaven}
      proyectTile='The Heaven'
      proyectDesc='Este proyecto web fue realizado con el stack MERN, este proyecto fue bastante complicado y tuvo muchos contratiempos al trabajar en equipo, afortunadamente también aprendí esta habilidad y mejore mi lógica.'
      tecn={'JavaScript, React, Node, Express, MongoDB, Mongoose, JWT'}
      urlPage={URL}
      urlRepo={URLRepo}
    />
  )
}