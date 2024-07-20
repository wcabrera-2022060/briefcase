import imgBancoJava from '../../assets/images/BancoJava.png'
import { Project } from './Project.jsx'
const URL = ''
const URLRepo = ''

export const BancoJava = () => {
  return (
    <Project
      srcImg={imgBancoJava}
      proyectTile='Banco Java'
      proyectDesc='Este fue mi proyecto final de 4to en Java, es un proyecto dónde puse en práctica los concomientos de todo el año, MVC, POO, MySQL, etc.'
      tecn={'Java, MySQL, POO, MVC'}
      urlPage={URL}
      urlRepo={URLRepo}
    />
  )
}