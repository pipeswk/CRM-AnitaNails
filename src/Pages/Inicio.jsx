import { useState, useEffect } from 'react'
import Cliente from '../Components/Cliente';
import Spinner from '../Components/Spinner';

const Inicio = () => {

  const [clientes, setClientes] = useState([]);
  const [cargando, setCargando] = useState(false)

  useEffect(() => {
    setCargando(true);
    const obtenerClientesAPI = async () => {
      try {
        const url = 'http://localhost:4000/clientes';
        const respuesta = await fetch(url);
        const resultado = await respuesta.json();
        setClientes(resultado);
      } catch (error) {
        console.log(error);
      }
      setCargando(false);
    }
    obtenerClientesAPI();
  }, [])

  const handleDelete = async (id) => {
    const confirmar = confirm('¿Deseas eliminar a este cliente?')

    if(confirmar) {
      console.log(`Eliminando cliente id: ${id}`)
      try {
        const url = `http://localhost:4000/clientes/${id}`
        const respuesta = await fetch(url, {
            method: 'DELETE'
        })
        await respuesta.json();
        const recargarClientes = clientes.filter( cliente => cliente.id !== id )
        setClientes(recargarClientes)
      } catch (error) {
          console.log(error)
      }
      }
  }
  
  console.log(clientes);
  return (
    <>
      <h1 className='font-black text-4xl text-pink-900 text-center'>Clientes de Anita Nails</h1>
      <p className='font-semibold text-lg text mt-3 text-center'>Aqui podras ver, editar, eliminar y gestionar tu base de <span className='text-pink-600 font-bold text-2xl'>Clientes.</span></p>

      {cargando ? (
        <Spinner />
      ) : (
        <table className='w-full mt-5 table-auto shadow-xl bg-white rounded-xl'>
          <thead className='bg-pink-200 rounded-xl'>  
            <tr>
              <th className='p-2'>Nombre</th>
              <th className='p-2'>Contacto</th>
              <th className='p-2'>Cumpleaños</th>
              <th className='p-2'>Acciones</th>
            </tr>
          </thead>

          <tbody>
            {clientes.map( cliente => (
              <Cliente 
                key={cliente.id}
                cliente={cliente}
                handleDelete={handleDelete}
              />
            ) )}
          </tbody>

        </table>
      )}

    </>
  )
}

export default Inicio