
import { useState } from "react";
import Card from "./Card";
import ErrorMessage from "./ErrorMessage";


const Form = () => {
  const [cliente, setCliente] = useState({
    nombre: "",
    cancion: "",
  });
  const [show, setShow] = useState(false);
  const [error, setError] = useState(false);
      
  const handleName = (e) =>
    setCliente({ ...cliente, nombre: e.target.value });
  const handleCancion = (e) =>
    setCliente({ ...cliente, cancion: e.target.value });

   const handleSubmit = (e) => {
    e.preventDefault();
    if (
      cliente.nombre.trim().length >= 3 &&
      !cliente.nombre.startsWith(' ') &&
      cliente.cancion.trim().length >= 6
    ) {
      setError(false);
      setShow(true);
    } else {
      setError(true);
 
    }
    };
    console.log(cliente)

  return (
    <>
      <form onSubmit={handleSubmit}>
       <label>Nombre:</label>
          <input type="text" value={cliente.nombre} onChange={handleName} />
      
      <label>Cancion favorita:</label>
          <input type="text" value={cliente.cancion} onChange={handleCancion} />
       
        <button>Enviar</button>
      </form>
      {show && <Card cliente = {cliente} />}
      {error && <ErrorMessage />}
   </>

  );
};

export default Form;

