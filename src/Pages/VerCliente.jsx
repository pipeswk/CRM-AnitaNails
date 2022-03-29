import { useParams } from 'react-router-dom'
import { useState, useEffect } from 'react';
import Spinner from '../Components/Spinner'


const VerCliente = () => {

    const [infoCliente, setInfoCliente] = useState({})
    const [cargando, setCargando] = useState(false)

    const { nombres, apellidos, email, nacimiento, telefono } = infoCliente

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
    <div>
        {cargando ? <Spinner /> : (
            <>
                <p className='text-2xl mt-3'>
                    <span className='text-gray-700 font-bold'>Cliente: </span>
                    {`${nombres} ${apellidos}`}
                </p>
                <p className='text-2xl mt-3'>
                    <span className='text-gray-700 font-bold'>Email: </span>
                    {email}
                </p>
                <p className='text-2xl mt-3'>
                    <span className='text-gray-700 font-bold'>Telefono: </span>
                    {telefono}
                </p>
                <p className='text-2xl mt-3'>
                    <span className='text-gray-700 font-bold'>Fecha de cumpleaños: </span>
                    {nacimiento}
                </p>
            </>
        )}
    </div>
  )
}

export default VerCliente