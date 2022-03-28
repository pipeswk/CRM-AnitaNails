import { useState, useEffect } from 'react'
import Cliente from '../Components/Cliente';

const Inicio = () => {

  const [clientes, setClientes] = useState([]);

  useEffect(() => {
    const obtenerClientesAPI = async () => {
      try {
        const url = 'http://localhost:4000/clientes';
        const respuesta = await fetch(url);
        const resultado = await respuesta.json();
        setClientes(resultado);
      } catch (error) {
        console.log(error);
      }
    }
    obtenerClientesAPI();
  }, [])
  
  console.log(clientes);
  return (
    <>
      <h1 className='font-black text-4xl text-pink-900 text-center'>Clientes de Anita Nails</h1>
      <p className='font-semibold text-lg text mt-3 text-center'>Aqui podras ver, editar, eliminar y gestionar tu base de <span className='text-pink-600 font-bold text-2xl'>Clientes.</span></p>

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
            />
          ) )}
        </tbody>

      </table>

    </>
  )
}

export default Inicio