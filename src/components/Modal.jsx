export const Modal = ({ children, isOpen, closeModal }) => {
  const handleModalClick = (e) => e.stopPropagation()
  return (
    <article onClick={closeModal} className={`modal ${isOpen && "is-open"}`}>
      <div className='modal-container' onClick={handleModalClick}>
        <button className='modal-close' onClick={closeModal}>
          <span className='x'>X</span>
        </button>
        {children}
      </div>
    </article>
  )
}