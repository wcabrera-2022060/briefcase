import { Skills } from './Skills.jsx'
import './styles/About.css'

export const About = () => {
  return (
    <>
      <section className='s-about target-section'>
        <div className='row'>
          {/* <div className='column large-3 tab-12'>
        <img className='s-about__pic' src={}/>
      </div> */}
          <div className='column large-9 tab-12 s-about__content'>
            <h1 className='about-me'>
              <span className='about-description font-500'>About me</span>
            </h1>
            <div>
              <p className='about-description'>
                Mi nombres es Weslly Alexander Cabrera Morales, tengo 18 años,
                tengo 3 años estudiando programación, actualmente estoy cursando el último año de perito en informática,
                durante este proceso he aprendido mucho y siempre trato de seguir aprendiendo cosas nuevas,
                he hecho muchos proyectos muy interesantes, la rama dónde más conocimientos tengo es en el desarrollo web,
                he realizado proyectos full stack, con el stack MERN, tengo experiencia también con el lenguaje de Java,
                el lenguaje que más me ha llamado la atención es python,
                por lo que me propuse aprender python para replicar mis proyectos de javascript con python por esta razón tambien me encuentro aprendiendo django,
                el aprender python también me ayudara a conseguir mi meta que es el poder ser un analista de ciberseguirdad.
              </p>
              <h1 className='about-me'>
                <span className='about-description font-500'>Formación Académica</span>
              </h1>
              <p className='about-description'>Primaria(pendiente fecha) - Fundación Educativa Fe y Alegría</p>
              <p className='about-description'>Básicos(pendiente - fecha) - Fundación Educativa Fe y Alegría</p>
              <p className='about-description'>Diversificado-Périto en informática(2022-2024) - Centro Educativo Técnico Laboral Kinal</p>
            </div>
            <h2>
              <span className='about-desription font-500'>
                Hábilidades
              </span>
            </h2>
          </div>

        </div>

      </section>
      <Skills />
    </>
  )
}