import imgAmazon from '../../assets/images/AmazonSystem.png'
import { Project } from './Project.jsx'
const URL = 'https://vercel.com/wcabrera-projects'
const URLRepo = 'https://github.com/wcabrera-2022060/amazon-system'

export const Amazon = () => {
  return (
    <Project
      srcImg={imgAmazon}
      proyectTile='Amazon Clone'
      proyectDesc='Es una api que simula el funcionamient de Amazon, compra de productos, carrito de compras, autorización, proveedores, stock, etc.'
      tecn={'JavaScript, Node, Express, MongoDB, Mongoose, JWT'}
      urlPage={URL}
      urlRepo={URLRepo}
    />
  )
}