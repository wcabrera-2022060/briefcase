
import imgAlmacenadora from '../assets/images/Almacenadora.png'
import imgBancoJava from '../assets/images/BancoJava.png'
import imgMasterBank from '../assets/images/MasterBank.png'
import imgAcademicControl from '../assets/images/RAcademic.png'
import imgAmazonSystem from '../assets/images/RAmazon.png'
import imgInterfer from '../assets/images/RInterfer.png'
import imgTheHeaven from '../assets/images/TheHeaven.png'
import imgTonysKinal from '../assets/images/TonysKinal.png'
import imgVida from '../assets/images/Vida.png'
import { InfoProject } from './InfoProject.jsx'
import { Modal } from './Modal.jsx'
import { AcademicControl } from './ModalProjects/AcademicControl.jsx'
import { Almacenadora } from './ModalProjects/Almacenadora.jsx'
import { Amazon } from './ModalProjects/Amazon.jsx'
import { BancoJava } from './ModalProjects/BancoJava.jsx'
import { Interfer } from './ModalProjects/Interfer.jsx'
import { MasterBank } from './ModalProjects/MasterBank.jsx'
import { TheHeaven } from './ModalProjects/TheHeaven.jsx'
import { TonysKinal } from './ModalProjects/TonysKinal.jsx'
import { Vida } from './ModalProjects/Vida.jsx'
import './styles/Modal.css'
import { useModal } from './useModal.jsx'

export const InfoProjects = () => {
  const [isOpenBancoJava, openBancoJava, closeBancoJava] = useModal(false)
  const [isOpenTonysKinal, openTonysKinal, closeTonysKinal] = useModal(false)
  const [isOpenMasterBank, openMasterBank, closeMasterBank] = useModal(false)
  const [isOpenAlmacenadora, openAlmacenadora, closeAlmacenadora] = useModal(false)
  const [isOpenTheHeaven, openTheHeaven, closeTheHeaven] = useModal(false)
  const [isOpenVida, openVida, closeVida] = useModal(false)
  const [isOpenAmazonSystem, openAmazonSystem, closeAmazonSystem] = useModal(false)
  const [isOpenInterfer, openInterfer, closeInterfer] = useModal(false)
  const [isOpenAcademicControl, openAcademicControl, closeAcademicControl] = useModal(false)
  const [isOpenOpinion, openOpinion, closeOpinion] = useModal(false)

  return (
    <div className='row collapse block-large-1-4 block-medium-1-3 block-tab-1-2 block-500-stack folio-list'>
      <InfoProject
        image={imgBancoJava}
        e={openBancoJava}
        imgTitle='Banco con Java'
        imgDesc='Sistema encargado de gestionar cuentas, transferencias, depósitos y retiros de un banco, priorzando la seguridad.'
      />
      <Modal isOpen={isOpenBancoJava} closeModal={closeBancoJava}>
        <BancoJava />
      </Modal>

      <InfoProject
        image={imgTonysKinal}
        e={openTonysKinal}
        imgTitle='Tonys Kinal'
        imgDesc='Sistema que gestiona y organiza un minirestaurante de comida rápida que tiene servicios a eventos, afilados, etc.'
      />
      <Modal isOpen={isOpenTonysKinal} closeModal={closeTonysKinal}>
        <TonysKinal />
      </Modal>

      <InfoProject
        image={imgMasterBank}
        e={openMasterBank}
        imgTitle='Master Bank'
        imgDesc='Este proyecto también esta inspirado en banco, pero este proyecto es más avanzado y con mejores prácticas.'
      />
      <Modal isOpen={isOpenMasterBank} closeModal={closeMasterBank}>
        <MasterBank />
      </Modal>

      <InfoProject
        image={imgAlmacenadora}
        e={openAlmacenadora}
        imgTitle='Almacenadora'
        imgDesc='Este proyecto es un tipo ToDoList, capaz de ordenar tareas por orden de prioridad y gestionar un equipo.'
      />
      <Modal isOpen={isOpenAlmacenadora} closeModal={closeAlmacenadora}>
        <Almacenadora />
      </Modal>

      <InfoProject
        image={imgTheHeaven}
        e={openTheHeaven}
        imgTitle='The Heaven'
        imgDesc='Un proyecto que sirve para llevar el control de hoteles, viajes, servicios, eventos y tours.'
      />
      <Modal isOpen={isOpenTheHeaven} closeModal={closeTheHeaven}>
        <TheHeaven />
      </Modal>

      <InfoProject
        image={imgVida}
        e={openVida}
        imgTitle='Vida'
        imgDesc='Una propuesta de proyecto para un sistema que se encargue de alertar sobre personas desaparecidas.'
      />
      <Modal isOpen={isOpenVida} closeModal={closeVida}>
        <Vida />
      </Modal>

      <InfoProject
        image={imgAmazonSystem}
        e={openAmazonSystem}
        imgTitle='Amazon System'
        imgDesc='Un proyecto que simula el sistema de Amazon, con un enfoque en la seguridad y la escalabilidad.'
      />
      <Modal isOpen={isOpenAmazonSystem} closeModal={closeAmazonSystem}>
        <Amazon />
      </Modal>

      <InfoProject
        image={imgInterfer}
        e={openInterfer}
        imgTitle='Interfer'
        imgDesc='Una aplicación web centrada en el sistema de reportes de una empresa de comunicaciones y seguridad.'
      />
      <Modal isOpen={isOpenInterfer} closeModal={closeInterfer}>
        <Interfer />
      </Modal>

      <InfoProject
        image={imgAcademicControl}
        e={openAcademicControl}
        imgTitle='Academic Control'
        imgDesc='Una aplicación que se encarga de gestionar la información de los estudiantes, profesores y cursos de un instituto.'
      />
      <Modal isOpen={isOpenAcademicControl} closeModal={closeAcademicControl}>
        <AcademicControl />
      </Modal>
    </div>
  )
}