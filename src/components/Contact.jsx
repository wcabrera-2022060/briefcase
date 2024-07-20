import imgGithub from '../assets/images/github.png'
import imgGmail from '../assets/images/gmail.png'
import imgLinkedin from '../assets/images/linkedin.png'
import imgWhatsapp from '../assets/images/whatsapp.png'
import '../components/styles/Contact.css'
import { ContactNet } from './ContactNet.jsx'
import { Form } from './Form.jsx'
const linkedinLink = 'https://www.linkedin.com/in/wesllycabrera/'
const githubLink = 'https://github.com/wcabrera-2022060'
const whatsappLink = 'https://wa.me/48564534'
const gmailLink = 'weslly.cabrera12@gmail.com'

export const Contact = () => {
  return (
    <section className='s-contact target-section'>
      <div className='row s-contact__header'>
        <div className='column large-12'>
          <h3 className='section-header-allcaps'>
            <span className='black-backgotund'>Contáctame</span>
          </h3>
        </div>
      </div>
      <div className='row s-contact__content'>
        <div className='column large-7 medium-12'>
          <h4 className='huge-text'>
            <span className='black-background'>
              Estoy listo para trabajar en cualquier proyecto que tengas en mente.
            </span>
          </h4>
          <Form />
        </div>
        <div className='column large-4 medium-12'>
          <div className='row contact-infos'>
            <div className='column large-12 medium-6 tab-12'>
              <div className='contact-block'>
                <ContactNet
                stiker={imgGmail}
                alt='Gmail'
                title='Gmail'
                header='Email'
                linkName={gmailLink}
                />
                <ContactNet
                stiker={imgGithub}
                alt='Github'
                title='Github'
                header='Github'
                href={githubLink}
                target='_blank'
                linkName='wcabrera-2022060'
                />
                <ContactNet
                stiker={imgLinkedin}
                alt='Linkedin'
                title='Linkedin'
                header='Linkedin'
                href={linkedinLink}
                target='_blank'
                linkName='Weslly Cabrera'
                />
                <ContactNet
                stiker={imgWhatsapp}
                alt='Whatsapp'
                title='Whatsapp'
                header='Whatsapp'
                href={whatsappLink}
                target='_blank'
                linkName='(+502) 48564534'
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}