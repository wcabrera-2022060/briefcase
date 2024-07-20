import imgTonysKinal from '../../assets/images/TonysKinal.png'
import { Project } from './Project.jsx'
const URL = ''
const URLRepo = ''

export const TonysKinal = () => {
  return (
    <Project
      srcImg={imgTonysKinal}
      proyectTile='Tonys Kinal'
      proyectDesc='Este proyecto fue realizado con Java SE y MySQL, con este proyecto termine de conocer patrones de diseño como MVC, SIngleton, además de crear una aplicación con mejores prácticas y entendiendo más lo que hacia.'
      tecn={'Java, MySQL, POO, MVC, JavaFX, Scene Builder, JasperReports'}
      urlPage={URL}
      urlRepo={URLRepo}
    />
  )
}