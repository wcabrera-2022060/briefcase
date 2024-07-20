import '../components/styles/Form.css';

export const Form = () => {
  return (
    <form id="valid-form">
      <div className="inputs-container">
        <div className="input-div">
          <label className="form-paceholder">Nombre Completo</label>
          <input
            type="text"
            name="fullname"
            placeholder="Nombre Completo"
          />
        </div>
        <div className="input-div">
          <label className="form-paceholder">Email</label>
          <input
            name="email"
            type="email"
            placeholder="Email"
          />
        </div>
      </div>
      <div className="textarea-container">
        <textarea name="message" placeholder='Mensaje'>

        </textarea>
      </div>
      <div className="btn-form-container">
        <button
          type="submit"
          className="btn btn-primary send"
          id="input"
        >
          Enviar
        </button>
      </div>
    </form>
  );
}