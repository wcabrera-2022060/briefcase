
export const Project = ({
  srcImg,
  proyectTile,
  proyectDesc,
  tecn,
  urlPage,
  urlRepo,
  btnPage
}) => {
  return (
    <div className='modal-internal-container'>
      <img className='proyect-image' src={srcImg} title='Banco Java' />
      <div>
        <p className='modal__title'>{proyectTile}</p>
        <p>
          {proyectDesc}
          <br />
          <strong>Habilidades utilizadas:</strong>
          <br />
          {tecn}
        </p>
        <div className='link-container'>
          <a href={urlPage} className='btn btn_primary'>
            {btnPage ? btnPage : <p>Ver página</p>}
          </a>
          <a href={urlRepo} className='btn btn_secundary'>
            Ver repositorio
          </a>
        </div>
      </div>
    </div>
  )
}