import Formulario from '../Components/Formulario'
import { useParams } from 'react-router-dom'
import { useState, useEffect } from 'react'
import Spinner from '../Components/Spinner'

const EditarCliente = () => {

    const [infoCliente, setInfoCliente] = useState({})
    const [cargando, setCargando] = useState(false)


    const {id} = useParams();

    useEffect(() => {
        setCargando(true);
        const obtenerClienteAPI = async () => {
            try {
                const url = `http://localhost:4000/clientes/${id}`;
                const respuesta = await fetch(url);
                const resultado = await respuesta.json();
                setInfoCliente(resultado);
            } catch (error) {
                console.log(error);
            }
            setCargando(false);
        }
        obtenerClienteAPI();
    }, [])
    

  return (
    <>
      <h1 className='font-black text-4xl text-pink-900'>Editar Cliente</h1>
      <p className='font-semibold text-lg text mt-3'>Llena los siguientes campos para <span className='text-pink-600 font-bold text-2xl'>EDITAR</span> este cliente </p>

      {cargando ? (
        <Spinner />
      ) : (
        <Formulario
          id={id}
          infoCliente={infoCliente}
        />
      )}
    </>
  )
}

export default EditarCliente