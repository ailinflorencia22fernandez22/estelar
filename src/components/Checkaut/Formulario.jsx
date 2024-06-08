
import './Formulario.css'; 

const Formulario = ({ datosForm, handleChangeImput, handleSubmitForm }) => {
  return (
    <div className="form-container">
      <form className="formulario" onSubmit={handleSubmitForm}>
        <label>
          Nombre:
          <input type="text" name="nombre" value={datosForm.nombre} onChange={handleChangeImput} autoComplete="name" />
        </label>

        <label>
          Teléfono:
          <input type="tel" name="telefono" value={datosForm.telefono} onChange={handleChangeImput} autoComplete="tel" />
        </label>

        <label>
          Email:
          <input type="email" name="email" value={datosForm.email} onChange={handleChangeImput} autoComplete="email" />
        </label>

        <button type="submit">Enviar orden</button>
      </form>
    </div>
  );
};

export default Formulario;

